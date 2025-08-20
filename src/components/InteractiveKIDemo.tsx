import { useState, useEffect } from "react";
import { MessageCircle, Mic, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const InteractiveKIDemo = () => {
  const [activeDemo, setActiveDemo] = useState<'chat' | 'voice' | 'email'>('chat');
  const [messages, setMessages] = useState<Array<{text: string, isBot: boolean}>>([]);
  const [isTyping, setIsTyping] = useState(false);

  const demoScenarios = {
    chat: [
      { text: "Hallo! Wie kann ich Ihnen heute helfen?", isBot: true },
      { text: "Ich hätte gerne Informationen zu Ihren Produkten", isBot: false },
      { text: "Gerne! Wir bieten verschiedene KI-Lösungen an. Welcher Bereich interessiert Sie am meisten?", isBot: true },
      { text: "Automatisierung für den Kundenservice", isBot: false },
      { text: "Perfekt! Unser Chatbot kann 24/7 Kundenanfragen bearbeiten und dabei 80% der Standardfragen automatisch lösen.", isBot: true },
    ],
    voice: [
      { text: "🎤 Sprachbot aktiviert", isBot: true },
      { text: "Verbinde mit Kundenservice...", isBot: true },
      { text: "Guten Tag! Sie erreichen die Firma Mustermann. Wie kann ich Ihnen helfen?", isBot: true },
      { text: "Natürliche Spracherkennung und -verarbeitung", isBot: true },
    ],
    email: [
      { text: "📧 E-Mail Assistent", isBot: true },
      { text: "Neue Kundenanfrage erkannt", isBot: true },
      { text: "Automatische Kategorisierung: 'Produktanfrage'", isBot: true },
      { text: "Antwort-Vorlage generiert und zur Prüfung bereitgestellt", isBot: true },
    ]
  };

  useEffect(() => {
    const scenario = demoScenarios[activeDemo];
    setMessages([]);
    setIsTyping(false);
    
    let messageIndex = 0;
    const showNextMessage = () => {
      if (messageIndex < scenario.length) {
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev, scenario[messageIndex]]);
          setIsTyping(false);
          messageIndex++;
          if (messageIndex < scenario.length) {
            setTimeout(showNextMessage, 2000);
          }
        }, 1000);
      }
    };

    const timer = setTimeout(showNextMessage, 500);
    return () => clearTimeout(timer);
  }, [activeDemo]);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Demo Selector */}
      <div className="flex gap-2 mb-4 justify-center">
        <Button
          variant={activeDemo === 'chat' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveDemo('chat')}
          className="flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Chat
        </Button>
        <Button
          variant={activeDemo === 'voice' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveDemo('voice')}
          className="flex items-center gap-2"
        >
          <Mic className="w-4 h-4" />
          Voice
        </Button>
        <Button
          variant={activeDemo === 'email' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveDemo('email')}
          className="flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          E-Mail
        </Button>
      </div>

      {/* Demo Interface */}
      <Card className="bg-background/80 backdrop-blur-sm border border-border/50 shadow-elevated">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-border/30">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">
              {activeDemo === 'chat' && 'KI-Chatbot Demo'}
              {activeDemo === 'voice' && 'Sprachbot Demo'}
              {activeDemo === 'email' && 'E-Mail Assistent Demo'}
            </span>
          </div>

          {/* Messages */}
          <div className="min-h-[300px] max-h-[300px] overflow-y-auto py-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground px-3 py-2 rounded-lg text-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="pt-3 border-t border-border/30">
            <div className="flex gap-2">
              <div className="flex-1 px-3 py-2 bg-muted/50 border border-border/30 rounded-lg text-sm text-muted-foreground">
                Schreiben Sie hier...
              </div>
              <Button size="sm" variant="ghost" className="px-3">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Demo Stats */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-2">
          <div className="text-lg font-bold text-primary">24/7</div>
          <div className="text-xs text-muted-foreground">Verfügbar</div>
        </div>
        <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-2">
          <div className="text-lg font-bold text-primary">80%</div>
          <div className="text-xs text-muted-foreground">Automatisiert</div>
        </div>
        <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-2">
          <div className="text-lg font-bold text-primary">{"< 2s"}</div>
          <div className="text-xs text-muted-foreground">Antwortzeit</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveKIDemo;