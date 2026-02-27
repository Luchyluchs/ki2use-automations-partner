import { Clock, Euro, BarChart3, Zap, LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  example: string;
  variant?: "default" | "highlight";
}

const MobileBenefitCard = ({ icon: Icon, title, description, example, variant = "default" }: BenefitCardProps) => (
  <Card className={cn(
    "transition-all duration-300 hover:shadow-card border-0",
    variant === "highlight" ? "bg-gradient-primary text-primary-foreground" : "bg-card/50 backdrop-blur-sm"
  )}>
    <CardContent className="p-4">
      <div className="flex items-center space-x-3 mb-3">
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", variant === "highlight" ? "bg-white/20" : "bg-primary/10")}>
          <Icon size={20} className={cn(variant === "highlight" ? "text-primary-foreground" : "text-primary")} />
        </div>
        <h3 className={cn("font-semibold text-base leading-tight", variant === "highlight" ? "text-primary-foreground" : "text-foreground")}>
          {title}
        </h3>
      </div>
      <p className={cn("text-sm leading-relaxed mb-3", variant === "highlight" ? "text-primary-foreground/90" : "text-muted-foreground")}>
        {description}
      </p>
      <div className={cn("text-xs p-2 rounded-md", variant === "highlight" ? "bg-white/10 text-primary-foreground/80" : "bg-muted/50 text-muted-foreground")}>
        {example}
      </div>
    </CardContent>
  </Card>
);

const MobileBenefitsCards = () => {
  const benefits = [
    { icon: Clock, title: "Zeit sparen", description: "Repetitive Aufgaben automatisieren", example: "Weniger Verwaltung, mehr wertschöpfende Arbeit", variant: "highlight" as const },
    { icon: Euro, title: "Kosten senken", description: "Prozesse effizienter gestalten und Ressourcen nutzen", example: "Bis zu 50% Förderung möglich" },
    { icon: BarChart3, title: "Bessere Entscheidungen", description: "Datenbasierte Einblicke für Ihr Unternehmen", example: "Faktenbasiert statt Bauchgefühl" },
    { icon: Zap, title: "Wettbewerbsfähig bleiben", description: "Während andere zögern, starten Sie durch", example: "Frühzeitig KI-Vorteile nutzen" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {benefits.map((benefit, index) => (
        <MobileBenefitCard key={index} {...benefit} />
      ))}
    </div>
  );
};

export default MobileBenefitsCards;
