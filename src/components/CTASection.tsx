import CalendlyButton from "./CalendlyButton";
import TrustIndicators from "./TrustIndicators";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <div className="border-t border-card-border/20 pt-4">
            <h2 className="text-3xl lg:text-4xl font-thin text-foreground mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl mb-10 text-muted-foreground leading-relaxed font-light">
              Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch. 
              Gemeinsam finden Sie heraus, wie KI Ihr Unternehmen voranbringt – ganz ohne Verpflichtung.
            </p>

            <div className="space-y-6">
              <CalendlyButton
                text="Jetzt Termin sichern"
                variant="cta"
                size="xl"
                icon={false}
              />
              
              <TrustIndicators />
              
              <p className="text-sm text-muted-foreground">
                ✓ Unverbindlich & kostenlos ✓ 20–30 Minuten ✓ Keine Verpflichtung
              </p>
              
              <div className="mt-8 border border-card-border/20 rounded-xl p-6">
                <p className="text-sm leading-relaxed text-muted-foreground font-light">
                  <span className="text-foreground">Deutschlandweit:</span> Persönlicher Ansprechpartner · Ehrliche Beratung ohne Tech-Blabla
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
