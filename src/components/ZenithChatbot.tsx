
import { useState, useEffect, useRef, FormEvent } from "react";
import { Bot, X, Send, User } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ChatInput } from "@/components/ui/chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat-message-list";
import { 
  ChatBubble, 
  ChatBubbleAvatar, 
  ChatBubbleMessage,
  MessageLoading 
} from "@/components/ui/chat-bubble";

// Import the Q&A dataset
import qaData from "@/data/chatbot-qa.json";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
}

const ZenithChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [isCollectingInfo, setIsCollectingInfo] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [currentInfoField, setCurrentInfoField] = useState<keyof UserInfo | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [userCountry, setUserCountry] = useState<string>("unknown");
  const { toast } = useToast();

  // Initialize session ID and detect country
  useEffect(() => {
    const storedSessionId = localStorage.getItem("chatSessionId");
    if (storedSessionId) {
      setSessionId(storedSessionId);
    } else {
      const newSessionId = uuidv4();
      localStorage.setItem("chatSessionId", newSessionId);
      setSessionId(newSessionId);
    }

    // Simple country detection based on timezone
    // This is a very basic approach - for production use a proper geolocation API
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
          const data = await response.json();
          setUserCountry(data.country_code || "unknown");
          setUserInfo(prev => ({...prev, location: data.country_name || ""}));
        }
      } catch (error) {
        console.error("Country detection failed:", error);
        // Fallback timezone-based detection
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.includes("America")) {
          setUserCountry("US");
        }
      }
    };
    
    detectCountry();
  }, []);

  // Fetch previous messages for this session
  useEffect(() => {
    const fetchMessages = async () => {
      if (!sessionId) return;
      
      try {
        const { data, error } = await supabase
          .from('chatbot_interactions')
          .select('*')
          .eq('session_id', sessionId)
          .order('created_at', { ascending: true });
          
        if (error) throw error;
        
        if (data && data.length > 0) {
          const formattedMessages = data.map(msg => ({
            id: msg.id,
            content: msg.message,
            sender: msg.is_user ? "user" as const : "ai" as const,
            timestamp: new Date(msg.created_at)
          }));
          
          setMessages(formattedMessages);
          
          // Check if user info was collected in previous session
          const userInfoData = data.find(msg => !msg.is_user && msg.message.includes("Could you share your name"));
          if (!userInfoData) {
            setTimeout(() => {
              askForUserInfo();
            }, 1000);
          }
        } else {
          // Add welcome message if no previous messages
          let welcomeMessage: Message;
          
          if (userCountry === "US") {
            welcomeMessage = {
              id: uuidv4(),
              content: "Hi there from Zenith's US team! How can I help you today with our digital services?",
              sender: "ai",
              timestamp: new Date()
            };
          } else {
            welcomeMessage = {
              id: uuidv4(),
              content: "Hi there! I'm Zenith's AI assistant. How can I help you today?",
              sender: "ai",
              timestamp: new Date()
            };
          }
          
          setMessages([welcomeMessage]);
          
          // Store welcome message in database
          await supabase.from('chatbot_interactions').insert({
            session_id: sessionId,
            message: welcomeMessage.content,
            is_user: false,
            location: userCountry
          });
          
          // Ask for user info after a short delay
          setTimeout(() => {
            askForUserInfo();
          }, 1000);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
        toast({
          title: "Error",
          description: "Failed to load previous messages",
          variant: "destructive"
        });
      }
    };
    
    if (sessionId) {
      fetchMessages();
    }
  }, [sessionId, userCountry, toast]);

  // Ask for user information
  const askForUserInfo = async () => {
    setIsCollectingInfo(true);
    setCurrentInfoField("name");
    
    const infoMessage: Message = {
      id: uuidv4(),
      content: "Could you share your name so I can assist you better?",
      sender: "ai",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, infoMessage]);
    
    // Store in database
    await supabase.from('chatbot_interactions').insert({
      session_id: sessionId,
      message: infoMessage.content,
      is_user: false
    });
  };

  // Process user information input
  const processUserInfo = async () => {
    if (!currentInfoField || !input.trim()) return;
    
    // Update user info
    setUserInfo(prev => ({
      ...prev,
      [currentInfoField]: input.trim()
    }));
    
    const userMessage: Message = {
      id: uuidv4(),
      content: input.trim(),
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Store user's response in database
    await supabase.from('chatbot_interactions').insert({
      session_id: sessionId,
      message: userMessage.content,
      is_user: true
    });
    
    // Move to next field or finish collecting info
    let nextField: keyof UserInfo | null = null;
    let responseMessage = "";
    
    switch(currentInfoField) {
      case "name":
        nextField = "email";
        responseMessage = `Thanks ${input.trim()}! Could you share your email address?`;
        break;
      case "email":
        nextField = "phone";
        responseMessage = "Great! And your phone number?";
        break;
      case "phone":
        nextField = "location";
        // If we already detected the location, skip asking for it
        if (userInfo.location) {
          nextField = null;
          responseMessage = `Thank you for sharing your information! I see you're from ${userInfo.location}. How can I help you today?`;
          setIsCollectingInfo(false);
          
          // Store complete user info in database
          const completeUserInfo = {
            ...userInfo,
            phone: input.trim(),
            location: userInfo.location
          };
          
          await supabase.from('chatbot_interactions').upsert([{
            session_id: sessionId,
            name: completeUserInfo.name,
            email: completeUserInfo.email,
            phone: completeUserInfo.phone,
            location: completeUserInfo.location,
            message: "User information collected",
            is_user: false,
            response: JSON.stringify(completeUserInfo)
          }]);
          
          break;
        }
        responseMessage = "Almost done! Where are you accessing our website from?";
        break;
      case "location":
        nextField = null;
        responseMessage = "Thank you for sharing your information! How can I help you today?";
        setIsCollectingInfo(false);
        
        // Store complete user info in database
        const completeUserInfo = {
          ...userInfo,
          [currentInfoField]: input.trim()
        };
        
        await supabase.from('chatbot_interactions').upsert([{
          session_id: sessionId,
          name: completeUserInfo.name,
          email: completeUserInfo.email,
          phone: completeUserInfo.phone,
          location: completeUserInfo.location,
          message: "User information collected",
          is_user: false,
          response: JSON.stringify(completeUserInfo)
        }]);
        
        break;
    }
    
    setCurrentInfoField(nextField);
    
    const aiMessage: Message = {
      id: uuidv4(),
      content: responseMessage,
      sender: "ai",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, aiMessage]);
    
    // Store AI response in database
    await supabase.from('chatbot_interactions').insert({
      session_id: sessionId,
      message: aiMessage.content,
      is_user: false
    });
  };

  // Find answer in the Q&A dataset
  const findAnswer = (question: string): string | null => {
    // Convert question to lowercase for case-insensitive matching
    const normalizedQuestion = question.toLowerCase();
    
    // Find the most relevant Q&A pair
    const relevantPair = qaData.qa_pairs.find(pair => {
      const pairQuestion = pair.question.toLowerCase();
      // Check if the question contains key phrases from our dataset
      return normalizedQuestion.includes(pairQuestion) || 
             pairQuestion.includes(normalizedQuestion) ||
             // Check for keywords
             (pairQuestion.split(" ").some(word => 
                word.length > 3 && normalizedQuestion.includes(word)));
    });
    
    return relevantPair ? relevantPair.answer : null;
  };

  // Handle sending a message
  const handleSendMessage = async (e?: FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    if (!input.trim() || isLoading) return;
    
    if (isCollectingInfo) {
      await processUserInfo();
      return;
    }
    
    const userMessage: Message = {
      id: uuidv4(),
      content: input.trim(),
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    try {
      // Save user message to database
      await supabase.from('chatbot_interactions').insert({
        session_id: sessionId,
        name: userInfo.name || null,
        email: userInfo.email || null,
        phone: userInfo.phone || null,
        location: userInfo.location || null,
        message: userMessage.content,
        is_user: true
      });
      
      // First try to find an answer in our local dataset
      const localAnswer = findAnswer(userMessage.content);
      
      if (localAnswer) {
        // Use the local answer if found
        const aiMessage: Message = {
          id: uuidv4(),
          content: localAnswer,
          sender: "ai",
          timestamp: new Date()
        };
        
        setTimeout(() => {
          setMessages(prev => [...prev, aiMessage]);
          setIsLoading(false);
          
          // Store AI response in database
          supabase.from('chatbot_interactions').insert({
            session_id: sessionId,
            name: userInfo.name || null,
            email: userInfo.email || null,
            phone: userInfo.phone || null,
            location: userInfo.location || null,
            message: aiMessage.content,
            is_user: false,
            response: localAnswer
          });
        }, 1000); // Add a small delay to simulate thinking
      } else {
        // If no local answer, try to use the Groq API
        try {
          const response = await fetch(`https://xkkuuckikhoavbkiaogd.functions.supabase.co/groq-chatbot`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhra3V1Y2tpa2hvYXZia2lhb2dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NjUwNzcsImV4cCI6MjA1NjA0MTA3N30.qtkmz0NatTwAjTP6QChqiHaxRtY9Ub4HjtpQGEd3e78`,
              'x-country': userCountry  // Pass the user's country to the function
            },
            body: JSON.stringify({
              message: userMessage.content,
              sessionId
            })
          });
          
          const data = await response.json();
          
          if (data.error) {
            throw new Error(data.error);
          }
          
          const aiMessage: Message = {
            id: uuidv4(),
            content: data.response,
            sender: "ai",
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, aiMessage]);
          
          // Store AI response in database
          await supabase.from('chatbot_interactions').insert({
            session_id: sessionId,
            name: userInfo.name || null,
            email: userInfo.email || null,
            phone: userInfo.phone || null,
            location: userInfo.location || null,
            message: aiMessage.content,
            is_user: false,
            response: data.response
          });
        } catch (apiError) {
          console.error('API Error:', apiError);
          // Fallback to a generic response if API fails
          const fallbackMessage: Message = {
            id: uuidv4(),
            content: "I'm sorry, I couldn't process your request right now. Please try asking a different question or contact our team directly for assistance.",
            sender: "ai",
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, fallbackMessage]);
          
          // Store fallback response
          await supabase.from('chatbot_interactions').insert({
            session_id: sessionId,
            name: userInfo.name || null,
            email: userInfo.email || null,
            phone: userInfo.phone || null,
            location: userInfo.location || null,
            message: fallbackMessage.content,
            is_user: false,
            error: String(apiError)
          });
        }
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive"
      });
      
    } finally {
      setIsLoading(false);
    }
  };

  // Handle enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      <ExpandableChat
        size="md"
        position="bottom-right"
        icon={<Bot className="h-6 w-6" />}
      >
        <ExpandableChatHeader className="flex-col text-center justify-center">
          <div className="flex items-center justify-center space-x-2">
            <img src="/images/Logo.png" alt="Zenith Studio" className="h-8 w-8" />
            <h1 className="text-xl font-semibold text-white font-syne">Zenith Assistant</h1>
          </div>
          <p className="text-sm text-gray-400">
            Ask me anything about our services and solutions
          </p>
        </ExpandableChatHeader>

        <ExpandableChatBody>
          <ChatMessageList>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChatBubble
                  variant={message.sender === "user" ? "sent" : "received"}
                >
                  <ChatBubbleAvatar
                    className="h-8 w-8"
                    fallback={message.sender === "user" ? "You" : "Z"}
                    src={message.sender === "user" ? undefined : "/images/Logo.png"}
                  />
                  <ChatBubbleMessage
                    variant={message.sender === "user" ? "sent" : "received"}
                  >
                    {message.content}
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ChatBubble variant="received">
                  <ChatBubbleAvatar
                    className="h-8 w-8"
                    src="/images/Logo.png"
                    fallback="Z"
                  />
                  <ChatBubbleMessage isLoading />
                </ChatBubble>
              </motion.div>
            )}
          </ChatMessageList>
        </ExpandableChatBody>

        <ExpandableChatFooter>
          <form
            onSubmit={handleSendMessage}
            className="relative rounded-lg bg-background focus-within:ring-1 focus-within:ring-custom-green/40"
          >
            <ChatInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={isCollectingInfo 
                ? currentInfoField === "name"
                  ? "Enter your name..."
                  : currentInfoField === "email"
                  ? "Enter your email address..."
                  : currentInfoField === "phone"
                  ? "Enter your phone number..."
                  : "Enter your location..."
                : "Type your message..."
              }
              className="min-h-12 resize-none rounded-lg bg-gray-800 border-0 p-3 shadow-none focus-visible:ring-0"
              rows={1}
            />
            <div className="absolute right-2 bottom-2">
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="bg-custom-green hover:bg-custom-green/90 text-white rounded-full w-8 h-8 p-1"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </ExpandableChatFooter>
      </ExpandableChat>
    </AnimatePresence>
  );
};

export default ZenithChatbot;
