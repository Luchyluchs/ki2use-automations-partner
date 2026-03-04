import { useSEO, SEOTemplates } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollAnimations";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle, ArrowRight, AlertTriangle, Lightbulb,
  TrendingUp, Shield, Building2, Users, Zap, Target,
  Clock, Euro, BookOpen, ChevronDown
} from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const KIEinfuehrung = () => {
  useScrollReveal();

  useSEO({
    ...SEOTemplates.kiEinfuehrung,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Was kostet eine KI-Einführung im Mittelstand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Kosten einer KI-Einführung variieren je nach Umfang und Komplexität. Einfache Automatisierungen starten ab 2.000 Euro, umfassende KI-Projekte liegen zwischen 5.000 und 25.000 Euro. Durch staatliche Förderprogramme wie Digital Jetzt oder ZIM können bis zu 50% der Kosten gedeckt werden. KI2USE prüft kostenlos Ihre Förderfähigkeit."
          }
        },
        {
          "@type": "Question",
          "name": "Wie lange dauert eine KI-Einführung?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eine typische KI-Einführung dauert 4 bis 8 Wochen – von der Erstanalyse bis zum produktiven Einsatz. Einfache Automatisierungen (z.B. Chatbot oder E-Mail-Assistent) können bereits innerhalb von 1-2 Wochen live gehen. Komplexere Projekte mit individueller Entwicklung benötigen 6-12 Wochen."
          }
        },
        {
          "@type": "Question",
          "name": "Ist KI-Einführung auch für kleine Unternehmen sinnvoll?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, gerade kleine Unternehmen profitieren überproportional von KI-Einführung. Wiederkehrende Aufgaben wie E-Mail-Beantwortung, Terminbuchung oder Kundenanfragen lassen sich mit geringem Budget automatisieren. Die Zeitersparnis von 40-75% pro automatisiertem Prozess macht KI auch für Unternehmen ab 5 Mitarbeitern wirtschaftlich."
          }
        },
        {
          "@type": "Question",
          "name": "Brauche ich technisches Vorwissen für eine KI-Einführung?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nein, technisches Vorwissen ist nicht erforderlich. KI2USE übernimmt die gesamte technische Umsetzung und schult Ihr Team im Umgang mit den neuen KI-Werkzeugen. Die Bedienung moderner KI-Assistenten ist bewusst intuitiv gestaltet – vergleichbar mit der Nutzung einer App auf dem Smartphone."
          }
        },
        {
          "@type": "Question",
          "name": "Sind KI-Lösungen DSGVO-konform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alle KI-Lösungen von KI2USE sind vollständig DSGVO-konform. Datenschutz wird von Anfang an in die Konzeption einbezogen (Privacy by Design). Daten werden ausschließlich auf europäischen Servern verarbeitet, und alle Prozesse entsprechen den deutschen und europäischen Datenschutzbestimmungen."
          }
        }
      ]
    }
  });

  const processSteps = [
    {
      step: "1",
      title: "Erstgespräch und Potenzialanalyse",
      description: "In einem kostenlosen 20-30-minütigen Gespräch analysiert KI2USE Ihre aktuelle Situation. Welche Prozesse sind zeitintensiv? Wo gibt es Engpässe? Welche Aufgaben wiederholen sich täglich? Aus dieser Analyse entsteht eine erste Einschätzung, welche KI-Anwendungen den größten Nutzen bringen.",
      icon: Target
    },
    {
      step: "2",
      title: "Prozessaufnahme und Use-Case-Definition",
      description: "KI2USE dokumentiert Ihre relevanten Geschäftsprozesse im Detail. Gemeinsam werden die vielversprechendsten Use Cases priorisiert – basierend auf Einsparpotenzial, Umsetzbarkeit und strategischer Bedeutung. Das Ergebnis ist ein konkreter Fahrplan mit klaren Meilensteinen.",
      icon: BookOpen
    },
    {
      step: "3",
      title: "Fördermittelprüfung und Finanzierung",
      description: "Vor dem Start prüft KI2USE, welche staatlichen Förderprogramme für Ihr Vorhaben infrage kommen. Programme wie Digital Jetzt, ZIM oder Landesförderungen können bis zu 50% der Investitionskosten decken. KI2USE vermittelt bei Bedarf an spezialisierte Förderberater.",
      icon: Euro
    },
    {
      step: "4",
      title: "Entwicklung, Konfiguration und Testing",
      description: "Die ausgewählten KI-Lösungen werden implementiert und an Ihre Systeme angebunden. Jede Lösung wird ausgiebig getestet – mit echten Daten und realen Szenarien. Ihr Team wird parallel geschult, damit der Übergang reibungslos verläuft.",
      icon: Zap
    },
    {
      step: "5",
      title: "Rollout und laufende Optimierung",
      description: "Nach dem Go-Live begleitet KI2USE den produktiven Einsatz. Regelmäßige Reviews stellen sicher, dass die KI-Assistenten optimal arbeiten. Bei Bedarf werden Anpassungen vorgenommen und weitere Automatisierungspotenziale erschlossen.",
      icon: TrendingUp
    }
  ];

  const commonMistakes = [
    {
      title: "Zu viel auf einmal wollen",
      description: "Viele Unternehmen versuchen, sofort alle Prozesse zu automatisieren. Besser: Mit einem klar definierten Use Case starten, Erfahrung sammeln und dann schrittweise ausbauen."
    },
    {
      title: "Kein klares Ziel definieren",
      description: "KI-Einführung ohne messbare Ziele führt zu Enttäuschung. Definieren Sie vorab: Was soll die KI konkret leisten? Wie messen Sie den Erfolg? Welche KPIs sind relevant?"
    },
    {
      title: "Das Team nicht mitnehmen",
      description: "KI-Werkzeuge werden nur genutzt, wenn die Mitarbeiter sie verstehen und akzeptieren. Schulungen und Change-Management sind kein Nice-to-have, sondern erfolgsentscheidend."
    },
    {
      title: "Datenschutz als Nachgedanken behandeln",
      description: "DSGVO-Konformität muss von Anfang an Teil der Planung sein. Nachträgliche Anpassungen sind teuer und riskant. Privacy by Design spart langfristig Kosten und Nerven."
    },
    {
      title: "Auf den falschen Anbieter setzen",
      description: "Nicht jeder KI-Anbieter versteht den deutschen Mittelstand. Achten Sie auf DSGVO-Expertise, lokale Referenzen und eine nachvollziehbare Methodik – keine Black-Box-Lösungen."
    }
  ];

  const industries = [
    { name: "Handwerk & Bau", examples: "Terminbuchung, Angebotskalkulation, Kundenkommunikation", icon: Building2 },
    { name: "Dienstleister & Agenturen", examples: "Projektmanagement, Lead-Generierung, Content-Erstellung", icon: Users },
    { name: "Handel & E-Commerce", examples: "Kundenservice-Chatbot, Bestellverwaltung, Produktbeschreibungen", icon: TrendingUp },
    { name: "Gesundheitswesen", examples: "Terminplanung, Patientenkommunikation, Dokumentation", icon: Shield },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              KI-Einführung für deutsche Unternehmen
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              KI-Einführung im Mittelstand: Der komplette Leitfaden für 2025
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Künstliche Intelligenz ist kein Zukunftsthema mehr – sie ist Gegenwart. Deutsche Unternehmen, die jetzt KI einführen, 
              sichern sich entscheidende Wettbewerbsvorteile. Dieser Leitfaden zeigt Ihnen, wie eine erfolgreiche KI-Einführung 
              konkret abläuft, welche Fehler Sie vermeiden sollten und wie Sie staatliche Förderung nutzen können.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton className="text-lg px-8 py-4" />
            <Link to="/standard-agenten">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 w-full">
                KI-Agenten entdecken <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Was ist KI-Einführung */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Was bedeutet KI-Einführung konkret?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              KI-Einführung beschreibt den systematischen Prozess, Künstliche Intelligenz in bestehende Geschäftsprozesse zu integrieren. 
              Dabei geht es nicht darum, Menschen zu ersetzen, sondern repetitive, zeitraubende Aufgaben zu automatisieren – damit sich 
              Ihre Mitarbeiter auf wertschöpfende Tätigkeiten konzentrieren können.
            </p>
            <p>
              Für den deutschen Mittelstand bedeutet das konkret: E-Mails, die sich selbst kategorisieren und beantworten. Chatbots, 
              die Kundenanfragen rund um die Uhr bearbeiten. Assistenten, die Termine buchen, Angebote erstellen oder Social-Media-Beiträge 
              verfassen. Die Technologie ist ausgereift, bezahlbar und – richtig umgesetzt – bereits nach wenigen Wochen produktiv.
            </p>
            <p>
              Der entscheidende Unterschied zu großen Konzernen: KMU können KI deutlich schneller einführen. Kürzere Entscheidungswege, 
              weniger Legacy-Systeme und überschaubare Prozesse machen den Mittelstand zum idealen Kandidaten für KI-Einführung. 
              Studien zeigen, dass KMU durch KI-Einführung durchschnittlich 40-75% Zeitersparnis bei den automatisierten Prozessen erzielen.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Schritte-Prozess */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            KI-Einführung in 5 Schritten – Der KI2USE-Prozess
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Ein bewährter, strukturierter Ansatz, der speziell für deutsche Unternehmen entwickelt wurde.
          </p>
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Schritt {step.step}: {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typische Fehler */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            5 typische Fehler bei der KI-Einführung – und wie Sie sie vermeiden
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Aus über 50 KI-Projekten im deutschen Mittelstand kennt KI2USE die häufigsten Stolpersteine.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-card">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold text-foreground">{mistake.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{mistake.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branchen */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Für welche Branchen lohnt sich KI-Einführung?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            KI-Einführung ist branchenübergreifend sinnvoll. Hier sind konkrete Beispiele, wie verschiedene Branchen profitieren.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <industry.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{industry.name}</h3>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Typische KI-Anwendungen:</span> {industry.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Häufige Fragen zur KI-Einführung
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="kosten" className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">Was kostet eine KI-Einführung im Mittelstand?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Die Kosten variieren je nach Umfang und Komplexität. Einfache Automatisierungen starten ab 2.000 Euro, umfassende 
                KI-Projekte liegen zwischen 5.000 und 25.000 Euro. Durch staatliche Förderprogramme wie Digital Jetzt oder ZIM 
                können bis zu 50% der Kosten gedeckt werden. KI2USE prüft kostenlos Ihre Förderfähigkeit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="dauer" className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">Wie lange dauert eine KI-Einführung?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Eine typische KI-Einführung dauert 4 bis 8 Wochen – von der Erstanalyse bis zum produktiven Einsatz. 
                Einfache Automatisierungen können bereits innerhalb von 1-2 Wochen live gehen. Komplexere Projekte 
                mit individueller Entwicklung benötigen 6-12 Wochen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="kleine-unternehmen" className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">Ist KI-Einführung auch für kleine Unternehmen sinnvoll?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Ja, gerade kleine Unternehmen profitieren überproportional. Wiederkehrende Aufgaben wie E-Mail-Beantwortung, 
                Terminbuchung oder Kundenanfragen lassen sich mit geringem Budget automatisieren. Die Zeitersparnis von 40-75% 
                pro automatisiertem Prozess macht KI auch für Unternehmen ab 5 Mitarbeitern wirtschaftlich.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="vorwissen" className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">Brauche ich technisches Vorwissen?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Nein, technisches Vorwissen ist nicht erforderlich. KI2USE übernimmt die gesamte technische Umsetzung und 
                schult Ihr Team im Umgang mit den neuen KI-Werkzeugen. Die Bedienung moderner KI-Assistenten ist bewusst 
                intuitiv gestaltet – vergleichbar mit der Nutzung einer App auf dem Smartphone.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="dsgvo" className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">Sind KI-Lösungen DSGVO-konform?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Alle KI-Lösungen von KI2USE sind vollständig DSGVO-konform. Datenschutz wird von Anfang an in die Konzeption 
                einbezogen (Privacy by Design). Daten werden ausschließlich auf europäischen Servern verarbeitet.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Bereit für Ihre KI-Einführung?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Kostenloses Erstgespräch in 20-30 Minuten. Unverbindlich, praxisnah und auf Ihre Situation zugeschnitten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton className="text-lg px-8 py-4" />
            <Link to="/foerderung">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 w-full">
                Fördermöglichkeiten prüfen <Euro className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KIEinfuehrung;
