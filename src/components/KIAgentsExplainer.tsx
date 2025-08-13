import { Euro, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

const KIAgentsExplainer = () => {
  useScrollReveal();

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            KI-Agenten = Digitale Mitarbeiter, die alltägliche Arbeiten automatisch erledigen
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Geld sparen */}
          <div className="bg-background rounded-xl p-6 shadow-card text-center scroll-reveal">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Euro className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Geld sparen
            </h3>
            <p className="text-muted-foreground text-lg">
              Bis zu 60% weniger Personalkosten
            </p>
          </div>

          {/* Zeit sparen */}
          <div className="bg-background rounded-xl p-6 shadow-card text-center scroll-reveal">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Zeit sparen
            </h3>
            <p className="text-muted-foreground text-lg">
              24/7 ohne Pause arbeiten
            </p>
          </div>
        </div>

        <div className="text-center mt-8 scroll-reveal">
          <p className="text-lg text-muted-foreground">
            Interessiert? Schauen Sie unsere Lösungen an ↓
          </p>
        </div>
      </div>
    </section>
  );
};

export default KIAgentsExplainer;