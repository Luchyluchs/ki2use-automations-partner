import { useEffect } from "react";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

interface CalendlyButtonProps {
  text?: string;
  variant?: "default" | "cta" | "accent" | "outline";
  size?: "sm" | "lg" | "xl";
  className?: string;
  icon?: boolean;
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
  icon = true
}: CalendlyButtonProps) => {
  
  // Load Calendly script
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const handleCalendlyClick = () => {
    // Simple approach - wait a bit for Calendly to be ready, then open
    setTimeout(() => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/luxalexander/30min'
        });
      } else {
        // Fallback: open in new tab
        window.open('https://calendly.com/luxalexander/30min', '_blank');
      }
    }, 100);
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

export default CalendlyButton;