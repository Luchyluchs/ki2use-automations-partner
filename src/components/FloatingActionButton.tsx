import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Phone, Calculator, Zap, X, LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface FABAction {
  icon: LucideIcon;
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

const FloatingActionButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const actions: FABAction[] = [
    {
      icon: Phone,
      label: "Kostenloses Beratungsgespräch",
      href: "/kontakt",
      variant: "primary"
    },
    {
      icon: Calculator,
      label: "ROI berechnen",
      href: "/roi-rechner",
      variant: "secondary"
    },
    {
      icon: Zap,
      label: "Agenten ansehen",
      href: "/standard-agenten",
      variant: "secondary"
    }
  ];

  return (
    <div className="fixed bottom-20 right-4 z-40 lg:hidden">
      {/* Expanded Actions */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 space-y-3 mb-2">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div
                key={action.href}
                className="flex items-center space-x-3 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="bg-background/90 backdrop-blur-sm text-sm font-medium px-3 py-2 rounded-lg shadow-card border border-border whitespace-nowrap">
                  {action.label}
                </span>
                <Button
                  asChild
                  size="sm"
                  variant={action.variant === "primary" ? "default" : "outline"}
                  className="w-12 h-12 rounded-full shadow-elevated"
                  onClick={() => setIsExpanded(false)}
                >
                  <Link to={action.href}>
                    <Icon size={20} />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      )}

      {/* Main FAB */}
      <Button
        size="lg"
        className={cn(
          "w-14 h-14 rounded-full shadow-primary transition-all duration-300",
          isExpanded ? "rotate-45" : "rotate-0"
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <X size={24} /> : <Plus size={24} />}
      </Button>

      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
};

export default FloatingActionButton;