import { PopupButton } from "react-calendly";
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

  // Map our button variants to CSS classes
  const getButtonClasses = () => {
    const baseClasses = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full whitespace-nowrap";
    
    let variantClasses = "";
    let sizeClasses = "";
    
    // Apply variant styles
    switch (variant) {
      case "cta":
        variantClasses = "bg-accent text-accent-foreground hover:bg-accent-hover shadow-primary font-semibold tracking-wide";
        break;
      case "accent":
        variantClasses = "bg-accent text-accent-foreground hover:bg-accent-hover shadow-primary font-semibold";
        break;
      case "outline":
        variantClasses = "border border-card-border bg-background hover:bg-muted text-foreground shadow-card";
        break;
      default:
        variantClasses = "bg-primary text-primary-foreground hover:bg-primary-hover shadow-card";
    }
    
    // Apply size styles with better mobile responsiveness
    switch (size) {
      case "sm":
        sizeClasses = "h-10 px-3 py-2 text-xs sm:text-sm sm:px-4";
        break;
      case "lg":
        sizeClasses = "h-11 px-4 py-2 text-sm sm:h-12 sm:px-6 sm:py-3 sm:text-base";
        break;
      case "xl":
        sizeClasses = "h-12 px-5 py-3 text-sm sm:h-14 sm:px-8 sm:py-4 sm:text-base";
        break;
      default:
        sizeClasses = "h-10 px-4 py-2 text-sm sm:h-11 sm:px-6 sm:py-3";
    }
    
    return `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;
  };

  return (
    <div className="w-full">
      <PopupButton
        url="https://calendly.com/luxalexander/30min"
        rootElement={document.getElementById("root")!}
        text={`${icon ? "📅 " : ""}${text}`}
        className={getButtonClasses()}
      />
    </div>
  );
};

export default CalendlyButton;