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
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-hero text-white">
      {/* Neura-style gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      
      {/* Subtle floating glow - Neura style */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pt-6 sm:pb-16 lg:py-12 xl:py-16">
        {/* Mobile Layout - Neura Style */}
        <div className="block lg:hidden text-left space-y-12 max-w-md mx-auto px-6">
          <div className="enhanced-reveal inline-flex items-center rounded-full px-5 py-2 text-xs font-light bg-white/5 text-white/80 border border-white/10">
            Made in Germany
          </div>
          
          <div className="enhanced-reveal stagger-delay-1 space-y-6">
            <h1 className="text-white text-5xl font-thin leading-[1.1] tracking-tight">
              KI-Automatisierung für{" "}
              <span className="font-light text-primary">
                dein Business
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed font-light">
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
          {/* Content - Neura Style */}
          <div className="lg:col-span-7 text-left space-y-12">
            <div className="enhanced-reveal inline-flex items-center rounded-full px-5 py-2 text-xs font-light bg-white/5 text-white/70 border border-white/10">
              Made in Germany
            </div>
            
            <div className="enhanced-reveal stagger-delay-1 mb-8">
              <h1 className="text-white text-5xl lg:text-6xl xl:text-7xl font-thin leading-[1.05] tracking-tight mb-6">
                Revolutioniere dein Business
              </h1>
              <h2 className="text-primary text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] tracking-tight">
                mit KI-Assistenten
              </h2>
            </div>
            
            <div className="enhanced-reveal stagger-delay-2 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-2xl">
              Professionelle KI-Automatisierung für deutsche Unternehmen. Bis zu 80% weniger Arbeitszeit bei höchster Qualität.
            </div>
            
            <div className="enhanced-reveal stagger-delay-3 flex flex-col sm:flex-row gap-4 items-start">
              <Button size="lg" asChild className="bg-primary hover:bg-primary-hover text-white font-light rounded-full px-8 py-6 text-base">
                <Link to="/kontakt">Kostenloses Erstgespräch</Link>
              </Button>
              
              <Button variant="ghost" size="lg" asChild className="text-white/80 hover:text-white bg-white/5 hover:bg-white/10 font-light rounded-full px-8 py-6 text-base border border-white/10">
                <Link to="/standard-agenten">Agenten ansehen</Link>
              </Button>
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