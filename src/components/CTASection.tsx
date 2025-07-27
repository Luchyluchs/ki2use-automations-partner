import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import CalendlyButton from "./CalendlyButton";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground fade-in-element">
          <h2 className="mb-6 scale-in-element">
            Bereit für mehr Effizienz in Ihrem Unternehmen?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed fade-in-element">
            Vereinbaren Sie jetzt Ihr kostenloses 30-minütiges Beratungsgespräch und 
            entdecken Sie, wie KI-Automatisierung Ihr Unternehmen voranbringen kann.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover-scale">
              <Calendar className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Kostenlose Beratung</h3>
              <p className="text-sm opacity-80">30 Minuten individuelle Analyse Ihrer Prozesse</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover-scale">
              <MessageCircle className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Konkrete Lösungen</h3>
              <p className="text-sm opacity-80">Maßgeschneiderte Empfehlungen für Ihr Unternehmen</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover-scale">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Direkte Umsetzung</h3>
              <p className="text-sm opacity-80">Schnelle Integration ohne Umwege</p>
            </div>
          </div>

          <div className="space-y-4">
            <CalendlyButton 
              text="Jetzt kostenloses Beratungsgespräch vereinbaren"
              variant="accent"
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
            />
            <p className="text-sm opacity-75">
              ✓ Unverbindlich ✓ Kostenlos ✓ Sofort verfügbar
            </p>
          </div>

          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover-scale">
            <p className="text-sm leading-relaxed opacity-90">
              <strong>Automatisierung in Aktion:</strong> Diese Anfrage wird automatisch verarbeitet, 
              kategorisiert und an den passenden Experten weitergeleitet – so demonstrieren wir live unsere 
              Effizienz und Zuverlässigkeit in der Kundenbetreuung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;