import { CheckCircle, Users, TrendingUp, Shield, Zap, HeartHandshake } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

const WhyChooseUs = () => {
  useScrollReveal();
  const advantages = [{
    icon: CheckCircle,
    title: "Praxiserprobte Lösungen",
    description: "Kosteneffiziente Lösungen speziell für den Mittelstand entwickelt und getestet."
  }, {
    icon: Users,
    title: "Umfassendes Know-how",
    description: "Praktische Erfahrung aus verschiedensten Projekten und bewährten Automatisierungsstrategien."
  }, {
    icon: HeartHandshake,
    title: "Persönliche Betreuung",
    description: "Unkomplizierte und zuverlässige Kundenbetreuung – direkt und verständlich."
  }, {
    icon: TrendingUp,
    title: "Skalierbar mit Ihrem Wachstum",
    description: "Investitionssicherheit durch Lösungen, die mit Ihrem Unternehmen mitwachsen."
  }, {
    icon: Shield,
    title: "Rechtssicherheit",
    description: "DSGVO-konforme Implementierung und volle Compliance für deutsche Unternehmen."
  }, {
    icon: Zap,
    title: "Wir leben, was wir lehren",
    description: "Unsere Prozesse sind selbst automatisiert – für maximale Effizienz und Zuverlässigkeit in unserer Zusammenarbeit mit Ihnen."
  }];
  return <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <h2 className="scroll-reveal mb-6">
            Warum <span className="text-primary">KI2USE</span> für Ihr Unternehmen?
          </h2>
          <p className="scroll-reveal stagger-delay-1 text-xl text-muted-foreground max-w-3xl mx-auto">Unsere Alleinstellungsmerkmale machen uns zum idealen Partner für deutsche Klein- und Mittelunternehmen auf dem Weg zur KI-Automatisierung.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((advantage, index) => {
          const IconComponent = advantage.icon;
          return <div key={index} className={`scroll-scale stagger-delay-${(index % 3) + 1} group bg-card border border-card-border rounded-xl p-4 shadow-card hover-lift cursor-pointer transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <IconComponent className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>;
        })}
        </div>

        
      </div>
    </section>;
};
export default WhyChooseUs;