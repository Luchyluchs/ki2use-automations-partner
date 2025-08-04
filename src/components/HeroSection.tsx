import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import humanRobotHandshake from "@/assets/human-robot-handshake.jpg";
import CalendlyButton from "./CalendlyButton";
const HeroSection = () => {
  return <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left fade-in-element">
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              🚀 Deutschlands KI-Experten für KMUs
            </div>
            <h1 className="mb-6 gradient-text">
              Revolutioniere dein Business mit{" "}
              <span className="text-primary font-extrabold">KI-Agenten</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Professionelle KI-Automatisierung für deutsche Unternehmen. 
              <span className="text-foreground font-semibold"> Bis zu 80% weniger Arbeitszeit</span> bei 
              höchster Qualität und DSGVO-Konformität.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-element">
              <CalendlyButton 
                text="Kostenlose Beratung sichern"
                variant="cta"
                size="xl"
                className="text-lg px-8 py-4 shadow-primary gradient-primary"
                icon={false}
              />
              <Button variant="outline" size="xl" asChild className="text-lg px-8 py-4 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                <Link to="/standard-agenten">Standard-Agenten ansehen</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in-element">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-white p-1">
                <img
                  src={humanRobotHandshake}
                  alt="Erfolgreiche Zusammenarbeit zwischen Mensch und KI - Partnerschaftlicher Handschlag"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
            
            {/* Floating Trust Indicators */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-elevated border border-white/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-elevated border border-white/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">DSGVO</div>
                <div className="text-sm text-muted-foreground">100% Konform</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;