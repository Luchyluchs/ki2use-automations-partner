import { useState, useEffect } from "react";
import { MessageCircle, Mic, Mail, Calendar, Linkedin, Bot, Newspaper, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const InteractiveKIDemo = () => {
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [voiceAnimation, setVoiceAnimation] = useState(0);
  const [emailStep, setEmailStep] = useState(0);
  const [salesStep, setSalesStep] = useState(0);

  const demoAgents = [
    { id: 'voice', name: 'Telefon-Assistent', icon: Mic, color: 'bg-primary', interface: 'voice', benefit: 'Anrufe auch nach Feierabend' },
    { id: 'chatbot', name: 'Website-Chat', icon: MessageCircle, color: 'bg-accent', interface: 'chat', benefit: 'Kunden fragen - KI antwortet sofort' },
    { id: 'email', name: 'E-Mail Sortierer', icon: Mail, color: 'bg-secondary', interface: 'email', benefit: 'Wichtige E-Mails zuerst sehen' },
    { id: 'sales', name: 'Verkaufs-Helfer', icon: TrendingUp, color: 'bg-primary', interface: 'sales', benefit: 'Beste Kunden automatisch finden' },
    { id: 'appointment', name: 'Termin-Planer', icon: Calendar, color: 'bg-accent', interface: 'calendar', benefit: 'Termine buchen ohne Aufwand' },
    { id: 'linkedin', name: 'LinkedIn Kontakte', icon: Linkedin, color: 'bg-secondary', interface: 'linkedin', benefit: 'Neue Kunden finden automatisch' },
    { id: 'newsletter', name: 'Newsletter-Versand', icon: Newspaper, color: 'bg-primary', interface: 'newsletter', benefit: 'Kunden automatisch informieren' }
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
    const interval = setInterval(nextAgent, 8000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  useEffect(() => {
    if (currentAgent.interface === 'chat') {
      setChatStep(0);
      const steps = [() => setChatStep(1), () => setChatStep(2), () => setChatStep(3)];
      steps.forEach((step, index) => { setTimeout(step, (index + 1) * 1500); });
    }
  }, [currentAgent.interface, activeDemoIndex]);

  useEffect(() => {
    if (currentAgent.interface === 'voice') {
      setVoiceAnimation(0);
      const interval = setInterval(() => { setVoiceAnimation(prev => (prev + 1) % 20); }, 150);
      return () => clearInterval(interval);
    }
  }, [currentAgent.interface, activeDemoIndex]);

  useEffect(() => {
    if (currentAgent.interface === 'email') {
      setEmailStep(0);
      const steps = [() => setEmailStep(1), () => setEmailStep(2), () => setEmailStep(3)];
      steps.forEach((step, index) => { setTimeout(step, (index + 1) * 800); });
    }
  }, [currentAgent.interface, activeDemoIndex]);

  useEffect(() => {
    if (currentAgent.interface === 'sales') {
      setSalesStep(0);
      const steps = [() => setSalesStep(1), () => setSalesStep(2)];
      steps.forEach((step, index) => { setTimeout(step, (index + 1) * 1200); });
    }
  }, [currentAgent.interface, activeDemoIndex]);

  const renderInterface = () => {
    switch (currentAgent.interface) {
      case 'chat':
        return (
          <div className="space-y-3">
            <div className="text-center text-xs text-muted-foreground mb-3">
              Website-Besucher um 23:00 Uhr
            </div>
            {chatStep >= 1 && (
              <div className="flex justify-start animate-fade-in">
                <div className="border border-card-border/30 px-3 py-2 rounded-lg text-sm max-w-[80%] text-foreground">
                  Hallo! Sind Sie am Wochenende da?
                </div>
              </div>
            )}
            {chatStep >= 2 && (
              <div className="flex justify-end animate-fade-in">
                <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm max-w-[80%]">
                  Ja! Samstag 9-16 Uhr verfügbar
                </div>
              </div>
            )}
            {chatStep >= 3 && (
              <div className="border border-accent/30 bg-accent/10 rounded-lg p-2 text-center animate-scale-in">
                <div className="text-xs text-accent font-light">
                  ✅ Termin automatisch gebucht
                </div>
              </div>
            )}
          </div>
        );
        
      case 'linkedin':
        return (
          <div className="space-y-3">
            <div className="text-center text-sm text-muted-foreground mb-2">
              Während Sie arbeiten, knüpft die KI neue Kontakte...
            </div>
            <div className="flex items-center gap-3 p-3 border border-card-border/30 rounded-lg">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-light text-foreground">Max Mustermann</div>
                <div className="text-xs text-muted-foreground font-light">Sucht Ihre Dienstleistung</div>
              </div>
              <div className="text-xs text-accent font-light">✓ Kontaktiert</div>
            </div>
            <div className="text-center text-xs text-primary bg-primary/10 px-3 py-1 rounded-full font-light">
              📈 +12 neue potentielle Kunden diese Woche
            </div>
          </div>
        );
        
      case 'voice':
        return (
          <div className="text-center space-y-4">
            <div className="text-sm text-muted-foreground font-light">
              Kunde ruft um 19:30 Uhr an...
            </div>
            <div className="flex justify-center items-center space-x-1">
              {[8, 12, 6, 10, 4].map((baseHeight, index) => {
                const waveOffset = Math.sin((voiceAnimation * 0.3) + (index * 0.8)) * 3;
                return (
                  <div 
                    key={index}
                    className="w-2 bg-primary rounded-full transition-all duration-150 ease-in-out"
                    style={{ height: `${baseHeight + Math.abs(waveOffset)}px` }}
                  />
                );
              })}
            </div>
            <div className="text-sm font-light text-foreground animate-fade-in">
              🎤 "Guten Abend! Ich kann Ihnen gerne helfen."
            </div>
            <div className="border border-card-border/30 rounded-lg p-2 text-xs animate-scale-in">
              <div className="flex items-center gap-2 mb-1">
                <Bot className="w-3 h-3 text-primary" />
                <span className="font-light text-foreground">Verknüpft mit Ihren Systemen:</span>
              </div>
              <div className="space-y-1 text-muted-foreground font-light">
                <div>✓ CRM-System aktualisiert</div>
                <div>✓ Termin automatisch vorgeschlagen</div>
                <div>✓ Follow-up E-Mail geplant</div>
              </div>
            </div>
            <div className="text-xs text-accent bg-accent/10 px-3 py-2 rounded-lg font-light">
              💰 Kein verlorener Anruf = Kein verlorener Kunde
            </div>
          </div>
        );
        
      case 'email':
        return (
          <div className="space-y-3">
            <div className="text-center text-sm text-muted-foreground mb-2 font-light">
              Ihr E-Mail-Postfach jeden Morgen...
            </div>
            <div className="space-y-1">
              {emailStep >= 1 && (
                <div className="flex items-center gap-2 p-2 border border-card-border/30 rounded border-l-4 border-l-accent text-xs animate-fade-in">
                  <span className="flex-1 text-foreground font-light">🔥 WICHTIG: Große Anfrage von TechCorp</span>
                  <span className="text-accent font-light">Priorität 1</span>
                </div>
              )}
              {emailStep >= 2 && (
                <div className="flex items-center gap-2 p-2 border border-card-border/30 rounded border-l-4 border-l-primary text-xs animate-fade-in">
                  <span className="flex-1 text-foreground font-light">📞 Rückruf: Interessent wartet</span>
                  <span className="text-primary font-light">Heute</span>
                </div>
              )}
              {emailStep >= 3 && (
                <div className="flex items-center gap-2 p-2 border border-card-border/20 rounded text-xs opacity-50 animate-fade-in">
                  <span className="flex-1 text-muted-foreground font-light">Newsletter: Update (automatisch archiviert)</span>
                </div>
              )}
            </div>
            <div className="text-center text-xs text-primary bg-primary/10 px-3 py-1 rounded-full font-light">
              ⚡ Wichtiges zuerst - Unwichtiges automatisch weg
            </div>
          </div>
        );
        
      case 'newsletter':
        return (
          <div className="space-y-3">
            <div className="text-center text-sm text-muted-foreground mb-2 font-light">
              Jeden Montag automatisch...
            </div>
            <div className="border border-dashed border-card-border/40 rounded-lg p-3">
              <div className="text-sm font-light mb-2 text-foreground">📧 Newsletter wird erstellt...</div>
              <div className="text-xs text-muted-foreground mb-2 font-light">Für Ihre 847 Kunden</div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-light">
                  <span className="text-foreground">Personalisierte Betreffzeile</span>
                  <span className="text-accent">✓ Fertig</span>
                </div>
                <div className="flex justify-between text-xs font-light">
                  <span className="text-foreground">Passende Inhalte ausgewählt</span>
                  <span className="text-accent">✓ Fertig</span>
                </div>
                <div className="flex justify-between text-xs font-light">
                  <span className="text-foreground">Versand um 9:00 Uhr</span>
                  <span className="text-primary">⏰ Geplant</span>
                </div>
              </div>
            </div>
            <div className="text-center text-xs text-primary bg-primary/10 px-3 py-1 rounded-full font-light">
              🚀 Kunden bleiben automatisch informiert
            </div>
          </div>
        );
        
      case 'sales':
        return (
          <div className="space-y-3">
            <div className="text-center text-sm text-muted-foreground mb-2 font-light">
              Ihre besten potentiellen Kunden...
            </div>
            <div className="space-y-2">
              {salesStep >= 1 && (
                <div className="flex items-center justify-between p-2 border border-accent/30 bg-accent/10 rounded text-xs animate-fade-in">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div>
                      <div className="font-light text-foreground">TechCorp GmbH</div>
                      <div className="text-muted-foreground font-light">Budget: 50k€, braucht sofort</div>
                    </div>
                  </div>
                  <span className="text-accent font-light">🔥 HEIß</span>
                </div>
              )}
              {salesStep >= 2 && (
                <div className="flex items-center justify-between p-2 border border-primary/30 bg-primary/10 rounded text-xs animate-fade-in">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <div className="font-light text-foreground">StartUp AG</div>
                      <div className="text-muted-foreground font-light">Interesse gezeigt, folgt up</div>
                    </div>
                  </div>
                  <span className="text-primary font-light">Warm</span>
                </div>
              )}
            </div>
            <div className="text-center text-xs text-accent bg-accent/10 px-3 py-1 rounded-full font-light">
              🎯 Ihre Zeit nur für die besten Chancen
            </div>
          </div>
        );
        
      case 'calendar':
        return (
          <div className="space-y-3">
            <div className="text-center text-sm text-muted-foreground mb-2 font-light">
              Ein Kunde möchte einen Termin...
            </div>
            <div className="border border-card-border/30 p-3 rounded-lg">
              <div className="grid grid-cols-7 gap-1 text-xs text-center mb-2">
                {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day, i) => (
                  <div key={i} className="text-muted-foreground font-light">{day}</div>
                ))}
                {Array.from({length: 7}, (_, i) => (
                  <div key={i} className={`p-1 rounded font-light ${i === 2 ? 'bg-primary text-primary-foreground' : i === 4 ? 'bg-accent/20 text-accent' : 'text-muted-foreground'}`}>
                    {i + 15}
                  </div>
                ))}
              </div>
              <div className="space-y-1 text-xs font-light">
                <div className="flex items-center gap-2 p-2 bg-primary/10 rounded text-foreground">
                  <span>✅ Mi 14:00 - Beratungstermin automatisch gebucht</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-accent/10 rounded text-foreground">
                  <span>📧 Erinnerung an beide Seiten versendet</span>
                </div>
              </div>
            </div>
            <div className="text-center text-xs text-primary bg-primary/10 px-3 py-1 rounded-full font-light">
              📅 Terminbuchung ohne Ihr Zutun
            </div>
          </div>
        );
        
      default:
        return <div>Demo wird geladen...</div>;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      {/* Agent Navigation */}
      <div className="flex items-center justify-between mb-4 animate-fade-in delay-150">
        <Button variant="ghost" size="sm" onClick={prevAgent} className="p-2 h-8 w-8" disabled={isAnimating}>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <div className="flex items-center gap-2 min-w-0 flex-1 justify-center">
          <div className={`w-8 h-8 ${currentAgent.color} rounded-lg flex items-center justify-center transition-all duration-500`}>
            <currentAgent.icon className="w-4 h-4 text-primary-foreground transition-transform duration-300" />
          </div>
          <div className="text-center transition-all duration-300">
            <div className="font-light text-sm truncate animate-fade-in text-foreground">{currentAgent.name}</div>
            <div className="text-xs text-muted-foreground truncate animate-fade-in delay-75 font-light">{currentAgent.benefit}</div>
          </div>
        </div>
        
        <Button variant="ghost" size="sm" onClick={nextAgent} className="p-2 h-8 w-8" disabled={isAnimating}>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Progress Indicators */}
      <div className="flex justify-center gap-1 mb-4 animate-fade-in delay-300">
        {demoAgents.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              index === activeDemoIndex 
                ? 'bg-primary w-6' 
                : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
            }`}
            onClick={() => {
              if (!isAnimating && index !== activeDemoIndex) {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveDemoIndex(index);
                  setIsAnimating(false);
                }, 150);
              }
            }}
          />
        ))}
      </div>

      {/* Demo Interface */}
      <div className={`border border-card-border/50 rounded-2xl bg-card/30 backdrop-blur-sm shadow-soft transition-all duration-500 ${
        isAnimating ? 'opacity-70' : 'opacity-100'
      }`}>
        <div className="p-5">
          <div className="flex items-center gap-3 pb-3 mb-1 border-b border-card-border/30 animate-fade-in">
            <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary)/0.4)]"></div>
            <span className="text-sm font-light text-foreground">{currentAgent.name} Demo</span>
          </div>

          <div className={`min-h-[280px] max-h-[280px] py-4 transition-all duration-300 ${
            isAnimating ? 'opacity-60 scale-95' : 'opacity-100 scale-100 animate-fade-in'
          }`}>
            {renderInterface()}
          </div>

          <div className="pt-3 border-t border-card-border/30 text-center animate-fade-in delay-200">
            <p className="text-xs text-muted-foreground font-light">
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
      </div>

      {/* Demo Stats */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="border border-card-border/20 rounded-lg p-2">
          <div className="text-lg text-primary">💰</div>
          <div className="text-xs text-muted-foreground font-light">Mehr Umsatz</div>
        </div>
        <div className="border border-card-border/20 rounded-lg p-2">
          <div className="text-lg text-primary">⚡</div>
          <div className="text-xs text-muted-foreground font-light">Weniger Stress</div>
        </div>
        <div className="border border-card-border/20 rounded-lg p-2">
          <div className="text-lg text-primary font-light">24/7</div>
          <div className="text-xs text-muted-foreground font-light">Immer da</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveKIDemo;
