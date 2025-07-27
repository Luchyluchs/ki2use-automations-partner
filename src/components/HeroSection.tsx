import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import humanRobotHandshake from "@/assets/human-robot-handshake.jpg";
const HeroSection = () => {
  return <section className="gradient-subtle section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left fade-in-element order-2 lg:order-1 lg:pr-8">
            <h1 className="mb-6 leading-tight scale-in-element text-3xl md:text-4xl lg:text-5xl">
              KI-Agenten & Schulungen von{" "}
              <span className="text-primary">KI2USE</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed fade-in-element">
              Für KMUs, Startups, Gastronomie und Friseurbetriebe.{" "}
              <span className="text-accent font-semibold">
                KI Agenten nach deutschen Normen.
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-element">
              <Button variant="cta" size="xl" asChild className="hover-scale">
                <Link to="/kontakt">Kostenloses Beratungsgespräch vereinbaren</Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="hover-scale">
                <Link to="/standard-agenten">Standard-Agenten ansehen</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in-element order-1 lg:order-2 lg:pl-8">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated hover-scale max-w-lg mx-auto lg:max-w-none">
              <img
                src={humanRobotHandshake}
                alt="Erfolgreiche Zusammenarbeit zwischen Mensch und KI - Partnerschaftlicher Handschlag"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating Stats */}
            
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;