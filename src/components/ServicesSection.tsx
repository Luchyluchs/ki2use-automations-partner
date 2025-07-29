import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Bot, Zap, GraduationCap, Globe } from "lucide-react";
const ServicesSection = () => {
  const services = [{
    icon: Bot,
    title: "Standard-KI-Agenten",
    description: "Effizienz und Wachstum für Ihr Unternehmen mit sofort einsetzbaren Lösungen von KI2USE.",
    features: ["LinkedIn Agent für Netzwerkpflege", "Chatbot für 24/7 Kundenservice", "Newsletter-Automatisierung", "E-Mail-Organisation", "Sprachbot für Telefonsupport"],
    link: "/standard-agenten",
    cta: "Standard-Agenten entdecken"
  }, {
    icon: Zap,
    title: "Maßgeschneiderte KI-Agenten",
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
  }, {
    icon: Globe,
    title: "Professionelle Homepage mit KI",
    description: "Moderne, responsive Websites mit integrierten KI-Automatisierungen für maximale Effizienz – ab 5.000€.",
    features: ["Responsive Design für alle Geräte", "SEO-optimierte Struktur", "KI-Chatbot Integration", "Automatisierte Lead-Generierung", "Content Management System", "Analytics & Conversion-Tracking"],
    link: "/homepage-erstellung",
    cta: "Website-Angebot erhalten"
  }];
  return <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-element">
          <h2 className="mb-6 scale-in-element">
            Unsere Kernkompetenzen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-element">
            Vier speziell entwickelte Bereiche, die Ihr Unternehmen effizienter 
            und zukunftssicherer machen – mit bewährten Automatisierungslösungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <div key={index} className="bg-card border border-card-border rounded-2xl p-8 shadow-card hover-lift cursor-pointer">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 hover-scale">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>)}
                </ul>

                <Button variant="outline" className="w-full hover-scale transition-all duration-200" asChild>
                  <Link to={service.link}>{service.cta}</Link>
                </Button>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default ServicesSection;