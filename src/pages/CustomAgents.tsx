import { useScrollReveal, useParallax, useScrollFade, useMagneticCursor } from "@/hooks/useScrollAnimations";
import { useSEO, SEOTemplates } from "@/hooks/useSEO";
import { CustomAgentsFAQ } from "@/components/StructuredData";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowRight, Calendar, Users, Zap, Target, Shield, TrendingUp } from "lucide-react";
import CustomROICalculator from "@/components/CustomROICalculator";
import CalendlyButton from "@/components/CalendlyButton";

const CustomAgents = () => {
  useScrollReveal();
  useParallax();
  useScrollFade();
  useMagneticCursor();
  useSEO(SEOTemplates.customAgents);

  const examples = [{
    title: "Automatisierte Angebotserstellung",
    description: "Ein KI-Agent, der automatisch Angebote auf Basis von Kundendaten und Marktanalysen erstellt.",
    roi: "+25% Umsatzsteigerung"
  }, {
    title: "Intelligente Rechnungsprüfung",
    description: "Ein KI-System, das Rechnungen automatisch prüft und Fehler oder Unstimmigkeiten erkennt.",
    roi: "-15% Bearbeitungskosten"
  }, {
    title: "Predictive Maintenance",
    description: "Ein KI-Agent, der Wartungsbedarf vorhersagt und Ausfallzeiten minimiert.",
    roi: "-20% Ausfallzeiten"
  }];

  const processSteps = [{
    step: "01",
    title: "Bedarfsanalyse",
    description: "Detaillierte Analyse Ihrer Geschäftsprozesse und Identifikation von Automatisierungspotenzialen.",
    duration: "1-2 Wochen",
    deliverables: ["Prozess-Audit", "Automatisierungsplan", "Agenten-Prognose"]
  }, {
    step: "02",
    title: "Konzeption",
    description: "Entwicklung einer maßgeschneiderten KI-Lösung, die perfekt zu Ihren Anforderungen passt.",
    duration: "1-2 Wochen",
    deliverables: ["Technisches Konzept", "UI/UX Design", "Integrationsplan"]
  }, {
    step: "03",
    title: "Entwicklung",
    description: "Agile Entwicklung Ihres individuellen KI-Agenten mit regelmäßigen Updates und Tests.",
    duration: "1-2 Wochen",
    deliverables: ["Funktionsprototyp", "Testing & QA", "Dokumentation"]
  }, {
    step: "04",
    title: "Implementierung",
    description: "Nahtlose Integration in Ihre bestehenden Systeme mit minimalem Betriebsaufwand.",
    duration: "1-2 Wochen, je nach Datenlieferung des Kunden",
    deliverables: ["Live-Deployment", "Mitarbeiterschulung", "Go-Live Support"]
  }, {
    step: "05",
    title: "Support",
    description: "Kontinuierliche Betreuung, Updates und Optimierungen für maximale Effizienz.",
    duration: "Fortlaufend",
    deliverables: ["24/7 Monitoring", "Updates", "Performance-Optimierung"]
  }];

  const advantages = [{
    icon: Target,
    title: "Präzise Passgenauigkeit",
    description: "Jede Lösung wird exakt auf Ihre Geschäftsprozesse und Anforderungen zugeschnitten."
  }, {
    icon: Zap,
    title: "Effiziente Entwicklung",
    description: "Agile Entwicklungsmethoden für schnelle und kosteneffiziente Projektumsetzung."
  }, {
    icon: Users,
    title: "Dediziertes Team",
    description: "Ein erfahrenes Entwicklerteam arbeitet ausschließlich an Ihrem Projekt."
  }, {
    icon: Shield,
    title: "Höchste Sicherheit",
    description: "Enterprise-Grade Security und DSGVO-Konformität von Anfang an."
  }, {
    icon: TrendingUp,
    title: "Skalierbare Architektur",
    description: "Lösungen, die mit Ihrem Unternehmen mitwachsen und sich anpassen lassen."
  }, {
    icon: Calendar,
    title: "Planbare Umsetzung",
    description: "Feste Meilensteine und transparente Kommunikation für kalkulierbare Projektergebnisse."
  }];

  return (
    <Layout>
      <CustomAgentsFAQ />
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
            
            <h1 className="mb-6 scroll-reveal stagger-delay-1 font-thin tracking-tight">
              Maßgeschneiderte{" "}
              <span className="text-primary font-light">KI-Automatisierung</span> für Ihren Erfolg
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed scroll-reveal stagger-delay-2 font-light">
              Einzigartige KI-Agenten und Automatisierungsworkflows, die perfekt auf Ihre 
              individuellen Geschäftsprozesse zugeschnitten sind. Maximale Effizienz durch passgenaue Digitalisierung.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="scroll-reveal">
                <h2 className="text-2xl md:text-3xl font-thin mb-6 tracking-tight">
                  Einzigartige Geschäftsanforderungen verdienen einzigartige Lösungen
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                  Hier analysieren wir spezifische Geschäftsanforderungen von Unternehmen und entwickeln einzigartige KI-Agenten oder Automatisierungsworkflows, die perfekt auf die individuellen Prozesse zugeschnitten sind.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Durch agile Entwicklungsmethoden und bewährte Standards gewährleisten wir 
                  höchste Effizienz, Transparenz und eine kalkulierbare Projektumsetzung.
                </p>
              </div>
              <div className="border border-card-border/30 rounded-2xl p-8 scroll-reveal">
                <h3 className="font-light mb-4">Ihre Vorteile auf einen Blick:</h3>
                <ul className="space-y-3">
                  {["100% individuell entwickelt", "Nahtlose Integration in bestehende Systeme", "Skalierbar und zukunftssicher", "DSGVO-konform und sicher", "Wartungsverträge verfügbar", "Persönlicher Ansprechpartner"].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm font-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="mb-6 scroll-reveal stagger-delay-1 font-thin tracking-tight">
              Unser strukturierter{" "}
              <span className="text-primary font-light">Entwicklungsprozess</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto scroll-reveal stagger-delay-2 font-light">
              Ein klarer, schrittweiser Ablauf, der Planungssicherheit bietet und 
              den strukturierten, kalkulierbaren Ansatz von KI2USE unterstreicht.
            </p>
          </div>

          <div className="relative">
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="group relative scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="border border-card-border/30 rounded-xl p-6 transition-all duration-500 text-center h-full hover:border-primary/30">
                    <div className="relative -mt-10 mb-4">
                      <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mx-auto bg-background">
                        <span className="text-primary font-light text-xl">{step.step}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-light mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed font-light">{step.description}</p>
                      
                      <div className="border border-card-border/20 rounded-lg p-3 mb-4">
                        <div className="text-xs text-muted-foreground mb-1 font-light">Dauer</div>
                        <div className="font-light text-sm">{step.duration}</div>
                      </div>
                      
                      <div className="space-y-1">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="border border-card-border/10 rounded px-2 py-1">
                            <span className="text-xs text-muted-foreground font-light">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-muted-foreground/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="mb-6 scroll-reveal stagger-delay-1 font-thin tracking-tight">
              Warum maßgeschneiderte{" "}
              <span className="text-primary font-light">KI-Lösungen</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="border border-card-border/30 rounded-xl p-6 text-center scroll-reveal hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-light mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm font-light">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="mb-6 scroll-reveal stagger-delay-1 font-thin tracking-tight">
              Berechnen Sie Ihre{" "}
              <span className="text-primary font-light">Kosteneinsparungen</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Unser Agenten-Rechner zeigt Ihnen das Einsparpotential einer maßgeschneiderten KI-Lösung für Ihr Unternehmen
            </p>
          </div>
          <CustomROICalculator />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <div className="border-t border-card-border/20 pt-12">
              <h2 className="mb-6 font-thin tracking-tight">
                Bereit für Ihre individuelle KI-Lösung?
              </h2>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed font-light">
                Vereinbaren Sie jetzt Ihr kostenloses Beratungsgespräch und besprechen Sie 
                die Möglichkeiten für maßgeschneiderte Lösungen und deren kosteneffiziente 
                Umsetzung für Ihr KMU.
              </p>

              <CalendlyButton 
                text="Kostenloses Beratungsgespräch vereinbaren"
                variant="cta"
                size="xl"
                icon={false}
              />

              <div className="mt-8 border border-card-border/20 rounded-xl p-6">
                <p className="text-sm leading-relaxed text-muted-foreground font-light">
                  <span className="text-foreground">Transparenz von Anfang an:</span> Ihre Anfrage wird automatisch verarbeitet, 
                  kategorisiert und an unseren Experten für maßgeschneiderte Lösungen weitergeleitet. 
                  So erleben Sie bereits im ersten Kontakt unsere Automatisierungs-Kompetenz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomAgents;
