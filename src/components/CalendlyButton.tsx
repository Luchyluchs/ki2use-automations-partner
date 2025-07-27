import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Calendar, X } from "lucide-react";
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
  const [customerInput, setCustomerInput] = useState("");
  
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

  const handleCalendlyClick = () => {
    const openCalendly = () => {
      if (window.Calendly) {
        try {
          window.Calendly.initPopupWidget({
            url: 'https://calendly.com/luxalexander/30min'
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
    setCustomerInput("");
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

      {/* Simple Pre-Form Modal */}
      {showPreForm && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl p-6 max-w-md w-full shadow-xl border border-card-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Kurze Vorabinfo</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreForm(false)}
                className="h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="customer-input" className="text-sm font-medium mb-2 block">
                  Wofür interessieren Sie sich oder was erwarten Sie vom Termin?
                </Label>
                <Textarea
                  id="customer-input"
                  placeholder="z.B. LinkedIn Automatisierung, E-Mail Agent, Kostenschätzung für maßgeschneiderte Lösung..."
                  value={customerInput}
                  onChange={(e) => setCustomerInput(e.target.value)}
                  className="min-h-[100px] resize-none"
                />
              </div>
              
              <div className="flex gap-3">
                <Button
                  onClick={handleCalendlyClick}
                  className="flex-1"
                  size="lg"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Termin vereinbaren
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
                Optional - hilft uns bei der Vorbereitung des Gesprächs
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalendlyButton;