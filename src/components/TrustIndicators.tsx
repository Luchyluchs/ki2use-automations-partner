import { Shield, Clock, CheckCircle, Award, Lock, Users } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      text: "100% DSGVO-konform"
    },
    {
      icon: Lock,
      text: "Keine Vertragsbindung"
    },
    {
      icon: CheckCircle,
      text: "Komplett kostenlos"
    },
    {
      icon: Users,
      text: "500+ zufriedene Kunden"
    },
    {
      icon: Award,
      text: "Deutscher KI-Anbieter"
    },
    {
      icon: Clock,
      text: "Binnen 24h Antwort"
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
      {indicators.map((indicator, index) => {
        const IconComponent = indicator.icon;
        return (
          <div key={index} className="flex items-center gap-1.5">
            <IconComponent className="w-4 h-4 text-primary" />
            <span>{indicator.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrustIndicators;