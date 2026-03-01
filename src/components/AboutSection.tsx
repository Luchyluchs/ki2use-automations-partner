import { Award, Shield, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

const AboutSection = () => {
  useScrollReveal();

  return (
    <section id="ueber-uns" className="section-padding relative overflow-hidden py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          <h2 className="scroll-reveal text-3xl sm:text-4xl lg:text-5xl font-thin text-foreground mb-6 sm:mb-8">
            Warum KI2USE?
          </h2>
          
          <div className="scroll-reveal stagger-delay-1 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl space-y-4 sm:space-y-6">
            <p>
              Der Mittelstand braucht keine überladenen Technologie-Versprechen, sondern praxisnahe Lösungen. 
              KI2USE steht dafür, dass KI kein Hexenwerk sein muss – sie sollte einfach nur funktionieren.
            </p>
            <p>
              Als zertifizierter KI-Manager (IHK Düsseldorf) unterstütze ich Unternehmen dabei, 
              die richtigen Anwendungen zu finden, Fördermöglichkeiten zu nutzen und echte Mehrwerte zu schaffen.
            </p>
          </div>

          <div className="scroll-scale stagger-delay-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
             <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-card/30 rounded-xl border border-card-border/50">
              <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-medium text-foreground mb-1">IHK-zertifiziert</h3>
                <p className="text-sm text-muted-foreground">Geprüfter KI-Manager – IHK Düsseldorf</p>
              </div>
            </div>
             <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-card/30 rounded-xl border border-card-border/50">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-medium text-foreground mb-1">DSGVO-konform</h3>
                <p className="text-sm text-muted-foreground">Datenschutz von Anfang an mitgedacht</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-card/30 rounded-xl border border-card-border/50 sm:col-span-2 md:col-span-1">
              <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-medium text-foreground mb-1">Deutschlandweit</h3>
                <p className="text-sm text-muted-foreground">Persönlicher Ansprechpartner für Ihr Projekt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
