import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Bot, Zap, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimations";
import EnhancedButton from "./EnhancedButton";
import { GradientText } from "./TextRevealAnimation";
import MobileServiceCards from "./MobileServiceCards";

const ServicesSection = () => {
  useScrollReveal();
  const services = [{
    icon: Bot,
    title: "Standard-KI-Assistenten",
    description: "Effizienz und Wachstum für Ihr Unternehmen mit sofort einsetzbaren Lösungen von KI2USE.",
    features: ["LinkedIn Agent für Netzwerkpflege", "Chatbot für 24/7 Kundenservice", "Newsletter-Automatisierung", "E-Mail-Organisation", "Sprachbot für Telefonsupport"],
    link: "/standard-agenten",
    cta: "Standard-Assistenten entdecken"
  }, {
    icon: Zap,
    title: "Maßgeschneiderte KI-Assistenten",
    description: "Individuelle Automatisierung, die sich präzise Ihren Geschäftsprozessen anpasst.",
    features: ["Individuelle Bedarfsanalyse", "Maßgeschneiderte Entwicklung", "Nahtlose Integration", "Skalierbare Lösungen", "Persönlicher Support"],
    link: "/massgeschneiderte-agenten",
    cta: "Individuelle Lösung anfragen"
  }, {
    icon: GraduationCap,
    title: "KI-Schulungen & Beratung",
    description: "Praktisches KI-Wissen, das Ihr Team sofort anwenden kann – spezifisch für den Mittelstand.",
    features: ["Grundlagen der KI für Unternehmen", "Automatisierungsstrategien", "Workflow-Design", "Implementierungsberatung", "Langfristige Begleitung"],
    link: "/ki-schulungen",
    cta: "Schulungen buchen"
  }];
  return <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="scroll-reveal mb-4 lg:mb-6 text-2xl sm:text-3xl lg:text-5xl font-bold">
            Unsere Kernkompetenzen
          </h2>
            <p className="scroll-reveal stagger-delay-1 text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Drei speziell entwickelte Bereiche, die Ihr Unternehmen effizienter 
              und zukunftssicherer machen – mit bewährten Automatisierungslösungen.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Desktop: Original cards, Mobile: Hidden */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:col-span-3">
            {services.map((service, index) => {
            const IconComponent = service.icon;
            return <div key={index} className={`scroll-scale stagger-delay-${index + 1} bg-card border border-card-border rounded-2xl p-6 shadow-card hover-lift cursor-pointer transform hover:scale-105 transition-all duration-500`}>
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 hover-scale">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-base">{service.description}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>

                  <Button variant="outline" className="w-full hover-scale transition-all duration-200 min-h-11" asChild>
                    <Link to={service.link}>{service.cta}</Link>
                  </Button>
                </div>;
          })}
          </div>
          
          {/* Mobile: Compact service cards */}
          <div className="lg:hidden col-span-1">
            <MobileServiceCards />
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;