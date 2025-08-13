import { Euro, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

const KIAgentsExplainer = () => {
  useScrollReveal();

  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary/6 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/6 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            💡 Einfach erklärt
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
            KI-Agenten = <span className="text-primary">Digitale Mitarbeiter</span><br/>
            die alltägliche Arbeiten automatisch erledigen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stellen Sie sich vor: Ein digitaler Assistent, der nie müde wird, nie Fehler macht und rund um die Uhr für Sie arbeitet.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Geld sparen */}
          <div className="scroll-scale stagger-delay-1 group bg-card border border-card-border rounded-2xl p-8 shadow-card hover-lift cursor-pointer transform hover:scale-105 transition-all duration-500 text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
              <Euro className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Geld sparen
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Bis zu <span className="text-accent font-semibold">60% weniger</span> Personalkosten
            </p>
            <div className="text-sm text-muted-foreground">
              Ein KI-Agent kostet weniger als ein Teilzeit-Mitarbeiter
            </div>
          </div>

          {/* Zeit sparen */}
          <div className="scroll-scale stagger-delay-2 group bg-card border border-card-border rounded-2xl p-8 shadow-card hover-lift cursor-pointer transform hover:scale-105 transition-all duration-500 text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
              <Clock className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Zeit sparen
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              <span className="text-accent font-semibold">24/7</span> ohne Pause arbeiten
            </p>
            <div className="text-sm text-muted-foreground">
              Keine Krankheitstage, kein Urlaub, keine Müdigkeit
            </div>
          </div>
        </div>

        <div className="text-center mt-12 scroll-reveal stagger-delay-3">
          <div className="inline-flex items-center justify-center space-x-2 text-lg text-muted-foreground bg-muted/50 rounded-full px-6 py-3 backdrop-blur-sm">
            <span>Neugierig geworden?</span>
            <span className="text-2xl">👇</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Schauen Sie sich unsere Lösungen an</p>
        </div>
      </div>
    </section>
  );
};

export default KIAgentsExplainer;