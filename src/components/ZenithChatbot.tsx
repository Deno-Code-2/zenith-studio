
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
  const { toast } = useToast();

  // Initialize session ID
  useEffect(() => {
    const storedSessionId = localStorage.getItem("chatSessionId");
    if (storedSessionId) {
      setSessionId(storedSessionId);
    } else {
      const newSessionId = uuidv4();
      localStorage.setItem("chatSessionId", newSessionId);
      setSessionId(newSessionId);
    }
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
          const welcomeMessage: Message = {
            id: uuidv4(),
            content: "Hi there! I'm Zenith's AI assistant. How can I help you today?",
            sender: "ai",
            timestamp: new Date()
          };
          
          setMessages([welcomeMessage]);
          
          // Store welcome message in database
          await supabase.from('chatbot_interactions').insert({
            session_id: sessionId,
            message: welcomeMessage.content,
            is_user: false
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
  }, [sessionId, toast]);

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
      
      const response = await fetch(`https://xkkuuckikhoavbkiaogd.functions.supabase.co/ai-chatbot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhra3V1Y2tpa2hvYXZia2lhb2dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NjUwNzcsImV4cCI6MjA1NjA0MTA3N30.qtkmz0NatTwAjTP6QChqiHaxRtY9Ub4HjtpQGEd3e78`
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
            <ChatBubble
              key={message.id}
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
          ))}

          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar
                className="h-8 w-8"
                src="/images/Logo.png"
                fallback="Z"
              />
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
      </ExpandableChatBody>

      <ExpandableChatFooter>
        <form
          onSubmit={handleSendMessage}
          className="relative rounded-lg bg-background focus-within:ring-1 focus-within:ring-custom-orange/40"
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
              className="bg-custom-orange hover:bg-custom-orange/90 text-white rounded-full w-8 h-8 p-1"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
};

export default ZenithChatbot;
