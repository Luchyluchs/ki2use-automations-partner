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

  const handleClick = () => {
    // Create Calendly script element
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.onload = () => {
      // @ts-ignore - Calendly will be available after script loads
      if (window.Calendly) {
        // @ts-ignore
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/luxalexander/30min'
        });
      }
    };
    
    // Only add script if it doesn't exist
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      document.head.appendChild(script);
    } else {
      // Script already exists, just open popup
      // @ts-ignore
      if (window.Calendly) {
        // @ts-ignore
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/luxalexander/30min'
        });
      }
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`hover-scale ${className}`}
      onClick={handleClick}
    >
      {icon && <Calendar className="w-4 h-4 mr-2" />}
      {text}
    </Button>
  );
};

export default CalendlyButton;