import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
  variant?: "default" | "card" | "minimal";
}

const CollapsibleSection = ({ 
  title, 
  children, 
  defaultExpanded = false, 
  className,
  variant = "default" 
}: CollapsibleSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const baseClasses = {
    default: "border border-border rounded-lg bg-card",
    card: "bg-card shadow-card rounded-lg border border-card-border",
    minimal: "border-b border-border"
  };

  const headerClasses = {
    default: "px-4 py-3",
    card: "p-4",
    minimal: "py-3"
  };

  const contentClasses = {
    default: "px-4 pb-4",
    card: "px-4 pb-4",
    minimal: "py-3"
  };

  return (
    <div className={cn(baseClasses[variant], className)}>
      <button
        onClick={toggleExpanded}
        className={cn(
          "w-full flex items-center justify-between text-left transition-colors duration-200 hover:bg-muted/50",
          headerClasses[variant],
          variant === "minimal" && "hover:bg-transparent"
        )}
        aria-expanded={isExpanded}
      >
        <h3 className="text-base font-semibold text-foreground">
          {title}
        </h3>
        <div className="ml-2 transition-transform duration-200">
          {isExpanded ? (
            <ChevronUp size={20} className="text-muted-foreground" />
          ) : (
            <ChevronDown size={20} className="text-muted-foreground" />
          )}
        </div>
      </button>
      
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className={cn(contentClasses[variant])}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;