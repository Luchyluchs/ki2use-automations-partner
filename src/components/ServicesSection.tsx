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
  return <section className="section-padding bg-background relative overflow-hidden py-24">      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="mb-20">
          <h2 className="scroll-reveal mb-6 text-4xl lg:text-5xl font-thin text-foreground">
            Unsere Kernkompetenzen
          </h2>
          <p className="scroll-reveal stagger-delay-1 text-xl text-muted-foreground max-w-2xl font-light">
            Drei speziell entwickelte Bereiche, die Ihr Unternehmen effizienter 
            und zukunftssicherer machen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-0">
          {/* Desktop: Modern minimal cards */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-0 lg:col-span-3">
            {services.map((service, index) => {
            const IconComponent = service.icon;
            return <div key={index} className={`scroll-scale stagger-delay-${index + 1} group bg-card/30 border-r border-card-border/50 last:border-r-0 p-10 transition-all duration-500 hover:bg-card/50`}>
                  <div className="mb-8">
                    <IconComponent className="w-8 h-8 text-primary mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={1.5} />
                    <h3 className="text-2xl font-light mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-base font-light leading-relaxed">{service.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start">
                        <span className="text-primary mr-3 text-xl font-light">—</span>
                        <span className="text-sm text-muted-foreground font-light">{feature}</span>
                      </li>)}
                  </ul>

                  <Link to={service.link} className="inline-flex items-center text-sm font-light text-primary hover:text-primary-hover transition-colors duration-300 group-hover:translate-x-1 transition-transform">
                    {service.cta} <span className="ml-2">→</span>
                  </Link>
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