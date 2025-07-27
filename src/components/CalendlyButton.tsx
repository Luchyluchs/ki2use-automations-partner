import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

interface CalendlyButtonProps {
  text?: string;
  variant?: "default" | "cta" | "accent" | "outline";
  size?: "sm" | "lg" | "xl";
  className?: string;
  icon?: boolean;
}

const CalendlyButton = ({ 
  text = "Kostenloses Beratungsgespräch vereinbaren", 
  variant = "cta",
  size = "lg",
  className = "",
  icon = true
}: CalendlyButtonProps) => {
  
  const handleCalendlyClick = () => {
    // Load Calendly widget script dynamically when needed
    const loadCalendlyAndOpen = () => {
      // Remove any existing Calendly scripts
      const existingScripts = document.querySelectorAll('script[src*="calendly"]');
      existingScripts.forEach(script => script.remove());
      
      // Create and load fresh script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      script.onload = () => {
        // Wait a moment for Calendly to initialize
        setTimeout(() => {
          if (window.Calendly) {
            window.Calendly.initPopupWidget({
              url: 'https://calendly.com/luxalexander/30min'
            });
          } else {
            // Fallback to new tab
            window.open('https://calendly.com/luxalexander/30min', '_blank');
          }
        }, 100);
      };
      
      script.onerror = () => {
        // Fallback to new tab if script fails
        window.open('https://calendly.com/luxalexander/30min', '_blank');
      };
      
      document.head.appendChild(script);
    };
    
    // Check if Calendly is already available
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/luxalexander/30min'
      });
    } else {
      loadCalendlyAndOpen();
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`hover-scale ${className}`}
      onClick={handleCalendlyClick}
    >
      {icon && <Calendar className="w-4 h-4 mr-2" />}
      {text}
    </Button>
  );
};

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

export default CalendlyButton;