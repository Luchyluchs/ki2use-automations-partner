import { Clock, Euro, BarChart3, Zap, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimations";
import MobileBenefitsCards from "./MobileBenefitsCards";

const KIBenefitsSection = () => {
  useScrollReveal();
  
  const benefits = [
    {
      icon: Clock,
      title: "Zeit sparen",
      description: "Repetitive Aufgaben automatisieren, damit sich Ihre Mitarbeiter auf das Wesentliche konzentrieren.",
      example: "Weniger Verwaltung, mehr wertschöpfende Arbeit"
    },
    {
      icon: Euro,
      title: "Kosten senken",
      description: "Prozesse effizienter gestalten und Ressourcen optimal nutzen.",
      example: "Förderprogramme können bis zu 50% der Kosten decken"
    },
    {
      icon: BarChart3,
      title: "Bessere Entscheidungen",
      description: "Datenbasierte Einblicke, die vorher verborgen waren.",
      example: "Faktenbasiert statt Bauchgefühl"
    },
    {
      icon: Zap,
      title: "Wettbewerbsfähig bleiben",
      description: "Während andere noch zögern, starten Sie durch.",
      example: "Frühzeitig die Vorteile von KI nutzen"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 lg:mb-12 scroll-reveal">
          <h2 className="text-3xl lg:text-4xl font-thin text-foreground mb-4 lg:mb-6 leading-tight">
            Warum jetzt? <span className="text-primary">Warum Sie?</span>
          </h2>
          <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            KI ist kein Zukunftsthema mehr – sie ist heute schon da. 
            Und gerade der Mittelstand kann mit überschaubarem Aufwand enorm profitieren.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className={`scroll-scale stagger-delay-${(index % 2) + 1} border border-card-border/30 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-light text-xl mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-2 leading-relaxed font-light">{benefit.description}</p>
                    <p className="text-sm text-primary font-light">{benefit.example}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="lg:hidden mb-8">
          <MobileBenefitsCards />
        </div>

        <div className="text-center scroll-reveal stagger-delay-3">
          <p className="text-sm text-muted-foreground font-light">
            Neugierig geworden? Schauen Sie sich die Leistungen von KI2USE an →
          </p>
        </div>
      </div>
    </section>
  );
};

export default KIBenefitsSection;
