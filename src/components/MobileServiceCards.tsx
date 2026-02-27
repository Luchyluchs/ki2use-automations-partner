import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Search, Rocket, BadgeEuro, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  cta: { text: string; href: string };
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

const MobileServiceCard = ({ title, description, benefits, cta, variant = "secondary", icon }: ServiceCardProps) => (
  <Card className={cn(
    "h-full transition-all duration-300 hover:shadow-elevated border-0",
    variant === "primary" ? "bg-gradient-primary text-primary-foreground" : "bg-card hover:bg-muted/20"
  )}>
    <CardContent className="p-4 h-full flex flex-col">
      <div className="flex items-start space-x-3 mb-3">
        {icon && (
          <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", variant === "primary" ? "bg-white/20" : "bg-primary/10")}>
            {icon}
          </div>
        )}
        <h3 className={cn("font-semibold text-base leading-tight mb-1", variant === "primary" ? "text-primary-foreground" : "text-foreground")}>
          {title}
        </h3>
      </div>
      <p className={cn("text-sm leading-relaxed mb-4 flex-1", variant === "primary" ? "text-primary-foreground/90" : "text-muted-foreground")}>
        {description}
      </p>
      <div className="space-y-2 mb-4">
        {benefits.slice(0, 3).map((benefit, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle size={14} className={cn("flex-shrink-0", variant === "primary" ? "text-primary-foreground/80" : "text-primary")} />
            <span className={cn("text-xs", variant === "primary" ? "text-primary-foreground/90" : "text-muted-foreground")}>{benefit}</span>
          </div>
        ))}
      </div>
      <Button asChild size="sm" variant={variant === "primary" ? "secondary" : "outline"} className="w-full mt-auto">
        <Link to={cta.href} className="flex items-center justify-center space-x-2">
          <span>{cta.text}</span>
          <ArrowRight size={14} />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

const MobileServiceCards = () => {
  const services = [
    {
      title: "KI-Beratung",
      description: "Wir finden heraus, wo KI in Ihrem Unternehmen echten Mehrwert bringt.",
      benefits: ["Prozessanalyse & Potenzialcheck", "Konkrete Handlungsempfehlungen", "Unverbindliches Erstgespräch"],
      cta: { text: "Beratung anfragen", href: "/kontakt" },
      variant: "primary" as const,
      icon: <Search size={20} className="text-current" />
    },
    {
      title: "Umsetzung",
      description: "Von der Konzeption bis zum Rollout – wir begleiten die Implementierung.",
      benefits: ["Individuelle Konzeption", "Schrittweise Implementierung", "Schulung Ihres Teams"],
      cta: { text: "Projekt besprechen", href: "/kontakt" },
      icon: <Rocket size={20} className="text-primary" />
    },
    {
      title: "Förderung sichern",
      description: "Staatliche Förderprogramme prüfen und Zuschüsse beantragen.",
      benefits: ["Digital Jetzt (bis 50% Zuschuss)", "ZIM-Förderung prüfen", "Hilfe bei der Antragstellung"],
      cta: { text: "Förderung prüfen", href: "/kontakt" },
      icon: <BadgeEuro size={20} className="text-primary" />
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {services.map((service, index) => (
        <MobileServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default MobileServiceCards;
