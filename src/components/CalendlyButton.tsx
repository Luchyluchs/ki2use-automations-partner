import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

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
  
  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Cleanup on unmount
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
          // Fallback: open in new tab
          window.open('https://calendly.com/luxalexander/30min', '_blank');
        }
      } else {
        // Fallback: open in new tab if Calendly not loaded
        window.open('https://calendly.com/luxalexander/30min', '_blank');
      }
    };
    
    // Try immediately, if it fails, wait and try again
    if (window.Calendly) {
      openCalendly();
    } else {
      setTimeout(openCalendly, 300);
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

export default CalendlyButton;