import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollAnimations";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, AlertTriangle, Shield, Clock, ChevronRight } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface LongTailPageData {
  // SEO
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  // Hero
  badge: string;
  h1: string;
  intro: string;
  // Body
  whatSection: { heading: string; paragraphs: string[] };
  problems: { title: string; description: string }[];
  useCases: { title: string; description: string; timeSaving: string }[];
  workflow: { before: string; after: string };
  faqs: { question: string; answer: string }[];
  // Internal links
  relatedLinks: { label: string; href: string }[];
}

interface Props {
  data: LongTailPageData;
}

const LongTailLandingPage = ({ data }: Props) => {
  useScrollReveal();

  useSEO({
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    canonical: data.canonical,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      })),
    },
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {data.badge}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {data.h1}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {data.intro}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton className="text-lg px-8 py-4" />
            <Link to="/standard-agenten">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 w-full">
                KI-Lösungen ansehen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {data.whatSection.heading}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            {data.whatSection.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Typische Herausforderungen
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Diese Probleme begegnen uns regelmäßig in Erstgesprächen.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {data.problems.map((problem, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-card">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Konkrete KI-Anwendungen
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Praxiserprobte Lösungen, die wir für vergleichbare Unternehmen einsetzen.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {data.useCases.map((useCase, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">{useCase.description}</p>
                <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                  <Clock className="h-4 w-4" />
                  {useCase.timeSaving}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Vergleich */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Vorher vs. Nachher
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-destructive/30 bg-destructive/5">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Ohne KI
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{data.workflow.before}</p>
            </div>
            <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Mit KI2USE
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{data.workflow.after}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              DSGVO-konform & Made in Germany
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Alle KI-Lösungen von KI2USE entsprechen den deutschen und europäischen Datenschutzbestimmungen. 
              Datenverarbeitung auf europäischen Servern, transparente Prozesse und persönliche Beratung 
              durch einen erfahrenen KI-Manager – keine Black-Box, keine Hidden Costs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Häufige Fragen
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {data.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Weiterführende Informationen</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.relatedLinks.map((link) => (
              <Link key={link.href} to={link.href} className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all group">
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            Bereit für das kostenlose Erstgespräch?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            20-30 Minuten, unverbindlich, kostenlos. Wir analysieren gemeinsam Ihr Potenzial und zeigen konkrete nächste Schritte.
          </p>
          <CalendlyButton className="text-lg px-8 py-4" />
        </div>
      </section>
    </Layout>
  );
};

export default LongTailLandingPage;
