import { useState, useEffect } from "react";
import { MessageCircle, Mic, Mail, Calendar, Linkedin, Bot, Newspaper, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const InteractiveKIDemo = () => {
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demoAgents = [
    {
      id: 'voice',
      name: 'Telefon-Assistent',
      icon: Mic,
      color: 'bg-green-500',
      interface: 'voice',
      benefit: 'Anrufe auch nach Feierabend'
    },
    {
      id: 'chatbot',
      name: 'Website-Chat',
      icon: MessageCircle,
      color: 'bg-blue-500',
      interface: 'chat',
      benefit: 'Kunden fragen - KI antwortet sofort'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Kontakte',
      icon: Linkedin,
      color: 'bg-blue-600', 
      interface: 'linkedin',
      benefit: 'Neue Kunden finden automatisch'
    },
    {
      id: 'email',
      name: 'E-Mail Sortierer',
      icon: Mail,
      color: 'bg-orange-500',
      interface: 'email',
      benefit: 'Wichtige E-Mails zuerst sehen'
    },
    {
      id: 'newsletter',
      name: 'Newsletter-Versand',
      icon: Newspaper,
      color: 'bg-purple-500',
      interface: 'newsletter',
      benefit: 'Kunden automatisch informieren'
    },
    {
      id: 'sales',
      name: 'Verkaufs-Helfer',
      icon: TrendingUp,
      color: 'bg-red-500',
      interface: 'sales',
      benefit: 'Beste Kunden automatisch finden'
    },
    {
      id: 'appointment',
      name: 'Termin-Planer',
      icon: Calendar,
      color: 'bg-indigo-500',
      interface: 'calendar',
      benefit: 'Termine buchen ohne Aufwand'
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
    const interval = setInterval(nextAgent, 8000); // Verlangsamt von 4 auf 8 Sekunden
    return () => clearInterval(interval);
  }, [isAnimating]);

  const renderInterface = () => {
    const IconComponent = currentAgent.icon;
    
    switch (currentAgent.interface) {
        case 'chat':
        return (
          <div className="space-y-3">
            <div className="text-center text-xs text-muted-foreground mb-3">
              Website-Besucher um 23:00 Uhr
            </div>
            <div className="flex justify-start">
              <div className="bg-muted text-muted-foreground px-3 py-2 rounded-lg text-sm max-w-[80%]">
                Hallo! Sind Sie am Wochenende da?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm max-w-[80%]">
                Ja! Samstag 9-16 Uhr verfügbar
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 text-center">
              <div className="text-xs text-green-600 font-medium">
                ✅ Termin automatisch gebucht
              </div>
            </div>
          </div>
        );
        
      case 'linkedin':
        return (
          <div className="space-y-3">
            <div className="text-center text-sm text-muted-foreground mb-2">
              Während Sie arbeiten, knüpft die KI neue Kontakte...
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Max Mustermann</div>
                <div className="text-xs text-muted-foreground">Sucht Ihre Dienstleistung</div>
              </div>
              <div className="text-xs text-green-600 font-medium">✓ Kontaktiert</div>
            </div>
            <div className="text-center text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
              📈 +12 neue potentielle Kunden diese Woche
            </div>
          </div>
        );
        
      case 'voice':
        return (
          <div className="text-center space-y-4">
            <div className="text-sm text-muted-foreground">
              Kunde ruft um 19:30 Uhr an...
            </div>
            <div className="flex justify-center items-center space-x-1">
              <div className="w-2 h-8 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-12 bg-green-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-6 bg-green-500 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-10 bg-green-500 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-4 bg-green-500 rounded-full animate-pulse delay-75"></div>
            </div>
            <div className="text-sm font-medium">
              🎤 "Guten Abend! Ich kann Ihnen gerne helfen."
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-2 text-xs">
              <div className="flex items-center gap-2 mb-1">
                <Bot className="w-3 h-3 text-blue-600" />
                <span className="font-medium text-blue-700 dark:text-blue-300">Verknüpft mit Ihren Systemen:</span>
              </div>
              <div className="space-y-1 text-blue-600">
                <div>✓ CRM-System aktualisiert</div>
                <div>✓ Termin automatisch vorgeschlagen</div>
                <div>✓ Follow-up E-Mail geplant</div>
              </div>
            </div>
            <div className="text-xs text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg">
              💰 Kein verlorener Anruf = Kein verlorener Kunde
            </div>
          </div>
        );
        
      case 'email':
        return (
          <div className="space-y-3">
            <div className="text-center text-sm text-muted-foreground mb-2">
              Ihr E-Mail-Postfach jeden Morgen...
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-900/20 rounded border-l-4 border-red-500 text-xs">
                <span className="flex-1">🔥 WICHTIG: Große Anfrage von TechCorp</span>
                <span className="text-red-600 font-bold">Priorität 1</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-500 text-xs">
                <span className="flex-1">📞 Rückruf: Interessent wartet</span>
                <span className="text-yellow-600 font-medium">Heute</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded text-xs opacity-60">
                <span className="flex-1">Newsletter: Update (automatisch archiviert)</span>
              </div>
            </div>
            <div className="text-center text-xs text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full">
              ⚡ Wichtiges zuerst - Unwichtiges automatisch weg
            </div>
          </div>
        );
        
      case 'newsletter':
        return (
          <div className="space-y-3">
            <div className="text-center text-sm text-muted-foreground mb-2">
              Jeden Montag automatisch...
            </div>
            <div className="border border-dashed border-purple-300 rounded-lg p-3 bg-purple-50 dark:bg-purple-900/20">
              <div className="text-sm font-medium mb-2">📧 Newsletter wird erstellt...</div>
              <div className="text-xs text-muted-foreground mb-2">Für Ihre 847 Kunden</div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Personalisierte Betreffzeile</span>
                  <span className="text-green-600">✓ Fertig</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Passende Inhalte ausgewählt</span>
                  <span className="text-green-600">✓ Fertig</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Versand um 9:00 Uhr</span>
                  <span className="text-blue-600">⏰ Geplant</span>
                </div>
              </div>
            </div>
            <div className="text-center text-xs text-purple-600 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">
              🚀 Kunden bleiben automatisch informiert
            </div>
          </div>
        );
        
      case 'sales':
        return (
          <div className="space-y-3">
            <div className="text-center text-sm text-muted-foreground mb-2">
              Ihre besten potentiellen Kunden...
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-medium">TechCorp GmbH</div>
                    <div className="text-muted-foreground">Budget: 50k€, braucht sofort</div>
                  </div>
                </div>
                <span className="text-green-600 font-bold">🔥 HEIß</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div>
                    <div className="font-medium">StartUp AG</div>
                    <div className="text-muted-foreground">Interesse gezeigt, folgt up</div>
                  </div>
                </div>
                <span className="text-yellow-600 font-medium">Warm</span>
              </div>
            </div>
            <div className="text-center text-xs text-red-600 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">
              🎯 Ihre Zeit nur für die besten Chancen
            </div>
          </div>
        );
        
      case 'calendar':
        return (
          <div className="space-y-3">
            <div className="text-center text-sm text-muted-foreground mb-2">
              Ein Kunde möchte einen Termin...
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="grid grid-cols-7 gap-1 text-xs text-center mb-2">
                {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day, i) => (
                  <div key={i} className="text-muted-foreground font-medium">{day}</div>
                ))}
                {Array.from({length: 7}, (_, i) => (
                  <div key={i} className={`p-1 rounded ${i === 2 ? 'bg-primary text-primary-foreground animate-pulse' : i === 4 ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'text-muted-foreground'}`}>
                    {i + 15}
                  </div>
                ))}
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2 p-2 bg-primary/20 rounded">
                  <span>✅ Mi 14:00 - Beratungstermin automatisch gebucht</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded">
                  <span>📧 Erinnerung an beide Seiten versendet</span>
                </div>
              </div>
            </div>
            <div className="text-center text-xs text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-full">
              📅 Terminbuchung ohne Ihr Zutun
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
          <div className={`w-8 h-8 ${currentAgent.color} rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm`}>
            <currentAgent.icon className="w-4 h-4 text-white" />
          </div>
          <div className="text-center">
            <div className="font-medium text-sm truncate">{currentAgent.name}</div>
            <div className="text-xs text-muted-foreground truncate">{currentAgent.benefit}</div>
          </div>
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
            <p className="text-xs text-muted-foreground font-medium">
              {currentAgent.interface === 'chat' && '💡 Aus jedem Website-Besucher kann ein Kunde werden'}
              {currentAgent.interface === 'linkedin' && '🎯 Neue Kontakte finden sich selbst'}  
              {currentAgent.interface === 'voice' && '📞 Jeder Anruf wird beantwortet'}
              {currentAgent.interface === 'email' && '⚡ Wichtiges sofort erkennen'}
              {currentAgent.interface === 'newsletter' && '📨 Kunden vergessen Sie nie'}
              {currentAgent.interface === 'sales' && '💰 Beste Chancen zuerst bearbeiten'}
              {currentAgent.interface === 'calendar' && '📅 Termine ohne Telefonieren'}
            </p>
          </div>
        </div>
      </Card>

      {/* Demo Stats */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-2">
          <div className="text-lg font-bold text-primary">💰</div>
          <div className="text-xs text-muted-foreground">Mehr Umsatz</div>
        </div>
        <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-2">
          <div className="text-lg font-bold text-primary">⚡</div>
          <div className="text-xs text-muted-foreground">Weniger Stress</div>
        </div>
        <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-2">
          <div className="text-lg font-bold text-primary">24/7</div>
          <div className="text-xs text-muted-foreground">Immer da</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveKIDemo;