import { useScrollReveal, useParallax, useScrollFade, useMagneticCursor } from "@/hooks/useScrollAnimations";
import { useSEO } from "@/hooks/useSEO";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, Users, Monitor, MapPin, Presentation, 
  CheckCircle, Lightbulb, TrendingUp, Shield, Euro,
  Calendar, BookOpen, Building2, Globe
} from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";

const Beratung = () => {
  useScrollReveal();
  useParallax();
  useScrollFade();
  useMagneticCursor();

  useSEO({
    title: "KI-Beratung für den Mittelstand | KI2USE",
    description: "Persönliche KI-Beratung für KMUs: Strategie, Einführung, Fördermittel. Vor Ort, online oder auf Events. Verständlich, bezahlbar, DSGVO-konform.",
    canonical: "/beratung",
  });

  const formats = [
    {
      icon: Users,
      title: "Einzelberatung",
      description: "Persönliche 1:1-Beratung, zugeschnitten auf Ihre Unternehmenssituation. Wir analysieren Ihre Prozesse und entwickeln eine individuelle KI-Strategie.",
      details: ["Individuelle Prozessanalyse", "Maßgeschneiderter Fahrplan", "Persönlicher Ansprechpartner"],
      duration: "1–3 Stunden"
    },
    {
      icon: MapPin,
      title: "Vor-Ort-Beratung",
      description: "Wir kommen zu Ihnen ins Unternehmen, erleben Ihre Abläufe hautnah und identifizieren Automatisierungspotenziale direkt am Arbeitsplatz.",
      details: ["Begehung & Prozessaufnahme", "Workshop mit Ihrem Team", "Sofort umsetzbare Empfehlungen"],
      duration: "Halber oder ganzer Tag"
    },
    {
      icon: Monitor,
      title: "Online-Beratung",
      description: "Flexible Beratung per Videocall – ideal für erste Gespräche, Follow-ups oder wenn eine Anreise nicht nötig ist.",
      details: ["Flexibel planbar", "Bildschirmfreigabe & Live-Demos", "Aufzeichnung auf Wunsch"],
      duration: "30–90 Minuten"
    },
    {
      icon: Presentation,
      title: "Events & Workshops",
      description: "KI-Einführung für Ihr gesamtes Team oder Branchenveranstaltungen. Interaktiv, praxisnah und auf Ihre Branche zugeschnitten.",
      details: ["Impulsvorträge & Keynotes", "Hands-on Workshops", "Branchenspezifische Inhalte"],
      duration: "2 Stunden bis ganztägig"
    }
  ];

  const topics = [
    {
      icon: Lightbulb,
      title: "KI-Einführung & Strategie",
      description: "Wo lohnt sich KI in Ihrem Unternehmen? Wir identifizieren die Prozesse mit dem größten Hebel und erstellen einen realistischen Umsetzungsplan.",
      points: ["Potenzialanalyse Ihrer Geschäftsprozesse", "Priorisierung nach Aufwand und Nutzen", "Technologie-Empfehlungen ohne Vendor-Lock-in", "Realistische Zeitplanung und Meilensteine"]
    },
    {
      icon: Euro,
      title: "Fördermittel & Zuschüsse",
      description: "Bis zu 50% Ihrer KI-Investition können durch staatliche Förderprogramme gedeckt werden. Wir kennen die Programme und unterstützen Sie bei der Antragstellung.",
      points: ["Digital Jetzt – bis zu 50.000€ Förderung", "ZIM – für innovative Entwicklungsprojekte", "go-digital – Beratungsförderung für KMU", "Regionale Förderprogramme der Bundesländer"]
    },
    {
      icon: Shield,
      title: "DSGVO & Compliance",
      description: "KI rechtssicher einsetzen. Wir beraten Sie zu Datenschutz, AI Act und branchenspezifischen Regularien – verständlich und praxisorientiert.",
      points: ["DSGVO-konforme KI-Implementierung", "EU AI Act Einordnung", "Datenschutz-Folgenabschätzung", "Dokumentation & Nachweispflichten"]
    },
    {
      icon: TrendingUp,
      title: "Change Management",
      description: "Die beste Technologie bringt nichts, wenn das Team nicht mitzieht. Wir helfen bei der Einführung und sorgen für Akzeptanz im Unternehmen.",
      points: ["Mitarbeiter-Kommunikation", "Schulungskonzepte für Teams", "Pilotprojekte zum Einstieg", "Erfolgsmessung und Iteration"]
    }
  ];

  const whyUs = [
    { icon: Building2, title: "Mittelstandserfahrung", description: "Wir kennen die Herausforderungen von KMUs – kein Enterprise-Overhead, sondern pragmatische Lösungen." },
    { icon: BookOpen, title: "Verständliche Sprache", description: "Kein Tech-Jargon. Wir erklären KI so, dass jeder im Team es versteht und anwenden kann." },
    { icon: Globe, title: "Herstellerunabhängig", description: "Wir empfehlen die beste Lösung für Sie – ohne Bindung an bestimmte Anbieter oder Plattformen." },
    { icon: Shield, title: "DSGVO von Anfang an", description: "Datenschutz ist kein Nachgedanke, sondern Grundlage jeder unserer Empfehlungen." }
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
              KI-Beratung, die{" "}
              <span className="text-primary font-light">Klarheit schafft</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              Von der ersten Orientierung bis zur fertigen Strategie – wir begleiten Sie 
              bei der KI-Einführung. Persönlich, verständlich und mit Blick auf Fördermöglichkeiten.
            </p>
          </div>
        </div>
      </section>

      {/* Beratungsformate */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="mb-6 font-thin tracking-tight">
              Beratung, wie sie zu{" "}
              <span className="text-primary font-light">Ihnen passt</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Ob persönlich vor Ort, flexibel online oder als Team-Event – 
              wählen Sie das Format, das am besten zu Ihrer Situation passt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formats.map((format, index) => {
              const IconComponent = format.icon;
              return (
                <div
                  key={index}
                  className="border border-card-border/30 rounded-2xl p-8 scroll-reveal hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light">{format.title}</h3>
                      <span className="text-sm text-muted-foreground font-light">{format.duration}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-light mb-6 leading-relaxed">
                    {format.description}
                  </p>
                  <ul className="space-y-2">
                    {format.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm font-light">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beratungsthemen */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="mb-6 font-thin tracking-tight">
              Worüber wir{" "}
              <span className="text-primary font-light">beraten</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Von der strategischen Orientierung über Fördermittel bis zur 
              rechtssicheren Umsetzung – alles aus einer Hand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {topics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <div
                  key={index}
                  className="border border-card-border/30 rounded-2xl p-8 scroll-reveal hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-light">{topic.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-light mb-6 leading-relaxed">
                    {topic.description}
                  </p>
                  <ul className="space-y-2">
                    {topic.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm font-light">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fördermittel Highlight */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto scroll-reveal">
            <div className="border border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-6">
                  <Euro className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-thin mb-4 tracking-tight">
                  Bis zu 50% Förderung für Ihre KI-Investition
                </h2>
                <p className="text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                  Der Staat fördert die Digitalisierung des Mittelstands aktiv. 
                  Wir helfen Ihnen, die passenden Programme zu finden und erfolgreich zu beantragen.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="border border-card-border/30 rounded-xl p-5">
                  <h4 className="font-light mb-2">Digital Jetzt</h4>
                  <p className="text-sm text-muted-foreground font-light">Bis zu 50.000€ für digitale Technologien und Mitarbeiterqualifizierung in KMUs.</p>
                </div>
                <div className="border border-card-border/30 rounded-xl p-5">
                  <h4 className="font-light mb-2">ZIM</h4>
                  <p className="text-sm text-muted-foreground font-light">Förderung innovativer Entwicklungsprojekte – ideal für maßgeschneiderte KI-Lösungen.</p>
                </div>
                <div className="border border-card-border/30 rounded-xl p-5">
                  <h4 className="font-light mb-2">go-digital</h4>
                  <p className="text-sm text-muted-foreground font-light">Beratungsförderung speziell für kleine und mittlere Unternehmen bis 100 Mitarbeiter.</p>
                </div>
                <div className="border border-card-border/30 rounded-xl p-5">
                  <h4 className="font-light mb-2">Länderprogramme</h4>
                  <p className="text-sm text-muted-foreground font-light">Regionale Fördertöpfe der Bundesländer – oft mit schnellerer Bewilligung.</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground font-light">
                  Im Erstgespräch prüfen wir kostenlos, welche Förderungen für Ihr Vorhaben in Frage kommen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum KI2USE */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="mb-6 font-thin tracking-tight">
              Warum mit{" "}
              <span className="text-primary font-light">KI2USE</span> beraten?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="border border-card-border/30 rounded-xl p-6 text-center scroll-reveal hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-light mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-light">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <div className="border-t border-card-border/20 pt-12">
              <h2 className="mb-6 font-thin tracking-tight">
                Lassen Sie uns sprechen
              </h2>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed font-light">
                In 30 Minuten finden wir heraus, wie KI Ihrem Unternehmen konkret helfen kann – 
                und welche Fördermittel Sie dabei unterstützen.
              </p>

              <CalendlyButton
                text="Kostenloses Erstgespräch vereinbaren"
                variant="cta"
                size="xl"
                icon={false}
              />

              <div className="mt-8 border border-card-border/20 rounded-xl p-6">
                <p className="text-sm leading-relaxed text-muted-foreground font-light">
                  <span className="text-foreground">Unverbindlich & ehrlich:</span> Wir sagen Ihnen offen, 
                  ob und wo KI für Ihr Unternehmen Sinn macht – ohne Verkaufsdruck und ohne Tech-Blabla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Beratung;
