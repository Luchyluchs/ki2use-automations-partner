import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Clock, Euro, TrendingUp, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  cta: {
    text: string;
    href: string;
  };
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

const MobileServiceCard = ({ 
  title, 
  description, 
  benefits, 
  cta, 
  variant = "secondary",
  icon 
}: ServiceCardProps) => {
  return (
    <Card className={cn(
      "h-full transition-all duration-300 hover:shadow-elevated border-0",
      variant === "primary" 
        ? "bg-gradient-primary text-primary-foreground" 
        : "bg-card hover:bg-muted/20"
    )}>
      <CardContent className="p-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start space-x-3 mb-3">
          {icon && (
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
              variant === "primary" 
                ? "bg-white/20" 
                : "bg-primary/10"
            )}>
              {icon}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3 className={cn(
              "font-semibold text-base leading-tight mb-1",
              variant === "primary" ? "text-primary-foreground" : "text-foreground"
            )}>
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className={cn(
          "text-sm leading-relaxed mb-4 flex-1",
          variant === "primary" ? "text-primary-foreground/90" : "text-muted-foreground"
        )}>
          {description}
        </p>

        {/* Benefits */}
        <div className="space-y-2 mb-4">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle 
                size={14} 
                className={cn(
                  "flex-shrink-0",
                  variant === "primary" ? "text-primary-foreground/80" : "text-primary"
                )} 
              />
              <span className={cn(
                "text-xs",
                variant === "primary" ? "text-primary-foreground/90" : "text-muted-foreground"
              )}>
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button
          asChild
          size="sm"
          variant={variant === "primary" ? "secondary" : "outline"}
          className="w-full mt-auto"
        >
          <Link to={cta.href} className="flex items-center justify-center space-x-2">
            <span>{cta.text}</span>
            <ArrowRight size={14} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const MobileServiceCards = () => {
  const services = [
    {
      title: "Standard KI-Assistenten",
      description: "Sofort einsetzbare Automatisierungslösungen für typische Geschäftsprozesse.",
      benefits: [
        "Sofortiger Einsatz ohne Setup",
        "Bewährte Automatisierungsvorlagen",
        "DSGVO-konforme Implementierung"
      ],
      cta: {
        text: "Agenten ansehen",
        href: "/standard-agenten"
      },
      variant: "primary" as const,
      icon: <TrendingUp size={20} className="text-current" />
    },
    {
      title: "Maßgeschneiderte Lösung",
      description: "Individuell entwickelte KI-Assistenten für Ihre spezifischen Anforderungen.",
      benefits: [
        "100% auf Ihr Business zugeschnitten",
        "Vollständige Integration möglich",
        "Persönliche Betreuung inklusive"
      ],
      cta: {
        text: "Beratung anfragen",
        href: "/massgeschneiderte-agenten"
      },
      icon: <CheckCircle size={20} className="text-primary" />
    },
    {
      title: "ROI-Berechnung",
      description: "Ermitteln Sie das Einsparpotenzial durch KI-Automatisierung in Ihrem Unternehmen.",
      benefits: [
        "Konkrete Zahlen in 5 Minuten",
        "Individuelle Kostenschätzung",
        "Amortisationszeit berechnen"
      ],
      cta: {
        text: "ROI berechnen",
        href: "/roi-rechner"
      },
      icon: <Euro size={20} className="text-primary" />
    },
    {
      title: "KI-Schulungen",
      description: "Qualifizieren Sie Ihr Team für den effizienten Umgang mit KI-Technologien.",
      benefits: [
        "Praxisnahe Schulungsinhalte",
        "Zertifikate für Teilnehmer",
        "Individuelle Schulungspläne"
      ],
      cta: {
        text: "Schulungen ansehen",
        href: "/ki-schulungen"
      },
      icon: <Clock size={20} className="text-primary" />
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {services.map((service, index) => (
        <MobileServiceCard
          key={index}
          {...service}
        />
      ))}
    </div>
  );
};

export default MobileServiceCards;