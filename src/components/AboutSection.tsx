import { Award, Shield, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

const AboutSection = () => {
  useScrollReveal();

  return (
    <section id="ueber-uns" className="section-padding bg-background relative overflow-hidden py-16">
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="max-w-4xl">
          <h2 className="scroll-reveal text-4xl lg:text-5xl font-thin text-foreground mb-8">
            Warum KI2USE?
          </h2>
          
          <div className="scroll-reveal stagger-delay-1 text-lg text-muted-foreground leading-relaxed max-w-3xl space-y-6">
            <p>
              Der Mittelstand braucht keine überladenen Technologie-Versprechen, sondern praxisnahe Lösungen. 
              Wir bei KI2USE glauben daran, dass KI kein Hexenwerk sein muss – sie sollte einfach nur funktionieren.
            </p>
            <p>
              Als zertifizierter KI-Manager (IHK Düsseldorf) unterstütze ich Unternehmen dabei, 
              die richtigen Anwendungen zu finden, Fördermöglichkeiten zu nutzen und echte Mehrwerte zu schaffen.
            </p>
          </div>

          <div className="scroll-scale stagger-delay-2 grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-start space-x-4 p-6 bg-card/30 rounded-xl border border-card-border/50">
              <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-medium text-foreground mb-1">IHK-zertifiziert</h3>
                <p className="text-sm text-muted-foreground">Geprüfter KI-Manager – IHK Düsseldorf</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-card/30 rounded-xl border border-card-border/50">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-medium text-foreground mb-1">DSGVO-konform</h3>
                <p className="text-sm text-muted-foreground">Datenschutz von Anfang an mitgedacht</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-card/30 rounded-xl border border-card-border/50">
              <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-medium text-foreground mb-1">Regional verankert</h3>
                <p className="text-sm text-muted-foreground">Persönlicher Ansprechpartner in Köln</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
