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
    // Check if script is already loaded
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => console.log('Calendly script loaded');
    script.onerror = () => console.error('Failed to load Calendly script');
    document.head.appendChild(script);
  }, []);

  const handleCalendlyClick = () => {
    console.log('Calendly button clicked');
    console.log('window.Calendly available:', !!window.Calendly);
    
    const openCalendly = () => {
      console.log('Attempting to open Calendly...');
      if (window.Calendly) {
        console.log('Calendly object found, trying popup');
        try {
          window.Calendly.initPopupWidget({
            url: 'https://calendly.com/luxalexander/30min'
          });
          console.log('Calendly popup initiated');
        } catch (error) {
          console.error('Calendly popup error:', error);
          console.log('Falling back to new tab');
          window.open('https://calendly.com/luxalexander/30min', '_blank');
        }
      } else {
        console.log('Calendly object not found, opening in new tab');
        window.open('https://calendly.com/luxalexander/30min', '_blank');
      }
    };
    
    // Try immediately, if it fails, wait and try again
    if (window.Calendly) {
      console.log('Calendly immediately available');
      openCalendly();
    } else {
      console.log('Calendly not available, waiting 300ms');
      setTimeout(() => {
        console.log('Retry after timeout');
        openCalendly();
      }, 300);
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