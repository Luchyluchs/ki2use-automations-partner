import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Calendar } from "lucide-react";
import linkedinWorkflow from "@/assets/linkedin-workflow.jpg";
import chatbotWorkflow from "@/assets/chatbot-workflow.jpg";
import newsletterWorkflow from "@/assets/newsletter-workflow.jpg";
import emailWorkflow from "@/assets/email-workflow.jpg";
import voiceWorkflow from "@/assets/voice-workflow.jpg";
import applicationWorkflow from "@/assets/application-workflow.jpg";

const StandardAgents = () => {
  const agents = [
    {
      name: "LinkedIn Agent",
      image: linkedinWorkflow,
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
      image: chatbotWorkflow,
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
      image: newsletterWorkflow,
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
      image: emailWorkflow,
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
      image: voiceWorkflow,
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
    },
    {
      name: "Bewerbungsagent",
      image: applicationWorkflow,
      description: "Filtert und bewertet Bewerbungen automatisch, identifiziert die besten Kandidaten und beschleunigt den Recruiting-Prozess erheblich.",
      features: [
        "Automatisches CV-Screening",
        "Intelligentes Scoring",
        "Skill-Matching",
        "Bias-freie Bewertung",
        "Integration in HR-Systeme"
      ],
      benefits: [
        "90% Zeitersparnis beim Bewerbungsscreening",
        "Objektive Kandidatenbewertung",
        "Schnellere Time-to-Hire",
        "Bessere Kandidatenqualität"
      ],
      useCases: [
        "Massenbewerbungen filtern",
        "Fachkräfte-Recruiting",
        "Praktikanten-Auswahl",
        "Freelancer-Bewertung"
      ]
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-subtle py-16">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in-element">
            <Button variant="ghost" size="sm" asChild className="mb-8 hover-scale">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </Button>
            
            <h1 className="mb-6 scale-in-element">
              Sofort einsetzbare{" "}
              <span className="text-primary">KI-Agenten</span> von KI2USE
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in-element">
              Direkter Nutzen und schnelle Amortisation für Ihr Kleinunternehmen. 
              Bewährte Lösungen, die sofort produktiv werden.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="bg-card border border-card-border rounded-xl p-4 shadow-card hover-lift cursor-pointer"
              >
                {/* Image */}
                <div className="relative rounded-lg overflow-hidden mb-4 hover-scale">
                  <img
                    src={agent.image}
                    alt={`${agent.name} Workflow-Interface`}
                    className="w-full h-32 object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 gradient-primary opacity-10 hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-lg font-semibold mb-2">{agent.name}</h2>
                  <p className="text-muted-foreground mb-3 text-sm">{agent.description}</p>

                  {/* Features */}
                  <div className="mb-3">
                    <h3 className="font-semibold mb-2 text-sm">Hauptfunktionen:</h3>
                    <ul className="space-y-1">
                      {agent.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-accent mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-sm">Vorteile:</h3>
                    <div className="space-y-1">
                      {agent.benefits.slice(0, 1).map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="bg-accent/10 text-accent text-xs font-medium rounded-full px-2 py-1"
                        >
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="cta" size="sm" className="w-full hover-scale transition-all duration-200" asChild>
                    <Link to="/kontakt">
                      <Calendar className="w-3 h-3 mr-2" />
                      Kostenloser Beratungstermin
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="section-padding bg-muted">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground hover-scale">
            <h3 className="text-xl font-semibold mb-4 fade-in-element">
              Wichtiger Hinweis für KMUs
            </h3>
            <p className="leading-relaxed mb-6 fade-in-element">
              Alle Standard-Agenten von KI2USE sind über ein persönliches, kostenloses Beratungsgespräch buchbar, 
              in dem wir die unkomplizierte, schnelle und rechtssichere Integration für Ihr KMU besprechen. 
              Die internen Prozesse von der Anfrage bis zur Implementierung werden dabei ebenfalls von n8n automatisiert, 
              was unsere Effizienz und Qualität in der Kundenbetreuung beweist.
            </p>
            <Button variant="accent" size="lg" asChild className="bg-white text-primary hover:bg-white/90 hover-scale">
              <Link to="/kontakt">Jetzt Beratungsgespräch vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StandardAgents;