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
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    try {
      console.log('Sending message to webhook:', webhookUrl);
      console.log('Message data:', { message: currentMessage, demo_type: type });
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessage,
          demo_type: type,
          timestamp: new Date().toISOString(),
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response data:', responseData);
        
        const botMessage = {
          id: messages.length + 2,
          text: responseData.response || responseData.message || responseData.text || 'Antwort erhalten, aber kein Text gefunden.',
          isUser: false,
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, botMessage]);
        
        toast({
          title: "Erfolgreich gesendet",
          description: "Ihre Nachricht wurde an den Webhook übermittelt.",
        });
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

    } catch (error) {
      console.error('Webhook error:', error);
      
      const errorMessage = {
        id: messages.length + 2,
        text: `❌ Verbindungsfehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}. Bitte prüfen Sie die Webhook-Konfiguration.`,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        variant: "destructive",
        title: "Verbindungsfehler",
        description: `Webhook konnte nicht erreicht werden: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
      });
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