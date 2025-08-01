import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useToast } from "./ui/use-toast";

// Function to parse markdown links and URLs in text
const parseLinksInText = (text: string) => {
  const parts: string[] = [];
  let lastIndex = 0;
  
  // First handle markdown links [text](url)
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  
  while ((match = markdownLinkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    // Add the link as HTML
    parts.push(`<a href="${match[2]}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline decoration-dotted transition-colors">${match[1]}</a>`);
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  // Join all parts and then handle plain URLs in the result
  let result = parts.join('');
  
  // Replace plain URLs that are not already in links
  const urlRegex = /(?<!href=")(?<!href=')(https?:\/\/[^\s<>"{}|\\^`[\]]+)(?![^<]*<\/a>)/g;
  result = result.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline decoration-dotted transition-colors">${url}</a>`;
  });
  
  return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hallo! Ich bin Ihr KI-Agent von KI2USE. Wie kann ich Ihnen bei Fragen zu unseren KI-Lösungen helfen?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const webhookUrl = "https://n8n.srv929188.hstgr.cloud/webhook/8e2e75fc-67cd-4eda-9588-f6bb753d6aa4";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Enhanced debugging and error handling
    console.log('🚀 Chatbot: Sending message to webhook:', webhookUrl);
    console.log('📤 Message payload:', { 
      message: userMessage.text, 
      sessionId: sessionId,
      timestamp: userMessage.timestamp.toISOString() 
    });

    try {
      // Enhanced fetch with CORS handling and timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(webhookUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.text,
          sessionId: sessionId,
          timestamp: userMessage.timestamp.toISOString()
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      console.log('📡 Response status:', response.status);
      console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      // Try to parse response (JSON, HTML, or plain text)
      let responseData;
      const contentType = response.headers.get('content-type');
      console.log('📄 Content-Type:', contentType);

      try {
        if (contentType && contentType.includes('application/json')) {
          const rawResponse = await response.text();
          console.log('📥 Raw Response Text:', rawResponse);
          
          try {
            responseData = JSON.parse(rawResponse);
            console.log('📥 JSON Response:', responseData);
          } catch (jsonError) {
            console.log('🔍 JSON Parse failed, treating as text:', jsonError);
            responseData = { message: rawResponse };
          }
        } else {
          const textResponse = await response.text();
          console.log('📥 Text Response:', textResponse);
          
          // Check if response contains an iframe with srcdoc
          const iframeMatch = textResponse.match(/srcdoc="([^"]+)"/);
          if (iframeMatch && iframeMatch[1]) {
            console.log('🎯 Extracted from iframe srcdoc:', iframeMatch[1]);
            responseData = { message: iframeMatch[1] };
          } else {
            responseData = { message: textResponse };
          }
        }
      } catch (parseError) {
        console.log('🔍 Response Parse Error, using fallback:', parseError);
        responseData = { message: "Antwort erhalten, aber konnte nicht verarbeitet werden." };
      }
      
      // Extract bot message
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseData.message?.trim() || "Vielen Dank für Ihre Nachricht! Unser Team wird sich schnellstmöglich bei Ihnen melden.",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      console.log('✅ Message successfully processed');

    } catch (error) {
      console.error('❌ Chatbot error details:', {
        error: error,
        message: error instanceof Error ? error.message : 'Unknown error',
        name: error instanceof Error ? error.name : 'Unknown',
        stack: error instanceof Error ? error.stack : undefined
      });

      let errorText = "Entschuldigung, es gab ein technisches Problem.";
      let toastTitle = "Verbindungsfehler";
      let toastDescription = "Nachricht konnte nicht gesendet werden.";

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorText = "Die Anfrage wurde aufgrund einer Zeitüberschreitung abgebrochen. Bitte versuchen Sie es erneut.";
          toastTitle = "Zeitüberschreitung";
          toastDescription = "Die Anfrage hat zu lange gedauert.";
        } else if (error.message.includes('CORS')) {
          errorText = "Es gibt ein Problem mit der Cross-Origin-Anfrage. Bitte kontaktieren Sie den Support.";
          toastTitle = "CORS-Fehler";
          toastDescription = "Cross-Origin-Request blockiert.";
        } else if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
          errorText = "Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.";
          toastTitle = "Netzwerkfehler";
          toastDescription = "Verbindung zum Server fehlgeschlagen.";
        } else if (error.message.includes('HTTP')) {
          errorText = `Server-Fehler (${error.message}). Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.`;
          toastTitle = "Server-Fehler";
          toastDescription = error.message;
        }
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText + " Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: toastTitle,
        description: toastDescription,
        variant: "destructive"
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
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-primary text-primary-foreground shadow-primary hover-scale float-element"
          size="sm"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-card border border-card-border rounded-2xl shadow-elevated z-50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-primary text-primary-foreground p-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">KI2USE Support</h3>
                <p className="text-xs opacity-80">Powered by KI2USE Automation</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-gradient-primary text-primary-foreground'
                      : 'bg-card border border-card-border text-foreground'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && (
                      <Bot className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    )}
                    {message.isUser && (
                      <User className="w-4 h-4 mt-0.5 text-primary-foreground flex-shrink-0" />
                    )}
                     <div>
                       <div className="text-sm leading-relaxed">
                         {parseLinksInText(message.text)}
                       </div>
                       <p className={`text-xs mt-1 ${
                         message.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
                       }`}>
                         {message.timestamp.toLocaleTimeString('de-DE', { 
                           hour: '2-digit', 
                           minute: '2-digit' 
                         })}
                       </p>
                     </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-card border border-card-border p-3 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-accent" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-card-border bg-card rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ihre Frage zu KI-Lösungen..."
                className="flex-1 px-3 py-2 border border-input rounded-xl bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-gradient-primary text-primary-foreground hover-scale"
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              🤖 Das könnte der Chatbot Ihrer Unternehmenswebsite sein
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;