import CalendlyButton from "./CalendlyButton";
import TrustIndicators from "./TrustIndicators";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

const CTASection = () => {
  useScrollReveal();
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="scroll-reveal text-3xl lg:text-4xl font-thin mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="scroll-reveal stagger-delay-1 text-xl mb-10 opacity-90 leading-relaxed">
            Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch. 
            Gemeinsam finden Sie heraus, wie KI Ihr Unternehmen voranbringt – ganz ohne Verpflichtung.
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
              Deutschlandweit · Persönlicher Ansprechpartner · Ehrliche Beratung ohne Tech-Blabla
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
