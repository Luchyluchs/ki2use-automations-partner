import { useScrollReveal, useParallax, useScrollFade } from "@/hooks/useScrollAnimations";
import Layout from "@/components/Layout";
import ROICalculator from "@/components/ROICalculator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, TrendingUp, Euro, Clock } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";

const ROICalculatorPage = () => {
  useScrollReveal();
  useParallax();
  useScrollFade();
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
              Agenten-Rechner:{" "}
              <span className="text-primary">Ihre Kosteneinsparungen berechnen</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in-element max-w-3xl mx-auto">
              Finden Sie heraus, wie viel Geld und Zeit Sie mit unseren KI-Agenten sparen können. 
              Unser interaktiver Rechner zeigt Ihnen das Einsparpotential für Ihr Unternehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-card-border rounded-xl p-6 text-center shadow-card hover-lift">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Euro className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Kostentransparenz</h3>
              <p className="text-muted-foreground text-sm">
                Berechnen Sie genau, wie viel Sie durch Automatisierung sparen können
              </p>
            </div>
            
            <div className="bg-card border border-card-border rounded-xl p-6 text-center shadow-card hover-lift">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Amortisationszeit</h3>
              <p className="text-muted-foreground text-sm">
                Erfahren Sie, wann sich Ihre Investition in KI-Agenten rentiert
              </p>
            </div>
            
            <div className="bg-card border border-card-border rounded-xl p-6 text-center shadow-card hover-lift">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Agenten-Analyse</h3>
              <p className="text-muted-foreground text-sm">
                Detaillierte Renditeberechnung für fundierte Entscheidungen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ROICalculator />
        </div>
      </section>

      {/* How it Works */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6 scale-in-element">
              So funktioniert die{" "}
              <span className="text-primary">Agenten-Berechnung</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unser Rechner basiert auf bewährten Berechnungsmethoden und realen Projekterfahrungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-card-border rounded-xl p-6 text-center shadow-card">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Ist-Analyse</h3>
              <p className="text-muted-foreground text-sm">
                Erfassung Ihrer aktuellen Personalkosten für manuelle Aufgaben
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-6 text-center shadow-card">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Agent-Auswahl</h3>
              <p className="text-muted-foreground text-sm">
                Wählen Sie den passenden KI-Agent für Ihre spezifischen Anforderungen
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-6 text-center shadow-card">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Kostenvergleich</h3>
              <p className="text-muted-foreground text-sm">
                Automatische Berechnung der Einsparungen durch Automatisierung
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-6 text-center shadow-card">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Agenten-Ergebnis</h3>
              <p className="text-muted-foreground text-sm">
                Detaillierte Analyse von Rendite, Amortisation und Einsparpotential
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="mb-6">
              Überzeugt von den Zahlen?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Lassen Sie uns gemeinsam Ihre individuelle KI-Lösung besprechen 
              und die konkreten Einsparmöglichkeiten für Ihr Unternehmen ermitteln.
            </p>
            <CalendlyButton 
              text="Kostenloses Beratungsgespräch vereinbaren"
              variant="accent"
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
              icon={false}
            />

            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-sm leading-relaxed opacity-90">
                <strong>Individuelle Beratung:</strong> Die im Rechner angezeigten Werte sind Richtwerte. 
                In einem persönlichen Gespräch erstellen wir eine präzise Analyse für Ihre spezifischen 
                Geschäftsprozesse und Anforderungen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ROICalculatorPage;