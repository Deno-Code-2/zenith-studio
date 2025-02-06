import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from './ui/button';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi! How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Add a loading message
    const loadingMessage = { text: "Typing...", isUser: false };
    setMessages(prev => [...prev, loadingMessage]);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      setMessages(prev => [
        ...prev.filter(msg => msg.text !== "Typing..."),
        { text: "Thank you for your message! Our team will get back to you soon.", isUser: false }
      ]);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 rounded-full p-4 bg-custom-orange hover:bg-custom-orange/90"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 bg-black border border-custom-orange/20 rounded-lg shadow-xl">
          <div className="flex items-center justify-between p-4 border-b border-custom-orange/20">
            <h3 className="text-lg font-bold text-white font-syne">Chat with us</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:text-custom-orange"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-custom-orange text-black ml-auto'
                      : 'bg-gray-800 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-custom-orange/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-2 rounded-lg bg-gray-800 text-white border border-custom-orange/20 focus:outline-none focus:border-custom-orange"
              />
              <Button
                onClick={handleSend}
                className="bg-custom-orange hover:bg-custom-orange/90 text-black"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;