import { PopupWidget } from "react-calendly";
import { useState } from "react";
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

const CalendlyButton = ({ 
  text = "Kostenloses Beratungsgespräch vereinbaren", 
  variant = "cta",
  size = "lg",
  className = "",
  icon = true,
  asChild = false
}: CalendlyButtonProps) => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={`hover-scale ${className}`}
        onClick={() => setIsCalendlyOpen(true)}
      >
        {icon && <Calendar className="w-4 h-4 mr-2" />}
        {text}
      </Button>

      {/* Calendly Popup Widget */}
      {isCalendlyOpen && (
        <div className="calendly-overlay fixed inset-0 z-[9999]">
          <PopupWidget
            url="https://calendly.com/luxalexander/30min"
            text="Termin buchen"
            rootElement={document.getElementById("root")!}
          />
          <div 
            className="absolute inset-0 bg-black/50 cursor-pointer"
            onClick={() => setIsCalendlyOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default CalendlyButton;