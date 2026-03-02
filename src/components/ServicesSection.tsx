import { Link } from "react-router-dom";
import { Search, Bot, Euro, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Beratung",
    description: "Strategie, Konzeption & ROI für Ihre KI-Projekte. Persönlich, verständlich und mit Blick auf Fördermöglichkeiten.",
    link: "/beratung",
    cta: "Mehr erfahren",
  },
  {
    icon: Bot,
    title: "KI-Agenten",
    description: "Maßgeschneiderte KI-Agenten für Ihren Workflow – von Chatbots über E-Mail-Automatisierung bis Voice-Assistenten.",
    link: "/standard-agenten",
    cta: "Agenten entdecken",
  },
  {
    icon: Euro,
    title: "Förderung",
    description: "Staatliche Zuschüsse auf Ihre KI-Investition. KI2USE zeigt passende Förderprogramme auf und vermittelt an Experten.",
    link: "/foerderung",
    cta: "Förderung prüfen",
  },
];

const ServicesSection = () => {
  return (
    <section id="leistungen" className="section-padding relative overflow-hidden py-6 sm:py-10 lg:py-16 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-10 sm:mb-14 lg:mb-20 scroll-reveal">
          <h2 className="mb-6 text-4xl lg:text-5xl font-thin text-foreground">
            Was KI2USE für Sie tut
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            Von der ersten Idee bis zur fertigen Lösung – drei Wege, wie KI2USE Ihnen hilft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className={`group bg-card/30 border-b md:border-b-0 md:border-r border-card-border/50 last:border-r-0 last:border-b-0 p-8 md:p-10 transition-all duration-500 hover:bg-card/50 block`}
              >
                <IconComponent className="w-8 h-8 text-primary mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-base font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-light text-primary group-hover:translate-x-1 transition-transform duration-300">
                  {service.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
