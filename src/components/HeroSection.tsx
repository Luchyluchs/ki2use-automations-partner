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
        {/* Mobile Layout - More compelling and engaging */}
        <div className="block lg:hidden text-center space-y-6 max-w-xs mx-auto">
          <div className="enhanced-reveal inline-flex items-center rounded-full px-3 py-2 text-xs font-medium bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white border border-green-400/30 backdrop-blur-sm animate-pulse">
            ✅ 2.847 deutsche Unternehmen sparen bereits Zeit
          </div>
          
          <div className="enhanced-reveal stagger-delay-1 space-y-4">
            <h1 className="text-white text-2xl font-bold leading-tight drop-shadow-xl">
              <span className="text-red-400 font-extrabold">Schluss</span> mit{" "}
              <span className="line-through text-white/60">Überstunden</span>
              <br />
              <GradientText animated>
                <span className="font-extrabold text-3xl">KI macht's für dich</span>
              </GradientText>
            </h1>
            <p className="text-base text-white/90 leading-relaxed font-medium">
              🎯 <span className="text-green-400 font-semibold">Bis zu 32h/Woche</span> sparen<br />
              💰 <span className="text-blue-400 font-semibold">Ab 0€</span> starten<br />
              🚀 <span className="text-yellow-400 font-semibold">In 7 Tagen</span> live
            </p>
          </div>
          
          <div className="enhanced-reveal stagger-delay-2 space-y-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-white/80 text-sm mb-3 italic">
                "Endlich kann ich mich auf mein Business fokussieren statt auf Routine-Aufgaben!"
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-white/60">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">M</span>
                <span>Marcus K. | Geschäftsführer</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <CalendlyButton 
                text="🔥 Kostenloses Beratungsgespräch sichern" 
                variant="cta" 
                size="lg" 
                className="text-sm px-6 py-4 shadow-lg shadow-primary/30 gradient-primary hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 min-h-14 w-full font-bold animate-pulse" 
                icon={false} 
              />
              
              <p className="text-xs text-white/60">
                ⏰ Nur noch <span className="text-red-400 font-semibold">3 Plätze</span> diese Woche verfügbar
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Full featured */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
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
      </div>
    </section>
  );
};
export default HeroSection;