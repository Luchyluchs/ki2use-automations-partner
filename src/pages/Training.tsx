import { useScrollReveal, useParallax, useScrollFade, useMagneticCursor } from "@/hooks/useScrollAnimations";
import { useSEO, SEOTemplates } from "@/hooks/useSEO";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Calendar, Users, BookOpen, Award, Target, TrendingUp, Zap } from "lucide-react";

const Training = () => {
  useScrollReveal();
  useParallax();
  useScrollFade();
  useMagneticCursor();
  useSEO(SEOTemplates.training);

  const trainings = [
    {
      title: "KI-Grundlagen für KMU-Geschäftsführer",
      duration: "1 Tag (8 Stunden)",
      participants: "Max. 8 Teilnehmer",
      format: "Präsenz oder Online",
      description: "Strategische Einführung in KI-Technologien mit Fokus auf praktische Anwendungen für kleine und mittlere Unternehmen.",
      content: ["KI-Grundlagen verständlich erklärt", "Agenten-Bewertung von KI-Projekten", "Rechtliche Aspekte und DSGVO", "Change Management für KI-Einführung", "Praxisbeispiele aus ähnlichen KMUs"],
      target: ["Geschäftsführer", "Entscheidungsträger", "Strategische Planer"],
      benefits: ["Fundierte Entscheidungsgrundlage für KI-Investitionen", "Risikominimierung bei der KI-Einführung", "Konkrete Roadmap für Ihr Unternehmen"]
    },
    {
      title: "Workflow-Automatisierung Workshop",
      duration: "2 Tage (16 Stunden)",
      participants: "Max. 6 Teilnehmer",
      format: "Hands-on Workshop",
      description: "Praktischer Workshop zur Erstellung eigener Automatisierungsworkflows – vom Einsteiger zum Profi.",
      content: ["Automatisierungs-Tools Installation und Grundlagen", "Workflow-Design und Best Practices", "API-Integrationen und Datenverarbeitung", "Fehlerbehandlung und Monitoring", "Eigene Workflows entwickeln"],
      target: ["IT-Verantwortliche", "Prozessmanager", "Administrative Mitarbeiter"],
      benefits: ["Selbstständige Umsetzung von Automatisierungen", "Sofortige Anwendung im eigenen Unternehmen", "Kosteneinsparungen durch interne Entwicklung"]
    },
    {
      title: "KI-Tools für Marketingteams",
      duration: "1 Tag (8 Stunden)",
      participants: "Max. 10 Teilnehmer",
      format: "Interaktiver Workshop",
      description: "Praxisorientierte Schulung für Marketingteams zur effizienten Nutzung von KI-Tools im Tagesgeschäft.",
      content: ["Content-Erstellung mit KI", "Automatisierte Social Media Strategien", "Customer Journey Automation", "Personalisierung und Segmentierung", "Marketing Analytics mit KI"],
      target: ["Marketing Manager", "Content Creator", "Social Media Manager"],
      benefits: ["70% Zeitersparnis bei Content-Erstellung", "Verbesserte Kampagnen-Performance", "Automatisierte Lead-Nurturing"]
    },
    {
      title: "KI im Kundenservice",
      duration: "1 Tag (8 Stunden)",
      participants: "Max. 8 Teilnehmer",
      format: "Praxis-Workshop",
      description: "Wie KI-Tools den Kundenservice revolutionieren und dabei die Kundenzufriedenheit steigern.",
      content: ["Chatbot-Entwicklung und -Optimierung", "Automatisierte Ticket-Bearbeitung", "Sentiment-Analyse von Kundenanfragen", "Proaktiver Kundenservice mit KI", "Integration in bestehende CRM-Systeme"],
      target: ["Kundenservice-Teams", "Support-Manager", "CRM-Verantwortliche"],
      benefits: ["50% schnellere Bearbeitung von Anfragen", "24/7 Verfügbarkeit ohne Mehrkosten", "Höhere Kundenzufriedenheit"]
    }
  ];

  const benefits = [
    { icon: BookOpen, title: "Praxisnahes Lernen", description: "Sofort anwendbares Wissen mit konkreten Beispielen aus Ihrer Branche." },
    { icon: Users, title: "Kleine Gruppen", description: "Maximaler Lernerfolg durch persönliche Betreuung in kleinen Gruppen." },
    { icon: Award, title: "Zertifizierung", description: "Offizielle Teilnahmezertifikate für alle absolvierten Schulungen." },
    { icon: Target, title: "KMU-Fokus", description: "Speziell für kleinere Betriebsstrukturen entwickelte Inhalte und Methoden." },
    { icon: TrendingUp, title: "Messbare Erfolge", description: "Konkrete KPIs und Agenten-Messungen für alle vermittelten Techniken." },
    { icon: Zap, title: "Live-Beispiele", description: "Praktische Demonstrationen unserer eigenen Automatisierungen." }
  ];

  const targetGroups = [
    { role: "Geschäftsführer", description: "Strategische KI-Einführung und Agenten-Bewertung", benefit: "Fundierte Entscheidungsgrundlagen für KI-Investitionen" },
    { role: "Marketing-Teams", description: "Automatisierung von Kampagnen und Content-Erstellung", benefit: "Bis zu 70% Zeitersparnis bei gleichzeitig besseren Ergebnissen" },
    { role: "Administrative Mitarbeiter", description: "Prozessautomatisierung und Workflow-Optimierung", benefit: "Weniger Routineaufgaben, mehr Zeit für wichtige Tätigkeiten" },
    { role: "IT-Verantwortliche", description: "Technische Implementierung und System-Integration", benefit: "Selbstständige Umsetzung ohne externe Dienstleister" }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-hero pt-6 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </Button>
            
            <h1 className="mb-6 font-thin tracking-tight">
              KI-Wissen für Ihr Team:{" "}
              <span className="text-primary font-light">Praktische Schulungen</span> von KI2USE
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Zukunftssicher und praxisnah – für KMU entwickelte Schulungen, 
              die Ihr Team befähigen, KI selbst zu nutzen und Effizienz zu steigern.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="scroll-reveal">
                <h2 className="text-3xl font-thin mb-6 tracking-tight">
                  Praktisches KI-Wissen, das wirkt
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                  Unsere KI-Schulungen vermitteln praxisnahes, sofort anwendbares Wissen und 
                  konkrete Fähigkeiten, die KMUs befähigen, KI selbst zu nutzen und ihre 
                  Effizienz nachhaltig zu steigern.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  In unseren Schulungen zeigen wir auch praktische Beispiele, wie wir Automatisierung 
                  intern zur Effizienzsteigerung einsetzen und vermitteln Best Practices, 
                  die speziell für kleinere Betriebsstrukturen relevant und umsetzbar sind.
                </p>
              </div>
              <div className="border border-card-border/30 rounded-2xl p-8 scroll-reveal">
                <h3 className="font-light mb-4">Ihre Investition in die Zukunft</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-card-border/20 pb-3">
                    <span className="text-muted-foreground font-light">Durchschnittliche Agenten:</span>
                    <span className="font-light text-primary">300%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-card-border/20 pb-3">
                    <span className="text-muted-foreground font-light">Amortisation:</span>
                    <span className="font-light text-primary">3-6 Monate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-light">Effizienzsteigerung:</span>
                    <span className="font-light text-primary">40-70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="mb-6 font-thin tracking-tight">
              Unsere{" "}
              <span className="text-primary font-light">Schulungsprogramme</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Speziell für deutsche KMUs entwickelte Schulungsmodule mit direktem 
              Praxisbezug und sofortiger Anwendbarkeit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainings.map((training, index) => (
              <div
                key={index}
                className="border border-card-border/30 rounded-2xl p-8 scroll-reveal hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-light mb-3">{training.title}</h3>
                  <p className="text-muted-foreground mb-4 font-light">{training.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-light text-primary">{training.duration}</div>
                      <div className="text-xs text-muted-foreground font-light">Dauer</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-light text-primary">{training.participants}</div>
                      <div className="text-xs text-muted-foreground font-light">Teilnehmer</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-light text-primary">{training.format}</div>
                      <div className="text-xs text-muted-foreground font-light">Format</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-light mb-3">Inhalte:</h4>
                  <ul className="space-y-2">
                    {training.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-light mb-3">Zielgruppe:</h4>
                  <div className="flex flex-wrap gap-2">
                    {training.target.map((target, targetIndex) => (
                      <span
                        key={targetIndex}
                        className="border border-primary/30 text-primary text-xs font-light rounded-full px-3 py-1"
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-light mb-3">Ihre Vorteile:</h4>
                  <ul className="space-y-1">
                    {training.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-muted-foreground font-light">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="cta" className="w-full transition-all duration-200" asChild>
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
      <section className="section-padding bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="mb-6 font-thin tracking-tight">
              Warum KI2USE{" "}
              <span className="text-primary font-light">Schulungen</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="border border-card-border/30 rounded-xl p-6 text-center scroll-reveal hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-light mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm font-light">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="section-padding bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="mb-6 font-thin tracking-tight">
              Wer profitiert von unseren{" "}
              <span className="text-primary font-light">Schulungen</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Betonung auf den direkten Mehrwert für verschiedene Rollen in deutschen KMUs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetGroups.map((group, index) => (
              <div
                key={index}
                className="border border-card-border/30 rounded-xl p-6 scroll-reveal hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-light mb-2">{group.role}</h3>
                    <p className="text-muted-foreground text-sm mb-3 font-light">{group.description}</p>
                    <div className="bg-accent/10 text-accent text-xs font-light rounded-full px-3 py-1 inline-block">
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
      <section className="section-padding bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <div className="border-t border-card-border/20 pt-12">
              <h2 className="mb-6 font-thin tracking-tight">
                Bereit für zukunftssicheres KI-Wissen?
              </h2>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed font-light">
                Vereinbaren Sie jetzt Ihr kostenloses Beratungsgespräch für individuelle 
                Schulungskonzepte, die perfekt zu Ihrem Team und Ihren Zielen passen.
              </p>

              <Button variant="cta" size="xl" asChild>
                <Link to="/kontakt">
                  Kostenloses Beratungsgespräch für Schulungen
                </Link>
              </Button>

              <div className="mt-8 border border-card-border/20 rounded-xl p-6">
                <p className="text-sm leading-relaxed text-muted-foreground font-light">
                  <span className="text-foreground">Praxis von Anfang an:</span> Bereits bei der Schulungsplanung erleben Sie 
                  unsere automatisierten Prozesse in Aktion – von der Bedarfsanalyse bis zur 
                  individuellen Lernpfad-Erstellung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Training;
