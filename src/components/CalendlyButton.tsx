import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Calendar, X, ArrowRight } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface CalendlyButtonProps {
  text?: string;
  variant?: "default" | "cta" | "accent" | "outline";
  size?: "sm" | "lg" | "xl";
  className?: string;
  icon?: boolean;
  asChild?: boolean;
}

// Calendly type definition
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string;
      }) => void;
    };
  }
}

const CalendlyButton = ({ 
  text = "Kostenloses Beratungsgespräch vereinbaren", 
  variant = "cta",
  size = "lg",
  className = "",
  icon = true,
  asChild = false
}: CalendlyButtonProps) => {
  const [showPreForm, setShowPreForm] = useState(false);
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [expectations, setExpectations] = useState("");
  
  const agents = [
    { id: "linkedin", name: "LinkedIn Agent", description: "Automatisierte Netzwerkpflege" },
    { id: "chatbot", name: "Chatbot Agent", description: "24/7 Kundensupport" },
    { id: "email", name: "Email Organisator", description: "E-Mail-Automatisierung" },
    { id: "newsletter", name: "Newsletter Agent", description: "Automatisierte Newsletter" },
    { id: "voice", name: "Sprachbot", description: "Voice-Assistenten" },
    { id: "social", name: "Social Media Agent", description: "Social Media Automatisierung" },
    { id: "sales", name: "Sales Agent", description: "Lead-Qualifizierung" },
    { id: "appointment", name: "Terminbuchungsagent", description: "Automatische Terminplanung" },
    { id: "custom", name: "Maßgeschneiderte Lösung", description: "Individuelle KI-Entwicklung" }
  ];
  
  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleAgentToggle = (agentId: string) => {
    setSelectedAgents(prev => 
      prev.includes(agentId) 
        ? prev.filter(id => id !== agentId)
        : [...prev, agentId]
    );
  };

  const handleCalendlyClick = () => {
    const selectedAgentNames = selectedAgents.map(id => 
      agents.find(agent => agent.id === id)?.name
    ).filter(Boolean).join(", ");
    
    const additionalInfo = `
Interesse an: ${selectedAgentNames || "Noch nicht spezifiziert"}
Erwartungen: ${expectations || "Keine spezifischen Erwartungen angegeben"}
    `.trim();
    
    const openCalendly = () => {
      if (window.Calendly) {
        try {
          // Encode the additional info for URL
          const encodedInfo = encodeURIComponent(additionalInfo);
          const calendlyUrl = `https://calendly.com/luxalexander/30min?a1=${encodedInfo}`;
          
          window.Calendly.initPopupWidget({
            url: calendlyUrl
          });
        } catch (error) {
          console.error('Calendly popup error:', error);
          window.open('https://calendly.com/luxalexander/30min', '_blank');
        }
      } else {
        window.open('https://calendly.com/luxalexander/30min', '_blank');
      }
    };
    
    if (window.Calendly) {
      openCalendly();
    } else {
      setTimeout(openCalendly, 300);
    }
    
    setShowPreForm(false);
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={`hover-scale ${className}`}
        onClick={() => setShowPreForm(true)}
      >
        {icon && <Calendar className="w-4 h-4 mr-2" />}
        {text}
      </Button>

      {/* Pre-Form Modal */}
      {showPreForm && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-card-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Beratungsgespräch vereinbaren</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreForm(false)}
                className="hover:bg-muted"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">
                  Für welche KI-Agenten interessieren Sie sich? (Optional)
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {agents.map(agent => (
                    <div key={agent.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <Checkbox
                        id={agent.id}
                        checked={selectedAgents.includes(agent.id)}
                        onCheckedChange={() => handleAgentToggle(agent.id)}
                        className="mt-1"
                      />
                      <div className="flex-1 min-w-0">
                        <label htmlFor={agent.id} className="font-medium text-sm cursor-pointer">
                          {agent.name}
                        </label>
                        <p className="text-xs text-muted-foreground mt-1">
                          {agent.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Label htmlFor="expectations" className="text-base font-medium mb-2 block">
                  Was erwarten Sie vom Beratungsgespräch? (Optional)
                </Label>
                <Textarea
                  id="expectations"
                  placeholder="z.B. Kostenschätzung für LinkedIn Agent, Implementierungsdauer für E-Mail-Automatisierung, etc."
                  value={expectations}
                  onChange={(e) => setExpectations(e.target.value)}
                  className="min-h-[80px]"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCalendlyClick}
                  className="flex-1"
                  size="lg"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Termin vereinbaren
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowPreForm(false)}
                  size="lg"
                >
                  Abbrechen
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                Diese Informationen helfen uns, das Gespräch optimal auf Ihre Bedürfnisse vorzubereiten.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalendlyButton;