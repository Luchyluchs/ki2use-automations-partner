import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import CalendlyButton from "./CalendlyButton";
import InteractiveKIDemo from "./InteractiveKIDemo";
import UrgencyTimer from "./UrgencyTimer";
import EnhancedButton from "./EnhancedButton";
import TextReveal, { GradientText, TypingAnimation } from "./TextRevealAnimation";
import { useScrollReveal, useEnhancedParallax } from "@/hooks/useScrollAnimations";
import { useEffect } from "react";
const HeroSection = () => {
  useScrollReveal();
  useEnhancedParallax();

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-hero text-white -mt-2 sm:pt-2 lg:-mt-20">
      {/* Clean minimal background with subtle mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      {/* Simplified floating elements - Neura style */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl parallax-medium animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-teal-400/8 rounded-full blur-3xl parallax-fast"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pt-6 sm:pb-16 lg:py-12 xl:py-16">
        {/* Mobile Layout - Clean and minimal */}
        <div className="block lg:hidden text-center space-y-10 max-w-md mx-auto">
          <div className="enhanced-reveal inline-flex items-center rounded-full px-5 py-2 text-sm font-light bg-white/5 text-white/90 border border-white/10 backdrop-blur-md">
            Made in Germany
          </div>
          
          <div className="enhanced-reveal stagger-delay-1 space-y-6">
            <h1 className="text-white text-4xl font-light leading-tight tracking-tight">
              KI-Automatisierung für{" "}
              <span className="font-normal bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                dein Business
              </span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              Professionell. DSGVO-konform. Sofort einsetzbar.
            </p>
          </div>
          
          <div className="enhanced-reveal stagger-delay-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <p className="text-sm text-white/80 mb-2">
              <span className="text-primary font-semibold">83%</span> aller Unternehmen sehen KI als Top-Priorität
            </p>
            <p className="text-xs text-white/60">
              Aber nur wenige wissen, <span className="text-white font-medium">wie sie es richtig integrieren...</span>
            </p>
          </div>
          
          <div className="enhanced-reveal stagger-delay-3 space-y-6">
            <CalendlyButton 
              text="Kostenloses Beratungsgespräch" 
              variant="cta" 
              size="lg" 
              className="text-base px-8 py-4 w-full font-medium" 
              icon={false} 
            />
            
            <Button 
              variant="link" 
              className="text-sm text-white/60 hover:text-white/80"
              onClick={() => {
                const element = document.getElementById('lead-magnets');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Gratis Tools & Guides entdecken
            </Button>
          </div>
        </div>

        {/* Desktop Layout - Full featured */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8 sm:space-y-10">
            <div className="enhanced-reveal inline-flex items-center rounded-full px-5 py-2 text-sm font-light bg-white/5 text-white/90 border border-white/10 mb-6 mt-12 backdrop-blur-md">
              🚀 KI-Assistenten - Made in Germany
            </div>
            
            <div className="enhanced-reveal stagger-delay-1 mb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight">
              Revolutioniere dein Business mit{" "}
              <span className="font-normal bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent nowrap-ki-assistant">
                KI-Assistenten
              </span>
            </div>
            
            <div className="enhanced-reveal stagger-delay-2 text-lg sm:text-xl lg:text-2xl text-white/70 mb-8 leading-relaxed font-light">
              Professionelle KI-Automatisierung für deutsche Unternehmen.
              <br />
              <span className="text-white/90 font-normal">Bis zu 80% weniger Arbeitszeit</span> bei 
              höchster Qualität und DSGVO-Konformität.
            </div>
            
            <div className="enhanced-reveal stagger-delay-3 flex flex-col gap-5 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
              <CalendlyButton 
                text="Kostenloses Erstgespräch sichern" 
                variant="cta" 
                size="lg" 
                className="text-base font-normal px-8 py-5 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-400/30 transition-all duration-500 min-h-14 rounded-full" 
                icon={false} 
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <EnhancedButton variant="outline" size="lg" asChild magnetic className="text-sm font-light px-5 py-4 border border-white/20 text-white/90 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-500 min-h-12 rounded-full">
                  <Link to="/roi-rechner">Kostenrechner</Link>
                </EnhancedButton>
                <EnhancedButton variant="ghost" size="lg" asChild className="text-sm font-light px-5 py-4 text-white/90 bg-transparent border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-500 min-h-12 rounded-full">
                  <Link to="/standard-agenten">Agenten ansehen</Link>
                </EnhancedButton>
              </div>
              <div className="text-center">
                <Button variant="link" className="text-sm font-light text-white/60 hover:text-white/90 transition-colors duration-300" onClick={() => {
                const element = document.getElementById('lead-magnets');
                element?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}>
                  Kostenlose Ressourcen entdecken →
                </Button>
              </div>
            </div>
          </div>

          {/* Interactive KI Demo - Desktop only */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="enhanced-reveal stagger-delay-4">
              <InteractiveKIDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;