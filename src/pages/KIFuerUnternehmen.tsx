import { useSEO, SEOTemplates } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollAnimations";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle, ArrowRight, Lightbulb, TrendingUp, Shield,
  Building2, Users, Zap, MessageSquare, Mail, Phone,
  Calendar, BarChart3, Globe, Euro, BookOpen
} from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const KIFuerUnternehmen = () => {
  useScrollReveal();

  useSEO({
    ...SEOTemplates.kiFuerUnternehmen,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Welche KI-Programme gibt es für Unternehmen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Für Unternehmen gibt es zahlreiche KI-Programme: Chatbots für Kundenservice, E-Mail-Assistenten für automatische Kategorisierung und Beantwortung, LinkedIn-Assistenten für Vertrieb, Sprach-Assistenten für Telefonie, Newsletter-Assistenten für Content-Erstellung, Sales-Assistenten für Lead-Management und Terminbuchungs-Assistenten für automatische Planung. KI2USE bietet alle diese Lösungen DSGVO-konform für den deutschen Markt an."
          }
        },
        {
          "@type": "Question",
          "name": "Was kostet KI für Unternehmen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Kosten für KI im Unternehmen hängen vom Umfang ab. Standard-KI-Assistenten starten ab wenigen hundert Euro monatlich. Individuelle KI-Lösungen kosten einmalig zwischen 5.000 und 25.000 Euro. Durch staatliche Förderprogramme können bis zu 50% der Kosten gedeckt werden. Der ROI liegt typischerweise bei 3-6 Monaten."
          }
        },
        {
          "@type": "Question",
          "name": "Ist KI für kleine Unternehmen geeignet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, KI ist besonders für kleine Unternehmen geeignet. Gerade hier können automatisierte Prozesse den größten Unterschied machen: Weniger manuelle Arbeit, schnellere Reaktionszeiten und professionellerer Auftritt – auch ohne große IT-Abteilung. Bereits ab 5 Mitarbeitern ist der Einsatz von KI wirtschaftlich sinnvoll."
          }
        },
        {
          "@type": "Question",
          "name": "Wie finde ich die richtige KI-Lösung für mein Unternehmen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die richtige KI-Lösung hängt von Ihren spezifischen Herausforderungen ab. Empfehlenswert ist eine strukturierte Analyse: Welche Prozesse sind besonders zeitintensiv? Wo gibt es häufige Fehler? Wo wünschen sich Kunden schnellere Reaktionen? Ein kostenfreies Erstgespräch mit KI-Experten hilft, die passenden Anwendungsfälle zu identifizieren."
          }
        },
        {
          "@type": "Question",
          "name": "Kann KI meinen Kundenservice verbessern?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, KI kann den Kundenservice erheblich verbessern. KI-Chatbots beantworten häufige Fragen sofort und rund um die Uhr, E-Mail-Assistenten priorisieren und kategorisieren eingehende Anfragen, und Sprach-Assistenten übernehmen die telefonische Erstbearbeitung. Ergebnis: kürzere Wartezeiten, höhere Kundenzufriedenheit und Entlastung Ihres Teams."
          }
        }
      ]
    }
  });

  const kiApplications = [
    {
      icon: MessageSquare,
      title: "Chatbot-Assistent",
      description: "Beantwortet Kundenanfragen automatisch – 24 Stunden am Tag, 7 Tage die Woche. Lernt aus jeder Interaktion und wird stetig besser. Integriert sich nahtlos in Ihre Website und CRM-Systeme.",
      benefit: "80% weniger manuelle Kundenanfragen"
    },
    {
      icon: Mail,
      title: "E-Mail-Assistent",
      description: "Kategorisiert eingehende E-Mails automatisch, erstellt Antwortvorschläge und leitet dringende Anfragen priorisiert weiter. Spart Ihrem Team täglich Stunden bei der E-Mail-Bearbeitung.",
      benefit: "60% Zeitersparnis bei E-Mails"
    },
    {
      icon: Users,
      title: "LinkedIn-Assistent",
      description: "Pflegt Ihr berufliches Netzwerk automatisch: personalisierte Kontaktanfragen, Follow-up-Nachrichten und Content-Vorschläge. Macht LinkedIn zum systematischen Vertriebskanal.",
      benefit: "3x mehr qualifizierte Kontakte"
    },
    {
      icon: Phone,
      title: "Sprach-Assistent",
      description: "Nimmt Anrufe entgegen, versteht natürliche Sprache und leitet Anfragen intelligent weiter. Bucht Termine, beantwortet Standardfragen und dokumentiert jeden Anruf automatisch.",
      benefit: "Kein Anruf geht mehr verloren"
    },
    {
      icon: BarChart3,
      title: "Sales-Assistent",
      description: "Bewertet Leads automatisch nach Abschlusswahrscheinlichkeit, erstellt personalisierte Follow-up-Sequenzen und hält Ihre Pipeline aktuell. Ihr Vertrieb fokussiert sich auf die vielversprechendsten Kontakte.",
      benefit: "40% höhere Abschlussquote"
    },
    {
      icon: Calendar,
      title: "Terminbuchungs-Assistent",
      description: "Ermöglicht Kunden die selbstständige Online-Buchung, synchronisiert Kalender automatisch und versendet Erinnerungen. Eliminiert den Buchungs-Ping-Pong per E-Mail oder Telefon.",
      benefit: "90% weniger Terminkoordination"
    },
  ];

  const checklistItems = [
    "Sie oder Ihre Mitarbeiter verbringen täglich mehr als 2 Stunden mit wiederkehrenden Aufgaben",
    "Kundenanfragen bleiben manchmal unbeantwortet oder werden verspätet bearbeitet",
    "Ihre Wettbewerber setzen bereits KI ein und gewinnen Marktanteile",
    "Sie möchten wachsen, ohne proportional mehr Personal einzustellen",
    "Ihre Daten liegen in verschiedenen Systemen und werden manuell zusammengeführt",
    "Sie wünschen sich mehr Zeit für strategische Arbeit statt operative Routineaufgaben",
    "Ihre Lead-Generierung und Vertriebsprozesse sind nicht systematisiert",
    "Sie suchen nach Möglichkeiten, den Kundenservice zu verbessern, ohne das Team zu vergrößern"
  ];

  const costBenefitData = [
    { category: "Kundenservice", without: "2-3 Vollzeitkräfte (ca. 90.000-135.000 €/Jahr)", with: "KI-Chatbot + 1 Mitarbeiter (ca. 55.000-70.000 €/Jahr)", saving: "35.000-65.000 €/Jahr" },
    { category: "E-Mail-Management", without: "15-20 Stunden/Woche manuell", with: "2-3 Stunden/Woche mit KI-Unterstützung", saving: "500-800 Arbeitsstunden/Jahr" },
    { category: "Vertrieb & Leads", without: "Manuelle Recherche, 5-10 Kontakte/Tag", with: "Automatisiert, 30-50 qualifizierte Kontakte/Tag", saving: "3-5x mehr Pipeline-Volumen" },
    { category: "Terminplanung", without: "30 Min. pro Terminvereinbarung", with: "Automatisch in unter 1 Minute", saving: "200+ Stunden/Jahr" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              KI für Unternehmen in Deutschland
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              KI für Unternehmen: Welche KI-Programme lohnen sich wirklich?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Künstliche Intelligenz ist keine Spielerei für Großkonzerne. Auch kleine und mittlere Unternehmen in Deutschland 
              können mit den richtigen KI-Programmen messbar Zeit sparen, Kosten senken und den Kundenservice verbessern. 
              Dieser Leitfaden zeigt, welche KI-Anwendungen es gibt, was sie kosten und für wen sie sich lohnen.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton className="text-lg px-8 py-4" />
            <Link to="/roi-rechner">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 w-full">
                ROI berechnen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Überblick KI-Anwendungen */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Welche KI-Programme gibt es für Unternehmen?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Ein Überblick über die wichtigsten KI-Anwendungen, die deutsche KMU heute produktiv einsetzen können.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kiApplications.map((app) => (
              <div key={app.title} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <app.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{app.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{app.description}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <TrendingUp className="h-4 w-4" />
                  {app.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kosten-Nutzen */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Kosten-Nutzen-Vergleich: Lohnt sich KI für mein Unternehmen?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Konkrete Zahlen aus realen Projekten im deutschen Mittelstand.
          </p>
          <div className="space-y-6">
            {costBenefitData.map((item) => (
              <div key={item.category} className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">{item.category}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Ohne KI</p>
                    <p className="text-foreground font-medium">{item.without}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Mit KI</p>
                    <p className="text-foreground font-medium">{item.with}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Einsparung</p>
                    <p className="text-primary font-bold">{item.saving}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkliste */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Checkliste: Ist Ihr Unternehmen bereit für KI?
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Je mehr Punkte zutreffen, desto größer ist Ihr Potenzial durch KI-Einführung.
          </p>
          <div className="space-y-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-foreground font-medium mb-2">
              Treffen 3 oder mehr Punkte zu?
            </p>
            <p className="text-muted-foreground mb-4">
              Dann kann KI Ihrem Unternehmen messbar helfen. Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden, wo der größte Hebel liegt.
            </p>
            <CalendlyButton />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Häufige Fragen zu KI für Unternehmen
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="programme" className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">Welche KI-Programme gibt es für Unternehmen?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Für Unternehmen gibt es zahlreiche KI-Programme: Chatbots für Kundenservice, E-Mail-Assistenten für automatische 
                Kategorisierung und Beantwortung, LinkedIn-Assistenten für Vertrieb, Sprach-Assistenten für Telefonie, 
                Newsletter-Assistenten für Content-Erstellung, Sales-Assistenten für Lead-Management und Terminbuchungs-Assistenten 
                für automatische Planung. KI2USE bietet alle diese Lösungen DSGVO-konform für den deutschen Markt an.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="kosten" className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">Was kostet KI für Unternehmen?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Die Kosten hängen vom Umfang ab. Standard-KI-Assistenten starten ab wenigen hundert Euro monatlich. 
                Individuelle KI-Lösungen kosten einmalig zwischen 5.000 und 25.000 Euro. Durch staatliche Förderprogramme 
                können bis zu 50% der Kosten gedeckt werden. Der ROI liegt typischerweise bei 3-6 Monaten.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="kleine" className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">Ist KI für kleine Unternehmen geeignet?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Ja, KI ist besonders für kleine Unternehmen geeignet. Gerade hier können automatisierte Prozesse den größten 
                Unterschied machen: Weniger manuelle Arbeit, schnellere Reaktionszeiten und professionellerer Auftritt – 
                auch ohne große IT-Abteilung. Bereits ab 5 Mitarbeitern ist der Einsatz von KI wirtschaftlich sinnvoll.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="richtige-loesung" className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">Wie finde ich die richtige KI-Lösung?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Die richtige KI-Lösung hängt von Ihren spezifischen Herausforderungen ab. Empfehlenswert ist eine strukturierte 
                Analyse: Welche Prozesse sind besonders zeitintensiv? Wo gibt es häufige Fehler? Wo wünschen sich Kunden 
                schnellere Reaktionen? Ein kostenfreies Erstgespräch hilft, die passenden Anwendungsfälle zu identifizieren.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="kundenservice" className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">Kann KI meinen Kundenservice verbessern?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Ja, erheblich. KI-Chatbots beantworten häufige Fragen sofort und rund um die Uhr, E-Mail-Assistenten priorisieren 
                und kategorisieren eingehende Anfragen, und Sprach-Assistenten übernehmen die telefonische Erstbearbeitung. 
                Ergebnis: kürzere Wartezeiten, höhere Kundenzufriedenheit und Entlastung Ihres Teams.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Finden Sie die passende KI für Ihr Unternehmen
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            In einem kostenlosen 20-30-minütigen Erstgespräch analysiert KI2USE Ihre Prozesse und zeigt konkrete Automatisierungspotenziale auf.
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

export default KIFuerUnternehmen;
