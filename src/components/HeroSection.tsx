import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import humanRobotHandshake from "@/assets/human-robot-handshake.jpg";
import CalendlyButton from "./CalendlyButton";
import { useScrollReveal, useParallax } from "@/hooks/useScrollAnimations";
import { useEffect } from "react";

const HeroSection = () => {
  useScrollReveal();
  useParallax();
  return <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-background pt-16 lg:-mt-20">
      {/* Enhanced Parallax Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] parallax-slow"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="scroll-reveal inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              🚀 Deutschlands KI-Experten für KMUs
            </div>
            <h1 className="scroll-reveal stagger-delay-1 mb-6 gradient-text">
              Revolutioniere dein Business mit{" "}
              <span className="text-primary font-extrabold">KI-Assistenten</span>
            </h1>
            <p className="scroll-reveal stagger-delay-2 text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Professionelle KI-Automatisierung für deutsche Unternehmen. 
              <span className="text-foreground font-semibold"> Bis zu 80% weniger Arbeitszeit</span> bei 
              höchster Qualität und DSGVO-Konformität.
            </p>
            <div className="scroll-reveal stagger-delay-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CalendlyButton 
                text="Kostenloses Erstgespräch sichern (30 Min.)"
                variant="cta"
                size="xl"
                className="text-lg px-8 py-4 shadow-primary gradient-primary hover:shadow-elevated transform hover:scale-105 transition-all duration-300"
                icon={false}
              />
              <Button variant="outline" size="xl" asChild className="text-lg px-8 py-4 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-elevated transform hover:scale-105 transition-all duration-300">
                <Link to="/standard-agenten">Standard-Assistenten ansehen</Link>
              </Button>
            </div>
            
            {/* Capacity indicator */}
            <div className="scroll-reveal stagger-delay-4 mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Begrenzte Kapazität - nur 15 Beratungen pro Monat</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="scroll-scale relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60 parallax-slow"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-white p-1 hover:shadow-primary transition-all duration-500">
                <img
                  src={humanRobotHandshake}
                  alt="Erfolgreiche Zusammenarbeit zwischen Mensch und KI - Partnerschaftlicher Handschlag"
                  className="w-full h-auto object-cover rounded-xl transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Floating Trust Indicators */}
            <div className="scroll-fade-in absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-elevated border border-white/50 hover:shadow-primary transition-all duration-300">
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