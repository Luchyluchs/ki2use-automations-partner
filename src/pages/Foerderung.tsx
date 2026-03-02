import { useScrollReveal, useParallax, useMagneticCursor } from "@/hooks/useScrollAnimations";
import { useSEO } from "@/hooks/useSEO";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Euro, CheckCircle, FileText, Search,
  ArrowRight, Building2, Landmark, Globe, HandCoins
} from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";

const Foerderung = () => {
  useScrollReveal();
  useParallax();
  useMagneticCursor();

  useSEO({
    title: "KI-Förderung & Zuschüsse für den Mittelstand | KI2USE",
    description: "Bis zu 50% Förderung für Ihre KI-Investition. KI2USE prüft passende Förderprogramme und unterstützt bei der Antragstellung. Kostenlose Erstprüfung.",
    canonical: "/foerderung",
  });

  const programs = [
    {
      icon: Landmark,
      title: "Bundesförderung",
      description: 'Programme wie "Digital Jetzt", "go-digital" oder "Innovationsförderung" des BMWK unterstützen KMUs bei der Digitalisierung.',
      highlight: "Bis zu 50.000 € Zuschuss",
    },
    {
      icon: Building2,
      title: "Landesförderung",
      description: "Jedes Bundesland bietet eigene Programme – von Digitalisierungsprämien bis zu Innovationsgutscheinen.",
      highlight: "Je nach Bundesland verschieden",
    },
    {
      icon: Globe,
      title: "EU-Förderung",
      description: "Europäische Programme wie der EIC Accelerator oder Horizon Europe fördern innovative KI-Projekte.",
      highlight: "Für größere Vorhaben",
    },
    {
      icon: HandCoins,
      title: "Günstige KfW-Kredite",
      description: "Die KfW bietet zinsgünstige Darlehen für Digitalisierungsprojekte – auch kombinierbar mit Zuschüssen.",
      highlight: "Ab 1% Zinsen",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Erstprüfung",
      description: "Im kostenlosen Erstgespräch prüft KI2USE Ihre Förderfähigkeit und identifiziert passende Programme.",
    },
    {
      step: "02",
      title: "Strategie",
      description: "KI2USE erarbeitet eine Förderstrategie und kombiniert Programme für maximale Zuschüsse.",
    },
    {
      step: "03",
      title: "Antragstellung",
      description: "KI2USE unterstützt Sie bei der Antragstellung – von der Projektbeschreibung bis zum Finanzierungsplan.",
    },
    {
      step: "04",
      title: "Umsetzung",
      description: "Nach Bewilligung begleitet KI2USE die Umsetzung und kümmert sich um Verwendungsnachweise.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-6 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </Button>

            <h1 className="mb-6 font-thin tracking-tight">
              Bis zu 50%{" "}
              <span className="text-primary font-light">Förderung</span>{" "}
              für Ihre KI-Investition
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              Der Staat fördert die Digitalisierung des Mittelstands mit zahlreichen Programmen. 
              KI2USE findet die passenden Zuschüsse für Ihr Vorhaben und unterstützt bei der Antragstellung.
            </p>
          </div>
        </div>
      </section>

      {/* Kennzahlen */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto scroll-reveal">
            <div className="border border-primary/20 rounded-2xl p-8 text-center">
              <div className="text-3xl font-light text-primary mb-2">Bis 50%</div>
              <p className="text-muted-foreground font-light">Zuschuss auf Ihre Investition</p>
            </div>
            <div className="border border-primary/20 rounded-2xl p-8 text-center">
              <div className="text-3xl font-light text-primary mb-2">10+</div>
              <p className="text-muted-foreground font-light">Förderprogramme verfügbar</p>
            </div>
            <div className="border border-primary/20 rounded-2xl p-8 text-center">
              <div className="text-3xl font-light text-primary mb-2">Kostenlos</div>
              <p className="text-muted-foreground font-light">Erstprüfung im Beratungsgespräch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Förderprogramme */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="mb-6 font-thin tracking-tight">
              Welche{" "}
              <span className="text-primary font-light">Förderprogramme</span>{" "}
              gibt es?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Von Bundeszuschüssen über Landesprogramme bis zu EU-Förderung – 
              KI2USE kennt die relevanten Programme für KI-Projekte im Mittelstand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="border border-card-border/30 rounded-2xl p-8 scroll-reveal hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light">{program.title}</h3>
                      <span className="text-sm text-primary font-light">{program.highlight}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {program.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="mb-6 font-thin tracking-tight">
              So läuft die{" "}
              <span className="text-primary font-light">Förderung</span> ab
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Von der Erstprüfung bis zur Bewilligung – KI2USE begleitet Sie durch den gesamten Prozess.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((item, index) => (
              <div
                key={index}
                className="border border-card-border/30 rounded-2xl p-6 text-center scroll-reveal hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl font-thin text-primary/40 mb-4">{item.step}</div>
                <h3 className="font-light mb-3 text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto scroll-reveal">
            <div className="border border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-thin mb-4 tracking-tight">
                  Warum Förderung mit KI2USE?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "KI2USE kennt die aktuellen Förderprogramme für KI-Projekte",
                  "Kostenlose Erstprüfung Ihrer Förderfähigkeit",
                  "Unterstützung bei der kompletten Antragstellung",
                  "Kombination mehrerer Programme für maximale Förderung",
                  "Erfahrung mit erfolgreichen Förderanträgen im Mittelstand",
                  "Begleitung von der Beantragung bis zum Verwendungsnachweis",
                ].map((point, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="font-light">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <div className="border-t border-card-border/20 pt-12">
              <h2 className="mb-6 font-thin tracking-tight">
                Förderung sichern – jetzt prüfen lassen
              </h2>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed font-light">
                In einem kostenlosen Erstgespräch prüft KI2USE, welche Förderprogramme 
                für Ihr KI-Vorhaben in Frage kommen.
              </p>

              <CalendlyButton
                text="Kostenlose Förderprüfung vereinbaren"
                variant="cta"
                size="xl"
                icon={false}
              />

              <div className="mt-8 border border-card-border/20 rounded-xl p-6">
                <p className="text-sm leading-relaxed text-muted-foreground font-light">
                  <span className="text-foreground">Kein Risiko:</span> Die Erstprüfung ist kostenlos und unverbindlich. 
                  Sie erfahren sofort, ob und welche Förderung für Ihr Unternehmen möglich ist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Foerderung;
