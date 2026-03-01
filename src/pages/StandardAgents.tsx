import { useScrollReveal, useParallax, useScrollFade, useMagneticCursor } from "@/hooks/useScrollAnimations";
import { useSEO, SEOTemplates } from "@/hooks/useSEO";
import { StandardAgentsFAQ } from "@/components/StructuredData";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Calendar } from "lucide-react";
import ROICalculator from "@/components/ROICalculator";

const StandardAgents = () => {
  useScrollReveal();
  useParallax();
  useScrollFade();
  useMagneticCursor();
  useSEO(SEOTemplates.standardAgents);

  const agents = [{
    name: "LinkedIn Assistent",
    description: "Automatisiert Netzwerkpflege, spart wertvolle Zeit bei der Akquise und stärkt Ihre Markenpräsenz professionell.",
    features: ["Automatisierte Kontaktanfragen", "Personalisierte Nachrichten", "Lead-Qualifizierung", "Netzwerk-Analytics", "DSGVO-konforme Umsetzung"],
    benefits: ["Bis zu 60% Zeitersparnis beim Networking", "Konstante Lead-Generierung", "Professionelle Markenpräsenz", "Skalierbare Akquisestrategie"],
    useCases: ["B2B-Akquise für Dienstleister", "Personalrekrutierung", "Partnership-Entwicklung", "Marktforschung und Konkurrenzanalyse"]
  }, {
    name: "Chatbot Assistent",
    description: "Verbessert den Kundenservice rund um die Uhr, entlastet Ihr Team von Routineanfragen und sorgt für schnelle Antworten.",
    features: ["24/7 Verfügbarkeit", "Intelligente Antworten", "Mehrsprachiger Support", "CRM-Integration", "Eskalationsmanagement"],
    benefits: ["Sofortige Kundenbetreuung", "40% weniger Support-Anfragen für das Team", "Höhere Kundenzufriedenheit", "Kosteneinsparungen im Support"],
    useCases: ["Website-Support", "FAQ-Automatisierung", "Terminbuchungen", "Produktberatung"]
  }, {
    name: "Newsletter Assistent",
    description: "Erstellt und versendet personalisierte Newsletter-Kampagnen effizient, steigert die Kundenbindung und spart Marketingressourcen.",
    features: ["Automatische Content-Erstellung", "Personalisierung", "A/B-Testing", "Analytics und Reporting", "DSGVO-konforme Verwaltung"],
    benefits: ["65% Zeitersparnis bei Newsletter-Erstellung", "Höhere Öffnungsraten", "Automatisierte Kundenbindung", "Messbare Marketing-Assistenten"],
    useCases: ["Kundennewsletter", "Produktankündigungen", "Event-Marketing", "Thought Leadership"]
  }, {
    name: "Email Assistent",
    description: "Automatisiert die E-Mail-Sortierung und Priorisierung, reduziert administrative Last und schafft Fokus für wichtigere Aufgaben.",
    features: ["Intelligente Kategorisierung", "Prioritätsbewertung", "Automatische Weiterleitung", "Spam-Filterung", "Follow-up Erinnerungen"],
    benefits: ["40% weniger Zeit für E-Mail-Verwaltung", "Keine wichtigen E-Mails übersehen", "Strukturierte Kommunikation", "Produktivitätssteigerung"],
    useCases: ["Kundenanfragen-Management", "Interne Kommunikation", "Support-Ticket-Routing", "Lead-Qualifizierung"]
  }, {
    name: "Sprach-Assistent",
    description: "Interagiert mit Kunden per Sprache, optimiert den telefonischen Support und schafft Erreichbarkeit – auch außerhalb der Geschäftszeiten.",
    features: ["Natürliche Spracherkennung", "Intelligente Gesprächsführung", "Terminbuchung", "Call-Routing", "Gesprächsdokumentation"],
    benefits: ["24/7 telefonische Erreichbarkeit", "Professionelle Kundenbetreuung", "Entlastung der Mitarbeiter", "Höhere Kundenzufriedenheit"],
    useCases: ["Telefonische Terminbuchungen", "Kundenservice-Hotline", "Notfall-Support", "Informations-Hotline"]
  }, {
    name: "Social Media Assistent",
    description: "Automatisiert Social Media Posting, Interaktionen und Content-Erstellung für eine konsistente Online-Präsenz und bessere Reichweite.",
    features: ["Automatisches Posting", "Content-Generierung", "Hashtag-Optimierung", "Engagement-Tracking", "Multi-Platform-Management"],
    benefits: ["Konsistente Social Media Präsenz", "55% Zeitersparnis beim Content Management", "Verbesserte Reichweite und Engagement", "Automatisierte Kundeninteraktion"],
    useCases: ["Regelmäßige Posts", "Kundenkommunikation", "Markenaufbau", "Lead-Generierung über Social Media"]
  }, {
    name: "Sales Assistent",
    description: "Automatisiert Lead-Qualifizierung und Verkaufsprozesse, identifiziert potenzielle Kunden und unterstützt den Abschluss von Geschäften.",
    features: ["Lead-Scoring", "Automatische Follow-ups", "Verkaufspipeline-Management", "CRM-Integration", "Verkaufsanalytics"],
    benefits: ["45% höhere Conversion-Rate", "Automatisierte Lead-Qualifizierung", "Kürzere Sales-Zyklen", "Erhöhte Verkaufseffizienz"],
    useCases: ["B2B-Verkauf", "Lead-Nurturing", "Cross-Selling", "Verkaufsprozess-Automatisierung"]
  }, {
    name: "Terminbuchungs-Assistent",
    description: "Vereinfacht die Terminplanung durch automatische Buchungen, Erinnerungen und Kalenderintegration für optimierte Arbeitsabläufe.",
    features: ["Automatische Terminbuchung", "Kalender-Synchronisation", "SMS/E-Mail-Erinnerungen", "Konflikt-Vermeidung", "Multi-Standort-Support"],
    benefits: ["75% weniger manueller Aufwand", "Keine Terminüberschneidungen", "Automatische Erinnerungen", "24/7 Buchungsmöglichkeit"],
    useCases: ["Arzttermine", "Beratungsgespräche", "Service-Termine", "Schulungsbuchungen"]
  }, {
    name: "Ausschreibungs-Assistent",
    description: "Analysiert Ausschreibungen automatisch, identifiziert passende Geschäftsmöglichkeiten und erstellt individualisierte Angebote für maximale Erfolgsaussichten.",
    features: ["Automatische Ausschreibungsanalyse", "Relevanz-Bewertung", "Angebotserstellung", "Deadline-Management", "Konkurrenzanalyse"],
    benefits: ["70% schnellere Angebotsbearbeitung", "Höhere Zuschlagswahrscheinlichkeit", "Systematische Marktbearbeitung", "Automatisierte Dokumentation"],
    useCases: ["Öffentliche Ausschreibungen", "Private Ausschreibungen", "EU-weite Vergabeverfahren", "Rahmenverträge"]
  }, {
    name: "HR Assistent",
    description: "Bewertet Bewerbungen automatisch und matcht sie mit passenden Stellenausschreibungen für eine effiziente und objektive Personalauswahl.",
    features: ["CV-Analyse", "Skill-Matching", "Bewertungs-Scoring", "Interview-Terminierung", "Absagen-Automatisierung"],
    benefits: ["60% effizientere Bewerberauswahl", "Objektive Bewertungskriterien", "Schnellere Time-to-Hire", "DSGVO-konforme Verarbeitung"],
    useCases: ["Stellenbesetzung", "Bewerbermanagement", "Talent-Pool-Aufbau", "Vorauswahl-Prozesse"]
  }];

  return (
    <Layout>
      <StandardAgentsFAQ />
      {/* Header */}
      <section className="pt-6 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </Button>
            
            <h1 className="scroll-reveal stagger-delay-1 mb-6 font-thin tracking-tight">
              Sofort einsetzbare{" "}
              <span className="text-primary font-light nowrap-ki-assistant">KI-Assistenten</span> für maximale Effizienz
            </h1>
            <p className="scroll-reveal stagger-delay-2 text-xl text-muted-foreground leading-relaxed font-light">
              Bewährte KI-Automatisierung mit direktem Nutzen und schneller Amortisation. 
              Digitale Mitarbeiter, die sofort produktiv werden und Ihre Geschäftsprozesse revolutionieren.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="pb-16 pt-4 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <div
                key={index}
                className={`scroll-scale stagger-delay-${index % 4 + 1} border border-card-border/30 rounded-xl p-4 cursor-pointer transform hover:border-primary/30 transition-all duration-500`}
              >
                <div>
                  <h2 className="text-lg font-light mb-2">{agent.name}</h2>
                  <p className="text-muted-foreground mb-3 text-sm font-light">{agent.description}</p>

                  <div className="mb-3">
                    <h3 className="font-light mb-2 text-sm">Hauptfunktionen:</h3>
                    <ul className="space-y-1">
                      {agent.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-accent mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-xs font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-light mb-2 text-sm">Vorteile:</h3>
                    <div className="space-y-1">
                      {agent.benefits.slice(0, 1).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="bg-accent/10 text-accent text-xs font-light rounded-full px-2 py-1">
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="cta" size="sm" className="w-full transition-all duration-200" asChild>
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

      {/* ROI Calculator */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-scale">
          <ROICalculator />
        </div>
      </section>

      {/* Important Note */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto border border-card-border/30 rounded-2xl p-6 text-center scroll-reveal">
            <h3 className="text-xl font-light mb-4">
              Wichtiger Hinweis für KMUs
            </h3>
            <p className="leading-relaxed mb-6 text-muted-foreground font-light">
              Alle Standard-Agenten von KI2USE sind über ein persönliches, kostenloses Beratungsgespräch buchbar, in dem wir die unkomplizierte, schnelle und rechtssichere Integration für Ihr Unternehmen besprechen. Die internen Prozesse von der Anfrage bis zur Implementierung werden dabei automatisiert, was unsere Effizienz und Qualität in der Kundenbetreuung beweist.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/kontakt">Jetzt Beratungsgespräch vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StandardAgents;
