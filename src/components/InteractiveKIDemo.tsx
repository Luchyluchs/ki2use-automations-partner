import { useState, useEffect } from "react";
import { MessageCircle, Mic, Mail, Calendar, Linkedin, Bot, Newspaper, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const InteractiveKIDemo = () => {
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demoAgents = [
    {
      id: 'chatbot',
      name: 'Chatbot Agent',
      icon: MessageCircle,
      color: 'bg-blue-500',
      interface: 'chat'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Agent',
      icon: Linkedin,
      color: 'bg-blue-600',
      interface: 'linkedin'
    },
    {
      id: 'voice',
      name: 'Sprachbot',
      icon: Mic,
      color: 'bg-green-500',
      interface: 'voice'
    },
    {
      id: 'email',
      name: 'Email Agent',
      icon: Mail,
      color: 'bg-orange-500',
      interface: 'email'
    },
    {
      id: 'newsletter',
      name: 'Newsletter Agent',
      icon: Newspaper,
      color: 'bg-purple-500',
      interface: 'newsletter'
    },
    {
      id: 'sales',
      name: 'Sales Agent',
      icon: TrendingUp,
      color: 'bg-red-500',
      interface: 'sales'
    },
    {
      id: 'appointment',
      name: 'Terminbuchung',
      icon: Calendar,
      color: 'bg-indigo-500',
      interface: 'calendar'
    }
  ];

  const currentAgent = demoAgents[activeDemoIndex];

  const nextAgent = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemoIndex((prev) => (prev + 1) % demoAgents.length);
      setIsAnimating(false);
    }, 150);
  };

  const prevAgent = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemoIndex((prev) => (prev - 1 + demoAgents.length) % demoAgents.length);
      setIsAnimating(false);
    }, 150);
  };

  useEffect(() => {
    const interval = setInterval(nextAgent, 4000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const renderInterface = () => {
    const IconComponent = currentAgent.icon;
    
    switch (currentAgent.interface) {
      case 'chat':
        return (
          <div className="space-y-3">
            <div className="flex justify-start">
              <div className="bg-muted text-muted-foreground px-3 py-2 rounded-lg text-sm max-w-[80%]">
                Hallo! Wie kann ich Ihnen helfen?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm max-w-[80%]">
                Infos zu Ihren Services
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-muted text-muted-foreground px-3 py-2 rounded-lg text-sm max-w-[80%]">
                Gerne! 24/7 Support verfügbar ✓
              </div>
            </div>
          </div>
        );
        
      case 'linkedin':
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Max Mustermann</div>
                <div className="text-xs text-muted-foreground">CEO bei TechCorp</div>
              </div>
              <Button size="sm" className="text-xs">Vernetzen</Button>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              ✓ Automatische Kontaktpflege<br/>
              ✓ Personalisierte Nachrichten<br/>
              ✓ Lead-Generierung
            </div>
          </div>
        );
        
      case 'voice':
        return (
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-1">
              <div className="w-2 h-8 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-12 bg-green-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-6 bg-green-500 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-10 bg-green-500 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-4 bg-green-500 rounded-full animate-pulse delay-75"></div>
            </div>
            <div className="text-sm text-muted-foreground">
              🎤 "Guten Tag! Wie kann ich helfen?"
            </div>
            <div className="text-xs text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg">
              Natürliche Spracherkennung aktiv
            </div>
          </div>
        );
        
      case 'email':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground border-b pb-2">
              <span>Posteingang (3)</span>
              <span>Automatisch sortiert</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="flex-1 truncate">Kunde: Produktanfrage</span>
                <span className="text-green-600">✓ Priorität</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-muted/30 rounded text-xs">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="flex-1 truncate">Newsletter: Update</span>
                <span className="text-muted-foreground">Archiviert</span>
              </div>
            </div>
          </div>
        );
        
      case 'newsletter':
        return (
          <div className="space-y-3">
            <div className="border border-dashed border-primary/30 rounded-lg p-3 bg-primary/5">
              <div className="text-sm font-medium mb-1">📧 Newsletter wird erstellt...</div>
              <div className="text-xs text-muted-foreground mb-2">Zielgruppe: B2B Kunden (847 Kontakte)</div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Betreff-Optimierung</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Personalisierung</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>A/B Testing</span>
                  <span className="text-yellow-600">⏳</span>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'sales':
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded text-center">
                <div className="font-bold text-green-600">47</div>
                <div className="text-muted-foreground">Qualifizierte Leads</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded text-center">
                <div className="font-bold text-blue-600">89%</div>
                <div className="text-muted-foreground">Conversion</div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>TechCorp GmbH</span>
                </div>
                <span className="text-green-600 font-medium">Heiß</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>StartUp AG</span>
                </div>
                <span className="text-yellow-600 font-medium">Warm</span>
              </div>
            </div>
          </div>
        );
        
      case 'calendar':
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-7 gap-1 text-xs text-center">
              {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day, i) => (
                <div key={i} className="text-muted-foreground font-medium">{day}</div>
              ))}
              {Array.from({length: 7}, (_, i) => (
                <div key={i} className={`p-1 rounded ${i === 2 ? 'bg-primary text-primary-foreground' : i === 4 ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'text-muted-foreground'}`}>
                  {i + 15}
                </div>
              ))}
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-2 bg-primary/10 rounded">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>14:00 - Meeting automatisch gebucht</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Erinnerung versendet ✓</span>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div>Demo wird geladen...</div>;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Agent Navigation */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevAgent}
          className="p-2 h-8 w-8"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <div className="flex items-center gap-2 min-w-0 flex-1 justify-center">
          <div className={`w-8 h-8 ${currentAgent.color} rounded-lg flex items-center justify-center transition-all duration-300`}>
            <currentAgent.icon className="w-4 h-4 text-white" />
          </div>
          <span className="font-medium text-sm truncate">{currentAgent.name}</span>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={nextAgent}
          className="p-2 h-8 w-8"
          disabled={isAnimating}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Progress Indicators */}
      <div className="flex justify-center gap-1 mb-4">
        {demoAgents.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeDemoIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>

      {/* Demo Interface */}
      <Card className={`bg-background/80 backdrop-blur-sm border border-border/50 shadow-elevated transition-all duration-300 ${
        isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
      }`}>
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-border/30">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">
              {currentAgent.name} Demo
            </span>
          </div>

          {/* Dynamic Interface */}
          <div className="min-h-[280px] max-h-[280px] py-4">
            {renderInterface()}
          </div>

          {/* Footer Info */}
          <div className="pt-3 border-t border-border/30 text-center">
            <p className="text-xs text-muted-foreground">
              {currentAgent.interface === 'chat' && '24/7 verfügbar • Automatische Antworten'}
              {currentAgent.interface === 'linkedin' && '60% Zeitersparnis • Automatisches Networking'}  
              {currentAgent.interface === 'voice' && 'Natürliche Sprache • Rund um die Uhr'}
              {currentAgent.interface === 'email' && '40% weniger manueller Aufwand • Smart Sorting'}
              {currentAgent.interface === 'newsletter' && 'Personalisiert • A/B Testing • Automatisch'}
              {currentAgent.interface === 'sales' && '45% höhere Conversion • Lead-Scoring'}
              {currentAgent.interface === 'calendar' && '75% weniger Aufwand • Automatische Erinnerungen'}
            </p>
          </div>
        </div>
      </Card>

      {/* Demo Stats */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-2">
          <div className="text-lg font-bold text-primary">7</div>
          <div className="text-xs text-muted-foreground">KI-Agenten</div>
        </div>
        <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-2">
          <div className="text-lg font-bold text-primary">80%</div>
          <div className="text-xs text-muted-foreground">Zeitersparnis</div>
        </div>
        <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-2">
          <div className="text-lg font-bold text-primary">24/7</div>
          <div className="text-xs text-muted-foreground">Verfügbar</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveKIDemo;