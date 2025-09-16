
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import CalendlyButton from "./CalendlyButton";
import InteractiveKIDemo from "./InteractiveKIDemo";
import UrgencyTimer from "./UrgencyTimer";
import { useScrollReveal, useParallax } from "@/hooks/useScrollAnimations";
import { useEffect } from "react";
const HeroSection = () => {
  useScrollReveal();
  useParallax();
  return <section className="relative overflow-hidden min-h-screen sm:min-h-[90vh] md:min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-background -mt-2 sm:pt-2 lg:-mt-20">
      {/* Enhanced Parallax Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] parallax-slow"></div>
      <div className="absolute top-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-accent/8 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-primary/5 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="scroll-reveal inline-flex items-center rounded-full px-3 py-2 text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4 sm:mb-6">
              🚀 Deutschlands KI-Experten für KMUs
            </div>
            <h1 className="scroll-reveal stagger-delay-1 mb-4 sm:mb-6 text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Revolutioniere dein Business mit{" "}
              <span className="text-primary font-extrabold nowrap-ki-assistant">KI-Assistenten</span>
            </h1>
            <p className="scroll-reveal stagger-delay-2 text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Professionelle KI-Automatisierung für deutsche Unternehmen. 
              <span className="text-foreground font-semibold"> Bis zu 80% weniger Arbeitszeit</span> bei 
              höchster Qualität und DSGVO-Konformität.
            </p>
            <div className="scroll-reveal stagger-delay-3 flex flex-col gap-4 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
              <CalendlyButton 
                text="Kostenloses Erstgespräch sichern (30 Min.)" 
                variant="cta" 
                size="lg" 
                className="text-sm sm:text-base px-6 py-4 shadow-primary gradient-primary hover:shadow-elevated transition-all duration-300 min-h-14 whitespace-normal text-center leading-relaxed w-full" 
                icon={false} 
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button variant="outline" size="lg" asChild className="text-sm px-4 py-3 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-elevated transition-all duration-300 min-h-12">
                  <Link to="/roi-rechner">ROI berechnen</Link>
                </Button>
                <Button variant="ghost" size="lg" asChild className="text-sm px-4 py-3 hover:bg-primary/10 hover:text-primary transition-all duration-300 min-h-12">
                  <Link to="/standard-agenten">Agenten ansehen</Link>
                </Button>
              </div>
              <div className="text-center">
                <Button variant="link" asChild className="text-sm text-muted-foreground hover:text-primary">
                  <Link to="#lead-magnets">Oder starten Sie mit kostenlosen Ressourcen</Link>
                </Button>
              </div>
            </div>
            
            {/* Capacity indicator */}
            <div className="scroll-reveal stagger-delay-4 mt-3 sm:mt-4 text-center">
              <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/80">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span>Nur noch 15 Plätze diesen Monat</span>
              </div>
            </div>
          </div>

          {/* Interactive KI Demo */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <InteractiveKIDemo />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
