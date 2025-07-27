import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowRight, Calendar, Users, Zap, Target, Shield, TrendingUp } from "lucide-react";
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
    duration: "2-6 Wochen",
    deliverables: ["Funktionsprototyp", "Testing & QA", "Dokumentation"]
  }, {
    step: "04",
    title: "Implementierung",
    description: "Nahtlose Integration in Ihre bestehenden Systeme mit minimalem Betriebsaufwand.",
    duration: "1-2 Wochen",
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

          <div className="space-y-8">
            {processSteps.map((step, index) => <div key={index} className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Step Number */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-primary-foreground font-bold text-xl hover-scale">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7">
                    <div className="bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => <span key={deliverableIndex} className="bg-accent/10 text-accent text-xs font-medium rounded-full px-3 py-1">
                            {deliverable}
                          </span>)}
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="lg:col-span-3">
                    <div className="bg-muted border border-card-border rounded-xl p-4 text-center hover-lift">
                      <div className="text-sm text-muted-foreground mb-1">Dauer</div>
                      <div className="font-semibold">{step.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Arrow (except for last item) */}
                {index < processSteps.length - 1 && <div className="flex justify-center mt-8">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>}
              </div>)}
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

      {/* Examples */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-element">
            <h2 className="mb-6 scale-in-element">
              Erfolgreiche{" "}
              <span className="text-primary">Praxisbeispiele</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-element">
              Sehen Sie, wie andere KMUs von maßgeschneiderten KI-Lösungen profitieren 
              und messbare Ergebnisse erzielen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((example, index) => <div key={index} className="bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift cursor-pointer">
                <div className="mb-4">
                  <div className="text-xs font-medium text-accent bg-accent/10 rounded-full px-3 py-1 inline-block mb-3">
                    {example.industry}
                  </div>
                  <h3 className="font-semibold mb-2">{example.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{example.description}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-sm">Messbare Ergebnisse:</h4>
                  <ul className="space-y-1">
                    {example.results.map((result, resultIndex) => <li key={resultIndex} className="flex items-start">
                        <CheckCircle className="w-3 h-3 text-accent mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{result}</span>
                      </li>)}
                  </ul>
                </div>
              </div>)}
          </div>
        </div>
      </section>

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