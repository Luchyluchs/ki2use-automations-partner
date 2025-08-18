import { Clock, Euro, TrendingUp, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimations";
import CalendlyButton from "./CalendlyButton";

const ValuePropositionSection = () => {
  useScrollReveal();
  
  const benefits = [
    {
      icon: Clock,
      title: "Bis zu 80% Zeitersparnis",
      description: "Bei wiederkehrenden Aufgaben wie E-Mail-Bearbeitung und Terminkoordination",
      example: "Beispiel: 20h/Woche → 4h/Woche"
    },
    {
      icon: Euro,
      title: "Schnelle Amortisation",
      description: "Durch Effizienzsteigerung amortisieren sich die Kosten in der Regel innerhalb von 3-6 Monaten",
      example: "Typisch: Vollständige Amortisation in 4-6 Monaten"
    },
    {
      icon: TrendingUp,
      title: "Skaliert mit Ihrem Wachstum",
      description: "<span className='nowrap-ki-assistant'>KI-Assistenten</span> arbeiten 24/7 ohne Kapazitätsgrenzen",
      example: "Gleiche Qualität bei 10x mehr Anfragen"
    },
    {
      icon: CheckCircle,
      title: "DSGVO-konforme Umsetzung",
      description: "Made in Germany - höchste Datenschutzstandards garantiert",
      example: "Alle Daten bleiben in Deutschland"
    }
  ];

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="scroll-reveal mb-6">
            Praktische Lösungen für Ihren Arbeitsalltag
          </h2>
          <p className="scroll-reveal stagger-delay-1 text-xl text-muted-foreground max-w-3xl mx-auto">
            Keine übertriebenen Versprechen - hier sind die realistischen Verbesserungen, 
            die unsere KI-Automatisierung in deutschen KMUs erzielt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                     <p className="text-muted-foreground mb-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: benefit.description }}>
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

        {/* Trust indicators */}
        <div className="scroll-reveal bg-card border border-card-border rounded-xl p-6 shadow-card">
          <div className="text-center">
            <h3 className="font-semibold mb-4 text-foreground">
              Transparenz von Anfang an
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Erste Beratung 100% kostenlos</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Faire Preise ohne versteckte Kosten</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Made in Germany</span>
              </div>
            </div>
            
            <div className="mt-6">
              <CalendlyButton 
                text="Unverbindlich informieren (30 Min.)"
                variant="outline"
                size="lg"
                className="border-2"
                icon={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;