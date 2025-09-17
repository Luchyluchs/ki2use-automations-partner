import { useScrollReveal, useParallax, useScrollFade } from "@/hooks/useScrollAnimations";
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

  // SEO optimization for Standard Agents page
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
  }];
  return <Layout>
      <StandardAgentsFAQ />
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-subtle pt-6 pb-16">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl parallax-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl parallax-slow"></div>
        
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <Button variant="ghost" size="sm" asChild className="mb-8 hover-scale">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </Button>
            
            <h1 className="scroll-reveal stagger-delay-1 mb-6">
              Sofort einsetzbare{" "}
              <span className="text-primary nowrap-ki-assistant">KI-Assistenten</span> für maximale Effizienz
            </h1>
            <p className="scroll-reveal stagger-delay-2 text-xl text-muted-foreground leading-relaxed">
              Bewährte KI-Automatisierung mit direktem Nutzen und schneller Amortisation. 
              Digitale Mitarbeiter, die sofort produktiv werden und Ihre Geschäftsprozesse revolutionieren.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="pb-16 pt-4 bg-background relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl parallax-slow"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl parallax-slow"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => <div key={index} className={`scroll-scale stagger-delay-${index % 4 + 1} bg-card border border-card-border rounded-xl p-4 shadow-card hover-lift cursor-pointer transform hover:scale-105 transition-all duration-500`}>
                {/* Content */}
                <div>
                  <h2 className="text-lg font-semibold mb-2">{agent.name}</h2>
                  <p className="text-muted-foreground mb-3 text-sm">{agent.description}</p>

                  {/* Features */}
                  <div className="mb-3">
                    <h3 className="font-semibold mb-2 text-sm">Hauptfunktionen:</h3>
                    <ul className="space-y-1">
                      {agent.features.slice(0, 2).map((feature, featureIndex) => <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-accent mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-xs">{feature}</span>
                        </li>)}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-sm">Vorteile:</h3>
                    <div className="space-y-1">
                      {agent.benefits.slice(0, 1).map((benefit, benefitIndex) => <div key={benefitIndex} className="bg-accent/10 text-accent text-xs font-medium rounded-full px-2 py-1">
                          {benefit}
                        </div>)}
                    </div>
                  </div>

                  <Button variant="cta" size="sm" className="w-full hover-scale transition-all duration-200" asChild>
                    <Link to="/kontakt">
                      <Calendar className="w-3 h-3 mr-2" />
                      Kostenloser Beratungstermin
                    </Link>
                  </Button>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ROICalculator />
        </div>
      </section>

      {/* Important Note */}
      <section className="section-padding bg-muted">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-gradient-primary rounded-2xl p-6 text-center text-primary-foreground hover-scale">
            <h3 className="scroll-reveal text-xl font-semibold mb-4">
              Wichtiger Hinweis für KMUs
            </h3>
            <p className="scroll-reveal stagger-delay-1 leading-relaxed mb-6">Alle Standard-Agenten von KI2USE sind über ein persönliches, kostenloses Beratungsgespräch buchbar, in dem wir die unkomplizierte, schnelle und rechtssichere Integration für Ihr Unternehmen besprechen. Die internen Prozesse von der Anfrage bis zur Implementierung werden dabei automatisiert, was unsere Effizienz und Qualität in der Kundenbetreuung beweist.</p>
            <Button variant="accent" size="lg" asChild className="bg-card text-foreground hover:bg-muted hover-scale">
              <Link to="/kontakt">Jetzt Beratungsgespräch vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default StandardAgents;