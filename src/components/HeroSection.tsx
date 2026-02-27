import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import CalendlyButton from "./CalendlyButton";
import InteractiveKIDemo from "./InteractiveKIDemo";
import { useScrollReveal, useEnhancedParallax } from "@/hooks/useScrollAnimations";

const HeroSection = () => {
  useScrollReveal();
  useEnhancedParallax();

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-hero text-white">
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pt-6 sm:pb-16 lg:py-12 xl:py-16">
        {/* Mobile Layout */}
        <div className="block lg:hidden text-left space-y-12 max-w-md mx-auto px-6">
          <div className="enhanced-reveal inline-flex items-center rounded-full px-5 py-2 text-xs font-light bg-white/5 text-white/80 border border-white/10">
            IHK-zertifiziert · Made in Germany
          </div>
          
          <div className="enhanced-reveal stagger-delay-1 space-y-6">
            <h1 className="text-white text-4xl font-thin leading-[1.1] tracking-tight">
              KI für den Mittelstand –{" "}
              <span className="font-light text-primary">
                verständlich, bezahlbar, umsetzbar
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed font-light">
              Wir helfen Unternehmen in Köln und Umgebung, Künstliche Intelligenz sinnvoll einzusetzen – ohne Hype, mit echten Ergebnissen.
            </p>
          </div>
          
          <div className="enhanced-reveal stagger-delay-2 space-y-6">
            <CalendlyButton 
              text="Kostenloses Erstgespräch vereinbaren" 
              variant="cta" 
              size="lg" 
              className="text-base px-8 py-4 w-full font-medium" 
              icon={false} 
            />
            
            <p className="text-xs text-white/50 text-center">
              ✓ Unverbindlich & kostenlos · ✓ 20–30 Min. · ✓ Keine Verpflichtung
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-left space-y-12">
            <div className="enhanced-reveal inline-flex items-center rounded-full px-5 py-2 text-xs font-light bg-white/5 text-white/70 border border-white/10">
              IHK-zertifiziert · Made in Germany
            </div>
            
            <div className="enhanced-reveal stagger-delay-1 mb-8">
              <h1 className="text-white text-5xl lg:text-6xl xl:text-7xl font-thin leading-[1.05] tracking-tight mb-6">
                KI für den Mittelstand
              </h1>
              <h2 className="text-primary text-3xl lg:text-4xl xl:text-5xl font-light leading-[1.1] tracking-tight">
                verständlich, bezahlbar, umsetzbar
              </h2>
            </div>
            
            <div className="enhanced-reveal stagger-delay-2 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-2xl">
              Wir helfen Unternehmen in Köln und Umgebung, Künstliche Intelligenz sinnvoll einzusetzen – ohne Hype, mit echten Ergebnissen.
            </div>
            
            <div className="enhanced-reveal stagger-delay-3 flex flex-col sm:flex-row gap-4 items-start">
              <CalendlyButton 
                text="Kostenloses Erstgespräch vereinbaren" 
                variant="cta" 
                size="lg" 
                className="font-light rounded-full px-8 py-6 text-base" 
                icon={false} 
              />
              
              <Button variant="ghost" size="lg" asChild className="text-white/80 hover:text-white bg-white/5 hover:bg-white/10 font-light rounded-full px-8 py-6 text-base border border-white/10">
                <Link to="/kontakt">Mehr erfahren</Link>
              </Button>
            </div>
          </div>

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
