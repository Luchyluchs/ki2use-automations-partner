import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Clock, TrendingUp, Euro, Zap } from "lucide-react";

const ROICatcherSection = () => {
  const stats = [
    {
      icon: Euro,
      value: "40-60%",
      label: "Kosteneinsparung",
      description: "durch Automatisierung wiederkehrender Aufgaben"
    },
    {
      icon: Clock,
      value: "20+ Std.",
      label: "Zeit pro Woche",
      description: "die Ihre Mitarbeiter für wichtigere Aufgaben nutzen können"
    },
    {
      icon: TrendingUp,
      value: "3-6 Monate",
      label: "ROI-Zeitraum",
      description: "bis sich die Investition vollständig amortisiert"
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Verfügbarkeit",
      description: "Ihre KI-Agenten arbeiten rund um die Uhr"
    }
  ];

  return (
    <section className="pt-2 pb-8 lg:pt-4 lg:pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in-element">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            Jetzt handeln - Ihre Konkurrenz automatisiert bereits
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 scale-in-element">
            Während Sie warten, verlieren Sie{" "}
            <span className="text-primary">täglich Geld</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            KI-Agenten sind keine Zukunftsmusik mehr – sie arbeiten heute schon in 
            tausenden Unternehmen und sparen dabei Zeit und Kosten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-card border border-card-border rounded-xl p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-card border border-card-border rounded-2xl p-8 text-center shadow-card">
          <h3 className="text-2xl font-bold mb-4">
            Warum <span className="text-primary">jetzt</span> der richtige Zeitpunkt ist
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
            <div className="space-y-2">
              <div className="font-semibold text-primary">Technologie ist reif</div>
              <div className="text-sm text-muted-foreground">
                KI-Agenten sind ausgereift, zuverlässig und sofort einsetzbar
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="font-semibold text-primary">Konkurrenzvorsprung</div>
              <div className="text-sm text-muted-foreground">
                Frühe Adopter gewinnen entscheidende Marktvorteile
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="font-semibold text-primary">Fachkräftemangel</div>
              <div className="text-sm text-muted-foreground">
                Automatisierung kompensiert fehlende Arbeitskräfte
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="hover-scale">
              <Link to="/contact">
                Kostenlose Beratung sichern
              </Link>
            </Button>
            <Button variant="outline" asChild className="hover-scale">
              <Link to="/standard-agenten">
                Agenten-Rechner ansehen
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICatcherSection;