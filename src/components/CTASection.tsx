import CalendlyButton from "./CalendlyButton";
import TrustIndicators from "./TrustIndicators";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

const CTASection = () => {
  useScrollReveal();
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="scroll-reveal text-3xl lg:text-4xl font-thin mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="scroll-reveal stagger-delay-1 text-xl mb-10 opacity-90 leading-relaxed">
            Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch. 
            Wir finden gemeinsam heraus, wie KI Ihr Unternehmen voranbringt – ganz ohne Verpflichtung.
          </p>

          <div className="scroll-reveal stagger-delay-2 space-y-6">
            <CalendlyButton
              text="Jetzt Termin sichern"
              variant="accent"
              size="xl"
              className="bg-card text-foreground hover:bg-muted text-lg"
              icon={false}
            />
            
            <TrustIndicators />
            
            <p className="text-sm opacity-75">
              ✓ Unverbindlich & kostenlos ✓ 20–30 Minuten ✓ Keine Verpflichtung
            </p>
            
            <p className="text-xs opacity-50 mt-4">
              Köln und Umgebung · Regionaler Ansprechpartner · Ehrliche Beratung ohne Tech-Blabla
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
