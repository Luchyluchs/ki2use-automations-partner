import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import CalendlyButton from "./CalendlyButton";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

const CTASection = () => {
  useScrollReveal();
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="scroll-reveal mb-6">
            Was Sie in 30 Minuten erfahren werden
          </h2>
          <p className="scroll-reveal stagger-delay-1 text-xl mb-8 opacity-90 leading-relaxed">
            Kostenloses Erstgespräch ohne Verpflichtung - erfahren Sie konkret, 
            welches Automatisierungspotenzial in Ihrem Unternehmen steckt.
          </p>

          <div className="scroll-scale grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="stagger-delay-1 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover-scale transform hover:scale-105 transition-all duration-500">
              <Calendar className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Konkrete KI-Potenziale</h3>
              <p className="text-sm opacity-80">Welche Ihrer Prozesse sich sofort automatisieren lassen</p>
            </div>
            <div className="stagger-delay-2 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover-scale transform hover:scale-105 transition-all duration-500">
              <MessageCircle className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Realistische Zeitersparnis</h3>
              <p className="text-sm opacity-80">Wie viele Stunden Sie pro Woche einsparen können</p>
            </div>
            <div className="stagger-delay-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover-scale transform hover:scale-105 transition-all duration-500">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Nächste Schritte</h3>
              <p className="text-sm opacity-80">Unverbindliche Roadmap für Ihr Unternehmen</p>
            </div>
          </div>

          <div className="scroll-reveal stagger-delay-2 space-y-4">
            <CalendlyButton 
              text="Kostenloses Erstgespräch sichern (30 Min.)"
              variant="accent"
              size="xl"
              className="bg-white text-primary hover:bg-white/90 text-lg"
              icon={false}
            />
            <p className="text-sm opacity-75">
              ✓ Unverbindlich & kostenlos ✓ Keine Verpflichtung ✓ Einfach mal schauen
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;