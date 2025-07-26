import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import linkedinRobot from "@/assets/linkedin-robot.jpg";
import chatbotRobot from "@/assets/chatbot-robot.jpg";
import newsletterRobot from "@/assets/newsletter-robot.jpg";
import emailRobot from "@/assets/email-robot.jpg";
import voiceRobot from "@/assets/voice-robot.jpg";

const StandardAgentsPreview = () => {
  const agents = [
    {
      name: "LinkedIn Agent",
      image: linkedinRobot,
      description: "Automatisiert Netzwerkpflege, spart wertvolle Zeit bei der Akquise.",
      benefits: "Bis zu 70% Zeitersparnis beim Networking"
    },
    {
      name: "Chatbot Agent",
      image: chatbotRobot,
      description: "Verbessert den Kundenservice rund um die Uhr, entlastet Ihr Team.",
      benefits: "24/7 Kundensupport ohne Mehrkosten"
    },
    {
      name: "Newsletter Agent",
      image: newsletterRobot,
      description: "Erstellt und versendet personalisierte Newsletter effizient.",
      benefits: "Automatisierte Kundenbindung"
    },
    {
      name: "Email Organisator",
      image: emailRobot,
      description: "Automatisiert E-Mail-Sortierung und reduziert administrative Last.",
      benefits: "50% weniger Zeit für E-Mail-Verwaltung"
    },
    {
      name: "Sprachbot",
      image: voiceRobot,
      description: "Interagiert mit Kunden per Sprache, auch außerhalb der Geschäftszeiten.",
      benefits: "Erreichbarkeit rund um die Uhr"
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-element">
          <h2 className="mb-6 scale-in-element">
            Ausgewählte{" "}
            <span className="text-primary">Standard-Agenten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-element">
            Sofort einsetzbare KI-Lösungen mit messbarem Nutzen für deutsche Kleinunternehmen. 
            Jeder Agent reduziert Arbeitsaufwand und steigert die Effizienz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift cursor-pointer text-center"
            >
              <div className="mb-4 hover-scale">
                <img
                  src={agent.image}
                  alt={`${agent.name} Roboter-Icon`}
                  className="w-16 h-16 mx-auto rounded-lg object-cover transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold mb-2">{agent.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{agent.description}</p>
              <div className="text-xs font-medium text-accent bg-accent/10 rounded-full px-3 py-1">
                {agent.benefits}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-in-element">
          <Button variant="cta" size="lg" asChild className="hover-scale">
            <Link to="/standard-agenten">Alle Standard-Agenten ansehen</Link>
          </Button>
        </div>

        <div className="mt-12 bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground hover-scale">
          <h3 className="text-xl font-semibold mb-4">
            Wichtiger Hinweis für KMUs
          </h3>
          <p className="max-w-4xl mx-auto leading-relaxed">
            Alle Standard-Agenten von KI2USE sind über ein persönliches, kostenloses Beratungsgespräch buchbar, 
            in dem wir die unkomplizierte, schnelle und rechtssichere Integration für Ihr KMU besprechen. 
            Die internen Prozesse von der Anfrage bis zur Implementierung werden dabei ebenfalls von n8n automatisiert, 
            was unsere Effizienz und Qualität in der Kundenbetreuung beweist.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StandardAgentsPreview;