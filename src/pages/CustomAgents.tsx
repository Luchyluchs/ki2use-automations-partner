import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowRight, Calendar, Users, Zap, Target, Shield, TrendingUp } from "lucide-react";
import CustomROICalculator from "@/components/CustomROICalculator";
const CustomAgents = () => {
  const processSteps = [{
    step: "01",
    title: "Bedarfsanalyse",
    description: "Detaillierte Analyse Ihrer Geschäftsprozesse und Identifikation von Automatisierungspotenzialen.",
    duration: "1-2 Wochen",
    deliverables: ["Prozess-Audit", "Automatisierungsplan", "ROI-Prognose"]
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
  }];
  const examples = [{
    title: "Intelligenter Produktkonfigurator",
    industry: "Maschinenbau",
    description: "KI-gestützter Konfigurator, der komplexe Produktvarianten automatisch zusammenstellt und Angebote generiert.",
    results: ["40% schnellere Angebotserstellung", "95% Genauigkeit bei Konfigurationen", "60% weniger Rückfragen"]
  }, {
    title: "Automatisches Rechnungsmanagement",
    industry: "Dienstleistung",
    description: "Vollautomatisierte Erfassung, Kategorisierung und Weiterleitung von Eingangsrechnungen.",
    results: ["80% Zeitersparnis in der Buchhaltung", "99% korrekte Kategorisierung", "Eliminierung von Medienbrüchen"]
  }, {
    title: "Intelligente Personalplanung",
    industry: "Einzelhandel",
    description: "KI-Agent für optimale Personalplanung basierend auf Verkaufsprognosen und Mitarbeiterverfügbarkeit.",
    results: ["25% Reduzierung der Personalkosten", "Höhere Mitarbeiterzufriedenheit", "Optimierte Kundenbetreuung"]
  }];
  return <Layout>
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
              Ihre einzigartige Herausforderung:{" "}
              <span className="text-primary">Individuelle KI-Lösungen</span> von KI2USE
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in-element">
              Passgenau für den Mittelstand entwickelte KI-Agenten und Automatisierungsworkflows, 
              die perfekt auf Ihre individuellen Prozesse zugeschnitten sind.
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
                  Einzigartige Geschäftsanforderungen verdienen einzigartige Lösungen
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">Hier analysieren wir spezifische Geschäftsanforderungen von Unternehmen und entwickeln einzigartige KI-Agenten oder Automatisierungsworkflows, die perfekt auf die individuellen Prozesse zugeschnitten sind.</p>
                <p className="text-muted-foreground leading-relaxed">
                  Durch agile Entwicklungsmethoden und bewährte Standards gewährleisten wir 
                  höchste Effizienz, Transparenz und eine kalkulierbare Projektumsetzung.
                </p>
              </div>
              <div className="bg-card border border-card-border rounded-2xl p-8 shadow-card hover-lift">
                <h3 className="font-semibold mb-4">Ihre Vorteile auf einen Blick:</h3>
                <ul className="space-y-3">
                  {["100% individuell entwickelt", "Nahtlose Integration in bestehende Systeme", "Skalierbar und zukunftssicher", "DSGVO-konform und sicher", "Wartungsverträge verfügbar", "Persönlicher Ansprechpartner"].map((benefit, index) => <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-element">
            <h2 className="mb-6 scale-in-element">
              Unser strukturierter{" "}
              <span className="text-primary">Entwicklungsprozess</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-element">
              Ein klarer, schrittweiser Ablauf, der Planungssicherheit bietet und 
              den strukturierten, kalkulierbaren Ansatz von KI2USE unterstreicht.
            </p>
          </div>

          {/* Interactive Timeline */}
          <div className="relative">
            {/* Animated Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30 hidden lg:block"></div>
            <div className="absolute top-20 left-0 h-0.5 bg-gradient-to-r from-primary to-accent animate-pulse hidden lg:block" style={{
            width: '100%',
            animation: 'slide-progress 3s ease-in-out infinite'
          }}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {processSteps.map((step, index) => <div key={index} className="group relative">
                  <div className="bg-card border border-card-border rounded-xl p-6 shadow-card hover:shadow-xl transition-all duration-500 text-center h-full transform hover:scale-105 hover:-translate-y-2 cursor-pointer group-hover:bg-gradient-subtle">
                    {/* Floating Step Number */}
                    <div className="relative -mt-10 mb-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                        <span className="text-primary-foreground font-bold text-xl">{step.step}</span>
                      </div>
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-primary/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content with Reveal Animation */}
                    <div className="transform transition-all duration-300 group-hover:translate-y-1">
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">{step.description}</p>
                      
                      {/* Animated Duration Badge */}
                      <div className="bg-accent/10 group-hover:bg-accent/20 rounded-lg p-3 mb-4 transition-all duration-300 transform group-hover:scale-105">
                        <div className="text-xs text-muted-foreground mb-1">Dauer</div>
                        <div className="font-semibold text-sm group-hover:text-accent transition-colors duration-300">{step.duration}</div>
                      </div>
                      
                      {/* Deliverables with Stagger Animation */}
                      <div className="space-y-1">
                        {step.deliverables.map((deliverable, deliverableIndex) => <div key={deliverableIndex} className="bg-muted group-hover:bg-primary/5 rounded px-2 py-1 transition-all duration-300 transform group-hover:translate-x-1" style={{
                      transitionDelay: `${deliverableIndex * 50}ms`
                    }}>
                            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">{deliverable}</span>
                          </div>)}
                      </div>
                    </div>

                    {/* Hidden overlay for extra effect */}
                    <div className="absolute inset-0 bg-gradient-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>

                  {/* Animated Connection Arrow */}
                  {index < processSteps.length - 1 && <div className="hidden lg:block absolute top-8 -right-3 transform -translate-y-1/2 z-20">
                      <div className="relative">
                        <ArrowRight className="w-8 h-8 text-accent/60 bg-background rounded-full p-1.5 shadow-md transform transition-all duration-300 group-hover:text-accent group-hover:scale-110 group-hover:translate-x-1" />
                        <div className="absolute inset-0 w-8 h-8 rounded-full border-2 border-accent/30 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>}

                  {/* Step Connection Line (Mobile) */}
                  {index < processSteps.length - 1}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-element">
            <h2 className="mb-6 scale-in-element">
              Warum maßgeschneiderte{" "}
              <span className="text-primary">KI-Lösungen</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return <div key={index} className="bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift cursor-pointer text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 hover-scale">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6 scale-in-element">
              Berechnen Sie Ihre{" "}
              <span className="text-primary">Kosteneinsparungen</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unser ROI-Rechner zeigt Ihnen das Einsparpotential einer maßgeschneiderten KI-Lösung für Ihr Unternehmen
            </p>
          </div>
          <CustomROICalculator />
        </div>
      </section>

      {/* Examples */}
      

      {/* CTA */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="mb-6">
              Bereit für Ihre individuelle KI-Lösung?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Vereinbaren Sie jetzt Ihr kostenloses Beratungsgespräch und besprechen Sie 
              die Möglichkeiten für maßgeschneiderte Lösungen und deren kosteneffiziente 
              Umsetzung für Ihr KMU.
            </p>

            <Button variant="accent" size="xl" asChild className="bg-white text-primary hover:bg-white/90 hover-scale">
              <Link to="/kontakt">
                <Calendar className="w-5 h-5 mr-2" />
                Kostenloses Beratungsgespräch vereinbaren
              </Link>
            </Button>

            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover-scale">
              <p className="text-sm leading-relaxed opacity-90">
                <strong>Transparenz von Anfang an:</strong> Ihre Anfrage wird automatisch verarbeitet, 
                kategorisiert und an unseren Experten für maßgeschneiderte Lösungen weitergeleitet. 
                So erleben Sie bereits im ersten Kontakt unsere Automatisierungs-Kompetenz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default CustomAgents;