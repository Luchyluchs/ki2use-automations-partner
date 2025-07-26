import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Calendar } from "lucide-react";
import linkedinRobot from "@/assets/linkedin-robot.jpg";
import chatbotRobot from "@/assets/chatbot-robot.jpg";
import newsletterRobot from "@/assets/newsletter-robot.jpg";
import emailRobot from "@/assets/email-robot.jpg";
import voiceRobot from "@/assets/voice-robot.jpg";

const StandardAgents = () => {
  const agents = [
    {
      name: "LinkedIn Agent",
      image: linkedinRobot,
      description: "Automatisiert Netzwerkpflege, spart wertvolle Zeit bei der Akquise und stärkt Ihre Markenpräsenz professionell.",
      features: [
        "Automatisierte Kontaktanfragen",
        "Personalisierte Nachrichten",
        "Lead-Qualifizierung",
        "Netzwerk-Analytics",
        "DSGVO-konforme Umsetzung"
      ],
      benefits: [
        "Bis zu 70% Zeitersparnis beim Networking",
        "Konstante Lead-Generierung",
        "Professionelle Markenpräsenz",
        "Skalierbare Akquisestrategie"
      ],
      useCases: [
        "B2B-Akquise für Dienstleister",
        "Personalrekrutierung",
        "Partnership-Entwicklung",
        "Marktforschung und Konkurrenzanalyse"
      ]
    },
    {
      name: "Chatbot Agent",
      image: chatbotRobot,
      description: "Verbessert den Kundenservice rund um die Uhr, entlastet Ihr Team von Routineanfragen und sorgt für schnelle Antworten.",
      features: [
        "24/7 Verfügbarkeit",
        "Intelligente Antworten",
        "Mehrsprachiger Support",
        "CRM-Integration",
        "Eskalationsmanagement"
      ],
      benefits: [
        "Sofortige Kundenbetreuung",
        "50% weniger Support-Anfragen für das Team",
        "Höhere Kundenzufriedenheit",
        "Kosteneinsparungen im Support"
      ],
      useCases: [
        "Website-Support",
        "FAQ-Automatisierung",
        "Terminbuchungen",
        "Produktberatung"
      ]
    },
    {
      name: "Newsletter Agent",
      image: newsletterRobot,
      description: "Erstellt und versendet personalisierte Newsletter-Kampagnen effizient, steigert die Kundenbindung und spart Marketingressourcen.",
      features: [
        "Automatische Content-Erstellung",
        "Personalisierung",
        "A/B-Testing",
        "Analytics und Reporting",
        "DSGVO-konforme Verwaltung"
      ],
      benefits: [
        "80% Zeitersparnis bei Newsletter-Erstellung",
        "Höhere Öffnungsraten",
        "Automatisierte Kundenbindung",
        "Messbare Marketing-ROI"
      ],
      useCases: [
        "Kundennewsletter",
        "Produktankündigungen",
        "Event-Marketing",
        "Thought Leadership"
      ]
    },
    {
      name: "Email Organisator",
      image: emailRobot,
      description: "Automatisiert die E-Mail-Sortierung und Priorisierung, reduziert administrative Last und schafft Fokus für wichtigere Aufgaben.",
      features: [
        "Intelligente Kategorisierung",
        "Prioritätsbewertung",
        "Automatische Weiterleitung",
        "Spam-Filterung",
        "Follow-up Erinnerungen"
      ],
      benefits: [
        "50% weniger Zeit für E-Mail-Verwaltung",
        "Keine wichtigen E-Mails übersehen",
        "Strukturierte Kommunikation",
        "Produktivitätssteigerung"
      ],
      useCases: [
        "Kundenanfragen-Management",
        "Interne Kommunikation",
        "Support-Ticket-Routing",
        "Lead-Qualifizierung"
      ]
    },
    {
      name: "Sprachbot",
      image: voiceRobot,
      description: "Interagiert mit Kunden per Sprache, optimiert den telefonischen Support und schafft Erreichbarkeit – auch außerhalb der Geschäftszeiten.",
      features: [
        "Natürliche Spracherkennung",
        "Intelligente Gesprächsführung",
        "Terminbuchung",
        "Call-Routing",
        "Gesprächsdokumentation"
      ],
      benefits: [
        "24/7 telefonische Erreichbarkeit",
        "Professionelle Kundenbetreuung",
        "Entlastung der Mitarbeiter",
        "Höhere Kundenzufriedenheit"
      ],
      useCases: [
        "Telefonische Terminbuchungen",
        "Kundenservice-Hotline",
        "Notfall-Support",
        "Informations-Hotline"
      ]
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-subtle py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </Button>
            
            <h1 className="mb-6">
              Sofort einsetzbare{" "}
              <span className="text-primary">KI-Agenten</span> von KI2USE
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Direkter Nutzen und schnelle Amortisation für Ihr Kleinunternehmen. 
              Bewährte Lösungen, die sofort produktiv werden.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {agents.map((agent, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={agent.image}
                      alt={`${agent.name} Roboter-Illustration`}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 gradient-primary opacity-10"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="bg-card border border-card-border rounded-2xl p-8 shadow-card">
                    <h2 className="text-2xl font-semibold mb-4">{agent.name}</h2>
                    <p className="text-muted-foreground mb-6">{agent.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Hauptfunktionen:</h3>
                      <ul className="space-y-2">
                        {agent.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Konkrete Vorteile:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {agent.benefits.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="bg-accent/10 text-accent text-xs font-medium rounded-full px-3 py-1"
                          >
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-8">
                      <h3 className="font-semibold mb-3">Typische Anwendungsfälle:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {agent.useCases.map((useCase, useCaseIndex) => (
                          <div
                            key={useCaseIndex}
                            className="text-sm text-muted-foreground"
                          >
                            • {useCase}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="cta" className="w-full" asChild>
                      <Link to="/kontakt">
                        <Calendar className="w-4 h-4 mr-2" />
                        Kostenloses Beratungsgespräch vereinbaren
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
            <h3 className="text-xl font-semibold mb-4">
              Wichtiger Hinweis für KMUs
            </h3>
            <p className="leading-relaxed mb-6">
              Alle Standard-Agenten von KI2USE sind über ein persönliches, kostenloses Beratungsgespräch buchbar, 
              in dem wir die unkomplizierte, schnelle und rechtssichere Integration für Ihr KMU besprechen. 
              Die internen Prozesse von der Anfrage bis zur Implementierung werden dabei ebenfalls von n8n automatisiert, 
              was unsere Effizienz und Qualität in der Kundenbetreuung beweist.
            </p>
            <Button variant="accent" size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/kontakt">Jetzt Beratungsgespräch vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StandardAgents;