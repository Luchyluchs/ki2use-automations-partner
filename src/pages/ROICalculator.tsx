import { useScrollReveal, useParallax, useScrollFade, useMagneticCursor } from "@/hooks/useScrollAnimations";
import { useSEO, SEOTemplates } from "@/hooks/useSEO";
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
  useMagneticCursor();
  
  useSEO(SEOTemplates.roiCalculator);
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
              Agenten-Rechner:{" "}
              <span className="text-primary font-light">Ihre Kosteneinsparungen berechnen</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              Finden Sie heraus, wie viel Geld und Zeit Sie mit unseren KI-Agenten sparen können. 
              Unser interaktiver Rechner zeigt Ihnen das Einsparpotential für Ihr Unternehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="section-padding bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="border border-card-border/30 rounded-xl p-6 text-center scroll-reveal">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <Euro className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-light mb-2">Kostentransparenz</h3>
              <p className="text-muted-foreground text-sm font-light">
                Berechnen Sie genau, wie viel Sie durch Automatisierung sparen können
              </p>
            </div>
            
            <div className="border border-card-border/30 rounded-xl p-6 text-center scroll-reveal">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-light mb-2">Amortisationszeit</h3>
              <p className="text-muted-foreground text-sm font-light">
                Erfahren Sie, wann sich Ihre Investition in KI-Agenten rentiert
              </p>
            </div>
            
            <div className="border border-card-border/30 rounded-xl p-6 text-center scroll-reveal">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-light mb-2">Agenten-Analyse</h3>
              <p className="text-muted-foreground text-sm font-light">
                Detaillierte Renditeberechnung für fundierte Entscheidungen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section-padding bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <ROICalculator />
        </div>
      </section>

      {/* How it Works */}
      <section className="section-padding bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="mb-6 font-thin tracking-tight">
              So funktioniert die{" "}
              <span className="text-primary font-light">Agenten-Berechnung</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Unser Rechner basiert auf bewährten Berechnungsmethoden und realen Projekterfahrungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-card-border/30 rounded-xl p-6 text-center scroll-reveal">
              <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4 text-primary font-light">
                1
              </div>
              <h3 className="font-light mb-2">Ist-Analyse</h3>
              <p className="text-muted-foreground text-sm font-light">
                Erfassung Ihrer aktuellen Personalkosten für manuelle Aufgaben
              </p>
            </div>

            <div className="border border-card-border/30 rounded-xl p-6 text-center scroll-reveal">
              <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4 text-primary font-light">
                2
              </div>
              <h3 className="font-light mb-2">Agent-Auswahl</h3>
              <p className="text-muted-foreground text-sm font-light">
                Wählen Sie den passenden KI-Agent für Ihre spezifischen Anforderungen
              </p>
            </div>

            <div className="border border-card-border/30 rounded-xl p-6 text-center scroll-reveal">
              <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4 text-primary font-light">
                3
              </div>
              <h3 className="font-light mb-2">Kostenvergleich</h3>
              <p className="text-muted-foreground text-sm font-light">
                Automatische Berechnung der Einsparungen durch Automatisierung
              </p>
            </div>

            <div className="border border-card-border/30 rounded-xl p-6 text-center scroll-reveal">
              <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4 text-primary font-light">
                4
              </div>
              <h3 className="font-light mb-2">Agenten-Ergebnis</h3>
              <p className="text-muted-foreground text-sm font-light">
                Detaillierte Analyse von Rendite, Amortisation und Einsparpotential
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <div className="border-t border-card-border/20 pt-12">
              <h2 className="mb-6 font-thin tracking-tight">
                Überzeugt von den Zahlen?
              </h2>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed font-light">
                Lassen Sie uns gemeinsam Ihre individuelle KI-Lösung besprechen 
                und die konkreten Einsparmöglichkeiten für Ihr Unternehmen ermitteln.
              </p>
              <CalendlyButton 
                text="Kostenloses Erstgespräch sichern (30 Min.)"
                variant="cta"
                size="xl"
                icon={false}
              />

              <div className="mt-8 border border-card-border/20 rounded-xl p-6">
                <p className="text-sm leading-relaxed text-muted-foreground font-light">
                  <span className="text-foreground">Individuelle Beratung:</span> Die im Rechner angezeigten Werte sind Richtwerte. 
                  In einem persönlichen Gespräch erstellen wir eine präzise Analyse für Ihre spezifischen 
                  Geschäftsprozesse und Anforderungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ROICalculatorPage;
