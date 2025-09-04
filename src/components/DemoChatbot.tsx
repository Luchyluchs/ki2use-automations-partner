import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, Loader2, Bot, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Helper function to render markdown links
const renderMessageWithLinks = (text: string) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = text.split(linkRegex);
  
  const result: (string | React.ReactElement)[] = [];
  
  for (let i = 0; i < parts.length; i += 3) {
    if (i < parts.length) {
      result.push(parts[i]);
    }
    if (i + 1 < parts.length && i + 2 < parts.length) {
      const linkText = parts[i + 1];
      const linkUrl = parts[i + 2];
      result.push(
        <a
          key={`link-${i}`}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary-hover transition-colors"
        >
          {linkText}
        </a>
      );
    }
  }
  
  return result;
};

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface DemoChatbotProps {
  webhookUrl: string;
  title: string;
  description: string;
  type: 'support' | 'booking';
  className?: string;
}

const DemoChatbot: React.FC<DemoChatbotProps> = ({ 
  webhookUrl, 
  title, 
  description, 
  type,
  className = '' 
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial message based on type
  useEffect(() => {
    const initialMessage = type === 'support' 
      ? "Hallo! Ich bin Ihr Support-Assistent. Wie kann ich Ihnen heute helfen?"
      : "Hallo! Ich bin Ihr Terminbuchungs-Assistent. Gerne helfe ich Ihnen bei der Terminvereinbarung!";
    
    setMessages([{
      id: 1,
      text: initialMessage,
      isUser: false,
      timestamp: new Date()
    }]);
  }, [type]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          message: inputMessage,
          demo_type: type,
          timestamp: new Date().toISOString(),
        }),
      });

      // Since we're using no-cors mode, we'll get an opaque response
      // For demo purposes, we'll show a fallback response
      const botMessage = {
        id: messages.length + 2,
        text: `Demo-Antwort für ${type === 'support' ? 'Support' : 'Terminbuchung'}: Ihre Anfrage wird verarbeitet. In der Live-Version würde hier eine personalisierte Antwort erscheinen.`,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        text: "Demo-Modus: Webhook-Verbindung wird getestet. In der Live-Version würde hier eine echte Antwort erscheinen.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Card className={`h-full flex flex-col shadow-card ${className}`}>
      <CardHeader className="pb-3 border-b border-card-border">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            type === 'support' ? 'bg-primary/10' : 'bg-accent/10'
          }`}>
            <MessageCircle className={`w-5 h-5 ${
              type === 'support' ? 'text-primary' : 'text-accent'
            }`} />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-3 py-2 ${
                  message.isUser
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                <div className="flex items-start gap-2">
                  {!message.isUser && (
                    <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  )}
                  {message.isUser && (
                    <User className="w-4 h-4 mt-0.5 flex-shrink-0 order-2" />
                  )}
                  <p className="text-sm leading-relaxed">
                    {renderMessageWithLinks(message.text)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm text-muted-foreground">Antwortet...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-card-border">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Fragen Sie den ${type === 'support' ? 'Support' : 'Terminbuchungs'}-Assistenten...`}
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isLoading}
              size="icon"
              className="h-10 w-10"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="mt-2 text-xs text-muted-foreground text-center">
            💡 Demo-Modus aktiv - Webhook: {webhookUrl.slice(-8)}...
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemoChatbot;