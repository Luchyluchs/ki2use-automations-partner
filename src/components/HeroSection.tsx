import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import CalendlyButton from "./CalendlyButton";
import InteractiveKIDemo from "./InteractiveKIDemo";
import UrgencyTimer from "./UrgencyTimer";
import EnhancedButton from "./EnhancedButton";
import TextReveal, { GradientText, TypingAnimation } from "./TextRevealAnimation";
import { useScrollReveal, useEnhancedParallax } from "@/hooks/useScrollAnimations";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect } from "react";
const HeroSection = () => {
  const isMobile = useIsMobile();
  useScrollReveal();
  useEnhancedParallax();

  return (
    <section className="relative overflow-hidden min-h-screen sm:min-h-[90vh] md:min-h-screen flex items-center bg-gradient-hero text-primary-foreground -mt-2 sm:pt-2 lg:-mt-20">
      {/* Enhanced Parallax Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] parallax-slow"></div>
      
      {/* Floating morphing blobs - simplified on mobile */}
      <div className="absolute top-20 right-10 w-32 h-32 sm:w-72 sm:h-72 md:w-96 md:h-96 morphing-blob opacity-10 sm:opacity-20 parallax-medium"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-accent/4 sm:bg-accent/8 rounded-full blur-3xl parallax-fast animate-blob-bounce"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-primary/3 sm:bg-primary/5 rounded-full blur-3xl parallax-slow animate-tilt"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pt-6 sm:pb-16 lg:py-12 xl:py-16">
        {isMobile ? (
          // Mobile Layout - Simplified and focused
          <div className="text-center space-y-8 max-w-sm mx-auto">
            <div className="enhanced-reveal inline-flex items-center rounded-full px-3 py-2 text-xs font-medium bg-primary/30 text-primary border border-primary/50 backdrop-blur-sm">
              🚀 Made in Germany
            </div>
            
            <div className="enhanced-reveal stagger-delay-1 space-y-3">
              <h1 className="text-white text-3xl font-bold leading-tight drop-shadow-xl">
                KI spart dir{" "}
                <GradientText animated>
                  <span className="font-extrabold">80% Zeit</span>
                </GradientText>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                Professionelle Automatisierung für dein Business
              </p>
            </div>
            
            <div className="enhanced-reveal stagger-delay-2 space-y-6">
              <CalendlyButton 
                text="Kostenloses Gespräch (30 Min)" 
                variant="cta" 
                size="lg" 
                className="text-base px-8 py-5 shadow-primary gradient-primary hover:shadow-elevated transition-all duration-300 min-h-16 w-full font-semibold" 
                icon={false} 
              />
              
              <Button 
                variant="link" 
                className="text-sm text-white/70 hover:text-white"
                onClick={() => {
                  const element = document.getElementById('lead-magnets');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Oder kostenlose Ressourcen nutzen ↓
              </Button>
            </div>
          </div>
        ) : (
          // Desktop Layout - Full featured
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
              <div className="enhanced-reveal inline-flex items-center rounded-full px-3 py-2 text-xs sm:text-sm font-medium bg-primary/30 text-primary border border-primary/50 mb-4 sm:mb-6 mt-8 sm:mt-12 backdrop-blur-sm">
                🚀 KI-Assistenten - Made in Germany
              </div>
              
              <div className="enhanced-reveal stagger-delay-1 mb-4 sm:mb-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-xl">
                Revolutioniere dein Business mit{" "}
                <GradientText animated>
                  <span className="font-extrabold nowrap-ki-assistant drop-shadow-xl" data-text="KI-Assistenten">
                    KI-Assistenten
                  </span>
                </GradientText>
              </div>
              
              <div className="enhanced-reveal stagger-delay-2 text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed drop-shadow-lg">
                <TypingAnimation text="Professionelle KI-Automatisierung für deutsche Unternehmen." speed={30} delay={1000} />
                <br />
                <span className="text-white font-semibold gradient-text-animated drop-shadow-lg"> Bis zu 80% weniger Arbeitszeit</span> bei 
                höchster Qualität und DSGVO-Konformität.
              </div>
              
              <div className="enhanced-reveal stagger-delay-3 flex flex-col gap-4 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
                <CalendlyButton 
                  text="Kostenloses Erstgespräch sichern (30 Min.)" 
                  variant="cta" 
                  size="lg" 
                  className="text-sm sm:text-base px-6 py-4 shadow-primary gradient-primary hover:shadow-elevated transition-all duration-300 min-h-14 whitespace-normal text-center leading-relaxed w-full" 
                  icon={false} 
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <EnhancedButton variant="outline" size="lg" asChild magnetic className="text-sm px-4 py-3 border-2 border-white/60 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white hover:shadow-elevated transition-all duration-300 min-h-12">
                    <Link to="/roi-rechner">Kosteneinsparungen berechnen</Link>
                  </EnhancedButton>
                  <EnhancedButton variant="ghost" size="lg" asChild glowEffect className="text-sm px-4 py-3 text-white/90 bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300 min-h-12">
                    <Link to="/standard-agenten">Agenten ansehen</Link>
                  </EnhancedButton>
                </div>
                <div className="text-center">
                  <Button variant="link" className="text-sm text-white/80 hover:text-white drop-shadow-lg" onClick={() => {
                  const element = document.getElementById('lead-magnets');
                  element?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}>
                    Oder starten Sie mit kostenlosen Ressourcen
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
        )}
      </div>
    </section>
  );
};
export default HeroSection;