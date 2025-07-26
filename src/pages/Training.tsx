import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Calendar, Users, BookOpen, Award, Target, TrendingUp, Zap } from "lucide-react";

const Training = () => {
  const trainings = [
    {
      title: "KI-Grundlagen für KMU-Geschäftsführer",
      duration: "1 Tag (8 Stunden)",
      participants: "Max. 8 Teilnehmer",
      format: "Präsenz oder Online",
      description: "Strategische Einführung in KI-Technologien mit Fokus auf praktische Anwendungen für kleine und mittlere Unternehmen.",
      content: [
        "KI-Grundlagen verständlich erklärt",
        "ROI-Bewertung von KI-Projekten",
        "Rechtliche Aspekte und DSGVO",
        "Change Management für KI-Einführung",
        "Praxisbeispiele aus ähnlichen KMUs"
      ],
      target: ["Geschäftsführer", "Entscheidungsträger", "Strategische Planer"],
      benefits: [
        "Fundierte Entscheidungsgrundlage für KI-Investitionen",
        "Risikominimierung bei der KI-Einführung",
        "Konkrete Roadmap für Ihr Unternehmen"
      ]
    },
    {
      title: "n8n Automatisierung Workshop",
      duration: "2 Tage (16 Stunden)",
      participants: "Max. 6 Teilnehmer",
      format: "Hands-on Workshop",
      description: "Praktischer Workshop zur Erstellung eigener Automatisierungsworkflows mit n8n – vom Einsteiger zum Profi.",
      content: [
        "n8n Installation und Grundlagen",
        "Workflow-Design und Best Practices",
        "API-Integrationen und Datenverarbeitung",
        "Fehlerbehandlung und Monitoring",
        "Eigene Workflows entwickeln"
      ],
      target: ["IT-Verantwortliche", "Prozessmanager", "Administrative Mitarbeiter"],
      benefits: [
        "Selbstständige Umsetzung von Automatisierungen",
        "Sofortige Anwendung im eigenen Unternehmen",
        "Kosteneinsparungen durch interne Entwicklung"
      ]
    },
    {
      title: "KI-Tools für Marketingteams",
      duration: "1 Tag (8 Stunden)",
      participants: "Max. 10 Teilnehmer",
      format: "Interaktiver Workshop",
      description: "Praxisorientierte Schulung für Marketingteams zur effizienten Nutzung von KI-Tools im Tagesgeschäft.",
      content: [
        "Content-Erstellung mit KI",
        "Automatisierte Social Media Strategien",
        "Customer Journey Automation",
        "Personalisierung und Segmentierung",
        "Marketing Analytics mit KI"
      ],
      target: ["Marketing Manager", "Content Creator", "Social Media Manager"],
      benefits: [
        "70% Zeitersparnis bei Content-Erstellung",
        "Verbesserte Kampagnen-Performance",
        "Automatisierte Lead-Nurturing"
      ]
    },
    {
      title: "KI im Kundenservice",
      duration: "1 Tag (8 Stunden)",
      participants: "Max. 8 Teilnehmer",
      format: "Praxis-Workshop",
      description: "Wie KI-Tools den Kundenservice revolutionieren und dabei die Kundenzufriedenheit steigern.",
      content: [
        "Chatbot-Entwicklung und -Optimierung",
        "Automatisierte Ticket-Bearbeitung",
        "Sentiment-Analyse von Kundenanfragen",
        "Proaktiver Kundenservice mit KI",
        "Integration in bestehende CRM-Systeme"
      ],
      target: ["Kundenservice-Teams", "Support-Manager", "CRM-Verantwortliche"],
      benefits: [
        "50% schnellere Bearbeitung von Anfragen",
        "24/7 Verfügbarkeit ohne Mehrkosten",
        "Höhere Kundenzufriedenheit"
      ]
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Praxisnahes Lernen",
      description: "Sofort anwendbares Wissen mit konkreten Beispielen aus Ihrer Branche."
    },
    {
      icon: Users,
      title: "Kleine Gruppen",
      description: "Maximaler Lernerfolg durch persönliche Betreuung in kleinen Gruppen."
    },
    {
      icon: Award,
      title: "Zertifizierung",
      description: "Offizielle Teilnahmezertifikate für alle absolvierten Schulungen."
    },
    {
      icon: Target,
      title: "KMU-Fokus",
      description: "Speziell für kleinere Betriebsstrukturen entwickelte Inhalte und Methoden."
    },
    {
      icon: TrendingUp,
      title: "Messbare Erfolge",
      description: "Konkrete KPIs und ROI-Messungen für alle vermittelten Techniken."
    },
    {
      icon: Zap,
      title: "Live-Beispiele",
      description: "Praktische Demonstrationen unserer eigenen n8n-Automatisierungen."
    }
  ];

  const targetGroups = [
    {
      role: "Geschäftsführer",
      description: "Strategische KI-Einführung und ROI-Bewertung",
      benefit: "Fundierte Entscheidungsgrundlagen für KI-Investitionen"
    },
    {
      role: "Marketing-Teams",
      description: "Automatisierung von Kampagnen und Content-Erstellung",
      benefit: "Bis zu 70% Zeitersparnis bei gleichzeitig besseren Ergebnissen"
    },
    {
      role: "Administrative Mitarbeiter",
      description: "Prozessautomatisierung und Workflow-Optimierung",
      benefit: "Weniger Routineaufgaben, mehr Zeit für wichtige Tätigkeiten"
    },
    {
      role: "IT-Verantwortliche",
      description: "Technische Implementierung und System-Integration",
      benefit: "Selbstständige Umsetzung ohne externe Dienstleister"
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
              KI-Wissen für Ihr Team:{" "}
              <span className="text-primary">Praktische Schulungen</span> von KI2USE
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in-element">
              Zukunftssicher und praxisnah – für KMU entwickelte Schulungen, 
              die Ihr Team befähigen, KI selbst zu nutzen und Effizienz zu steigern.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-semibold mb-6">
                  Praktisches KI-Wissen, das wirkt
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Unsere KI-Schulungen vermitteln praxisnahes, sofort anwendbares Wissen und 
                  konkrete Fähigkeiten, die KMUs befähigen, KI selbst zu nutzen und ihre 
                  Effizienz nachhaltig zu steigern.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In unseren Schulungen zeigen wir auch praktische Beispiele, wie wir n8n 
                  intern zur Effizienzsteigerung einsetzen und vermitteln Best Practices, 
                  die speziell für kleinere Betriebsstrukturen relevant und umsetzbar sind.
                </p>
              </div>
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground hover-scale">
                <h3 className="font-semibold mb-4">Ihre Investition in die Zukunft</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Durchschnittliche ROI:</span>
                    <span className="font-bold">300%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Amortisation:</span>
                    <span className="font-bold">3-6 Monate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Effizienzsteigerung:</span>
                    <span className="font-bold">40-70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-element">
            <h2 className="mb-6 scale-in-element">
              Unsere{" "}
              <span className="text-primary">Schulungsprogramme</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-element">
              Speziell für deutsche KMUs entwickelte Schulungsmodule mit direktem 
              Praxisbezug und sofortiger Anwendbarkeit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainings.map((training, index) => (
              <div
                key={index}
                className="bg-card border border-card-border rounded-2xl p-8 shadow-card hover-lift cursor-pointer"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">{training.title}</h3>
                  <p className="text-muted-foreground mb-4">{training.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-medium text-accent">{training.duration}</div>
                      <div className="text-xs text-muted-foreground">Dauer</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-accent">{training.participants}</div>
                      <div className="text-xs text-muted-foreground">Teilnehmer</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-accent">{training.format}</div>
                      <div className="text-xs text-muted-foreground">Format</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Inhalte:</h4>
                  <ul className="space-y-2">
                    {training.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Zielgruppe:</h4>
                  <div className="flex flex-wrap gap-2">
                    {training.target.map((target, targetIndex) => (
                      <span
                        key={targetIndex}
                        className="bg-primary/10 text-primary text-xs font-medium rounded-full px-3 py-1"
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Ihre Vorteile:</h4>
                  <ul className="space-y-1">
                    {training.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-muted-foreground">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="cta" className="w-full hover-scale transition-all duration-200" asChild>
                  <Link to="/kontakt">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schulung buchen
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-element">
            <h2 className="mb-6 scale-in-element">
              Warum KI2USE{" "}
              <span className="text-primary">Schulungen</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift cursor-pointer text-center"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 hover-scale">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-element">
            <h2 className="mb-6 scale-in-element">
              Wer profitiert von unseren{" "}
              <span className="text-primary">Schulungen</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-element">
              Betonung auf den direkten Mehrwert für verschiedene Rollen in deutschen KMUs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetGroups.map((group, index) => (
              <div
                key={index}
                className="bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 hover-scale">
                    <Users className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{group.role}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{group.description}</p>
                    <div className="bg-accent/10 text-accent text-xs font-medium rounded-full px-3 py-1 inline-block">
                      {group.benefit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="mb-6">
              Bereit für zukunftssicheres KI-Wissen?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Vereinbaren Sie jetzt Ihr kostenloses Beratungsgespräch für individuelle 
              Schulungskonzepte, die perfekt zu Ihrem Team und Ihren Zielen passen.
            </p>

            <Button variant="accent" size="xl" asChild className="bg-white text-primary hover:bg-white/90 hover-scale">
              <Link to="/kontakt">
                <Calendar className="w-5 h-5 mr-2" />
                Kostenloses Beratungsgespräch für Schulungen
              </Link>
            </Button>

            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover-scale">
              <p className="text-sm leading-relaxed opacity-90">
                <strong>Praxis von Anfang an:</strong> Bereits bei der Schulungsplanung erleben Sie 
                unsere n8n-gestützten Prozesse in Aktion – von der Bedarfsanalyse bis zur 
                individuellen Lernpfad-Erstellung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Training;