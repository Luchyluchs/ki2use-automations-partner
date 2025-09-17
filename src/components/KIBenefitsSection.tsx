import { Clock, Euro, TrendingUp, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimations";
import MobileBenefitsCards from "./MobileBenefitsCards";

const KIBenefitsSection = () => {
  useScrollReveal();
  
  const benefits = [
    {
      icon: Clock,
      title: "Bis zu 80% Zeitersparnis",
      description: "24/7 verfügbar ohne Pausen, Krankheitstage oder Urlaub",
      example: "Beispiel: 20h/Woche → 4h/Woche bei E-Mails und Terminen"
    },
    {
      icon: Euro,
      title: "Bis zu 60% Kostenersparnis",
      description: "Ein KI-Assistent kostet weniger als ein Teilzeit-Mitarbeiter",
      example: "Amortisation typisch innerhalb von 4-6 Monaten"
    },
    {
      icon: TrendingUp,
      title: "Unbegrenzte Skalierung",
      description: "Gleiche Qualität bei 10x mehr Anfragen - ohne Kapazitätsgrenzen",
      example: "Wächst automatisch mit Ihrem Unternehmen mit"
    },
    {
      icon: CheckCircle,
      title: "DSGVO-konforme Umsetzung",
      description: "Made in Germany - höchste Datenschutzstandards garantiert",
      example: "Alle Daten bleiben in Deutschland"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 lg:mb-12 scroll-reveal">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            Einfach erklärt
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6 leading-tight">
            <span className="nowrap-ki-assistant">KI-Assistenten</span> = <span className="text-primary">Digitale Mitarbeiter</span><br/>
            für Ihren Arbeitsalltag
          </h2>
          <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stellen Sie sich vor: Ein digitaler Assistent, der nie müde wird, nie Fehler macht und rund um die Uhr für Sie arbeitet.
            Hier sind die realistischen Verbesserungen, die unsere KI-Automatisierung in deutschen KMUs erzielt.
          </p>
        </div>

        {/* Desktop: Original cards */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className={`scroll-scale stagger-delay-${(index % 2) + 1} bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground mb-2 leading-relaxed">
                      {benefit.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {benefit.example}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Compact benefit cards */}
        <div className="lg:hidden mb-8">
          <MobileBenefitsCards />
        </div>

        <div className="text-center scroll-reveal stagger-delay-3">
          <div className="inline-flex items-center justify-center space-x-2 text-base lg:text-lg text-muted-foreground bg-muted/50 rounded-full px-4 lg:px-6 py-2 lg:py-3 backdrop-blur-sm">
            <span>Neugierig geworden?</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Schauen Sie sich unsere Lösungen an</p>
        </div>
      </div>
    </section>
  );
};

export default KIBenefitsSection;