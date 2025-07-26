import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroRobot from "@/assets/hero-robot.jpg";

const HeroSection = () => {
  return (
    <section className="gradient-subtle section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="mb-6 leading-tight">
              KI-Agenten & Schulungen von{" "}
              <span className="text-primary">KI2USE</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Ihre effiziente Lösung für deutsche KMU.{" "}
              <span className="text-accent font-semibold">
                Prozesse automatisiert mit n8n – auch bei uns!
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="xl" asChild>
                <Link to="/kontakt">Kostenloses Beratungsgespräch vereinbaren</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/standard-agenten">Standard-Agenten ansehen</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroRobot}
                alt="Moderne KI-Roboter-Illustration für Unternehmensautomatisierung"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card shadow-elevated rounded-xl p-6 border border-card-border">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Automatisierte Prozesse</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card shadow-elevated rounded-xl p-6 border border-card-border">
              <div className="text-2xl font-bold text-accent">n8n</div>
              <div className="text-sm text-muted-foreground">Powered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;