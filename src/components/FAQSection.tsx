import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "Lohnt sich KI für kleine Unternehmen?",
    answer: "Ja! Gerade kleine Unternehmen profitieren oft am meisten, weil sie mit begrenzten Ressourcen besonders viel einsparen können. Es muss nicht kompliziert sein – manchmal reichen einfache Tools."
  },
  {
    question: "Was kostet eine KI-Beratung?",
    answer: "Das hängt von Ihrem Bedarf ab. KI2USE bietet ein kostenloses Erstgespräch (20–30 Minuten), um gemeinsam zu schauen, ob und wie KI2USE helfen kann."
  },
  {
    question: "Wir haben kein großes Budget – geht das trotzdem?",
    answer: "Absolut. KI2USE prüft auch staatliche Förderprogramme wie \"Digital Jetzt\" (bis 50% Zuschuss) oder ZIM, die viele Unternehmen in Anspruch nehmen können."
  },
  {
    question: "Ersetzt KI meine Mitarbeiter?",
    answer: "Nein. KI unterstützt Ihre Mitarbeiter, ersetzt sie nicht. Es geht darum, langweilige Routineaufgaben zu automatisieren – damit sich Ihr Team auf kreative und wertschöpfende Arbeit konzentrieren kann."
  },
  {
    question: "Ist das DSGVO-konform?",
    answer: "Ja. KI2USE achtet von Anfang an auf datenschutzkonforme Lösungen Made in Germany."
  }
];

const FAQSection = () => {

  return (
    <section id="faq" className="section-padding relative overflow-hidden py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="scroll-reveal text-3xl lg:text-4xl font-thin text-foreground mb-4 text-center">
            Häufige Fragen
          </h2>
          <p className="scroll-reveal stagger-delay-1 text-muted-foreground text-center mb-12">
            Ehrliche Antworten auf die wichtigsten Fragen rund um KI im Mittelstand.
          </p>

          <div className="scroll-reveal stagger-delay-2">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`} 
                  className="border border-card-border/50 rounded-xl px-6 bg-card/20 data-[state=open]:bg-card/40 transition-colors"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
