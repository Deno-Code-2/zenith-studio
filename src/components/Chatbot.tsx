
import { useState, useEffect, useRef } from "react";
import { Bot, X, Send, Loader2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentResponse, setCurrentResponse] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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
          .from('chat_messages')
          .select('*')
          .eq('session_id', sessionId)
          .order('created_at', { ascending: true });
          
        if (error) throw error;
        
        if (data && data.length > 0) {
          const formattedMessages = data.map(msg => ({
            id: msg.id,
            text: msg.message,
            isUser: msg.is_user,
            timestamp: new Date(msg.created_at)
          }));
          
          setMessages(formattedMessages);
        } else {
          // Add welcome message if no previous messages
          setMessages([
            {
              id: uuidv4(),
              text: "Hi there! I'm Zenith's assistant. How can I help you today?",
              isUser: false,
              timestamp: new Date()
            }
          ]);
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

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, currentResponse]);

  // Simulates real-time typing effect
  const simulateRealTimeResponse = (fullResponse: string) => {
    setIsTyping(true);
    let index = 0;
    setCurrentResponse("");
    
    const interval = setInterval(() => {
      if (index < fullResponse.length) {
        setCurrentResponse(prev => prev + fullResponse.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setCurrentResponse("");
        
        setMessages(prev => [
          ...prev, 
          {
            id: uuidv4(),
            text: fullResponse,
            isUser: false,
            timestamp: new Date()
          }
        ]);
      }
    }, 15); // Speed of typing, adjust as needed
    
    return () => clearInterval(interval);
  };

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = {
      id: uuidv4(),
      text: input.trim(),
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    try {
      const response = await fetch(`https://xkkuuckikhoavbkiaogd.functions.supabase.co/ai-chatbot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          message: userMessage.text,
          sessionId: sessionId
        })
      });
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      simulateRealTimeResponse(data.response);
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive"
      });
      setIsTyping(false);
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

  const handleToggleChat = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={handleToggleChat}
        className="fixed bottom-6 right-6 z-50 bg-custom-orange rounded-full p-4 shadow-lg hover:bg-custom-orange/90 transition-all duration-300"
        aria-label="Open chat"
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          boxShadow: "0 0 15px rgba(228, 101, 52, 0.7)" 
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Bot className="h-6 w-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 md:inset-auto md:right-6 md:bottom-6 md:top-auto md:left-auto md:w-96 md:h-[550px] bg-black border border-custom-orange/30 md:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 20,
              rotateX: 45
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotateX: 0
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 20,
              rotateX: 45
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300
            }}
          >
            {/* Decorative 3D Elements */}
            <div className="absolute -left-8 -top-8 w-16 h-16 bg-custom-orange/20 rounded-full blur-xl" />
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-custom-orange/10 rounded-full blur-xl" />
            <div className="absolute right-1/3 top-1/3 w-10 h-10 bg-white/5 rounded-full blur-md" />
            
            {/* Chat Header */}
            <div className="p-4 border-b border-custom-orange/20 flex justify-between items-center bg-black relative z-10">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-custom-orange animate-pulse"></div>
                <h3 className="font-syne font-bold text-white">Zenith Assistant</h3>
              </div>
              <motion.button 
                onClick={handleToggleChat}
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser 
                        ? 'bg-custom-orange/20 text-white' 
                        : 'bg-gray-800 text-white'
                    }`}
                  >
                    <p className="font-jakarta text-sm whitespace-pre-wrap">{message.text}</p>
                    <div className="text-xs text-gray-400 mt-1 text-right">
                      {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div 
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-gray-800 rounded-lg p-3">
                    <p className="font-jakarta text-sm whitespace-pre-wrap">{currentResponse}</p>
                    <span className="inline-block h-4 w-6">
                      <span className="w-2 h-2 bg-custom-orange rounded-full inline-block animate-pulse mr-1"></span>
                      <span className="w-2 h-2 bg-custom-orange rounded-full inline-block animate-pulse mr-1" style={{ animationDelay: "0.2s" }}></span>
                      <span className="w-2 h-2 bg-custom-orange rounded-full inline-block animate-pulse" style={{ animationDelay: "0.4s" }}></span>
                    </span>
                  </div>
                </motion.div>
              )}
              
              {/* Loading indicator for sending message */}
              {isLoading && !isTyping && (
                <motion.div 
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-gray-800 rounded-lg p-3">
                    <Loader2 className="h-5 w-5 text-custom-orange animate-spin" />
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat Input */}
            <motion.div 
              className="p-4 border-t border-custom-orange/20 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex space-x-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-custom-orange/40 resize-none"
                  rows={1}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || !input.trim()}
                  className="bg-custom-orange p-2 rounded-lg text-white disabled:opacity-50 hover:bg-custom-orange/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
