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

const CalendlyButton = ({ 
  text = "Kostenloses Beratungsgespräch vereinbaren", 
  variant = "cta",
  size = "lg",
  className = "",
  icon = true
}: CalendlyButtonProps) => {
  
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendly = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/luxalexander/30min'
      });
    } else {
      // Fallback if Calendly not loaded
      window.open('https://calendly.com/luxalexander/30min', '_blank');
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`hover-scale ${className}`}
      onClick={openCalendly}
    >
      {icon && <Calendar className="w-4 h-4 mr-2" />}
      {text}
    </Button>
  );
};

export default CalendlyButton;