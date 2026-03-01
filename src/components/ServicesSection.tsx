import { Link } from "react-router-dom";
import { Search, Rocket, BadgeEuro } from "lucide-react";
import MobileServiceCards from "./MobileServiceCards";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "KI-Beratung",
      description: "Wir finden heraus, wo KI in Ihrem Unternehmen echten Mehrwert bringt – von der Prozessoptimierung bis zur Umsetzung.",
      features: [
        "Analyse Ihrer bestehenden Prozesse",
        "Identifikation von Automatisierungspotenzial",
        "Machbarkeits- und Kosten-Nutzen-Bewertung",
        "Konkrete Handlungsempfehlungen",
        "Unverbindliches Erstgespräch"
      ],
      link: "/kontakt",
      cta: "Beratung anfragen"
    },
    {
      icon: Rocket,
      title: "Umsetzung",
      description: "Von der Konzeption bis zum Rollout: Wir begleiten Sie bei der Implementierung konkreter KI-Lösungen.",
      features: [
        "Individuelle Konzeption",
        "Auswahl der passenden Tools",
        "Schrittweise Implementierung",
        "Schulung Ihres Teams",
        "Nachhaltige Betreuung"
      ],
      link: "/kontakt",
      cta: "Projekt besprechen"
    },
    {
      icon: BadgeEuro,
      title: "Förderung",
      description: "Wir prüfen, welche staatlichen Förderprogramme (Digital Jetzt, ZIM und mehr) für Sie in Frage kommen – und unterstützen bei der Antragstellung.",
      features: [
        "Fördermittel-Check für Ihr Unternehmen",
        "Digital Jetzt (bis 50% Zuschuss)",
        "ZIM-Förderung prüfen",
        "Unterstützung bei der Antragstellung",
        "Maximale Fördersumme sichern"
      ],
      link: "/kontakt",
      cta: "Förderung prüfen"
    }
  ];

  return (
    <section id="leistungen" className="section-padding relative overflow-hidden py-6 sm:py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-10 sm:mb-14 lg:mb-20 scroll-reveal">
          <h2 className="mb-6 text-4xl lg:text-5xl font-thin text-foreground">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            Von der ersten Idee bis zur fertigen Lösung – wir begleiten Sie auf dem Weg zur KI-Nutzung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-0">
          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-0 lg:col-span-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`scroll-scale stagger-delay-${index + 1} group bg-card/30 border-r border-card-border/50 last:border-r-0 p-10 transition-all duration-500 hover:bg-card/50`}>
                  <div className="mb-8">
                    <IconComponent className="w-8 h-8 text-primary mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={1.5} />
                    <h3 className="text-2xl font-light mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-base font-light leading-relaxed">{service.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-primary mr-3 text-xl font-light">—</span>
                        <span className="text-sm text-muted-foreground font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={service.link} className="inline-flex items-center text-sm font-light text-primary hover:text-primary-hover transition-colors duration-300 group-hover:translate-x-1 transition-transform">
                    {service.cta} <span className="ml-2">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
          
          {/* Mobile */}
          <div className="lg:hidden col-span-1">
            <MobileServiceCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
