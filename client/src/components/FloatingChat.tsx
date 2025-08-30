import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Halo! Ada yang bisa saya bantu untuk belajar coding hari ini?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const { toast } = useToast();

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Terima kasih atas pertanyaannya! Mentor kami akan segera membantu Anda.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    toast({
      title: "Pesan terkirim",
      description: "Mentor akan segera merespons pertanyaan Anda",
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="floating-chat" data-testid="floating-chat">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        data-testid="button-chat-toggle"
      >
        <MessageSquare className="text-primary-foreground" size={24} />
      </Button>
      
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 shadow-2xl" data-testid="card-chat-window">
          <div className="bg-primary px-4 py-3 flex items-center justify-between rounded-t-xl">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Bot className="text-primary" size={16} />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm" data-testid="text-chat-assistant-name">
                  Assistant Belajar
                </h4>
                <p className="text-purple-100 text-xs" data-testid="text-chat-status">
                  Online
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-purple-200 transition-colors h-auto w-auto p-1"
              data-testid="button-chat-close"
            >
              <X size={16} />
            </Button>
          </div>
          
          <div className="h-64 p-4 bg-background/50 dark:bg-background/50 overflow-y-auto space-y-3" data-testid="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-2" data-testid={`message-${msg.id}`}>
                {msg.isBot && (
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="text-white" size={12} />
                  </div>
                )}
                <div className={`${msg.isBot ? 'bg-muted' : 'bg-primary text-primary-foreground ml-auto'} rounded-lg p-3 max-w-xs`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-border bg-card rounded-b-xl">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Ketik pertanyaan..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 text-sm"
                data-testid="input-chat-message"
              />
              <Button
                onClick={sendMessage}
                disabled={!message.trim()}
                data-testid="button-send-message"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
