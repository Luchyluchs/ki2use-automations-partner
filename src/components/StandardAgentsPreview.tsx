import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import linkedinRobot from "@/assets/linkedin-robot.jpg";
import chatbotRobot from "@/assets/chatbot-robot.jpg";
import newsletterRobot from "@/assets/newsletter-robot.jpg";
import emailRobot from "@/assets/email-robot.jpg";
import voiceRobot from "@/assets/voice-robot.jpg";
import socialMediaRobot from "@/assets/social-media-robot.jpg";
const StandardAgentsPreview = () => {
  const agents = [{
    name: "LinkedIn Agent",
    image: linkedinRobot,
    description: "Automatisiert Netzwerkpflege, spart wertvolle Zeit bei der Akquise.",
    benefits: "Bis zu 70% Zeitersparnis beim Networking"
  }, {
    name: "Chatbot Agent",
    image: chatbotRobot,
    description: "Verbessert den Kundenservice rund um die Uhr, entlastet Ihr Team.",
    benefits: "24/7 Kundensupport ohne Mehrkosten"
  }, {
    name: "Newsletter Agent",
    image: newsletterRobot,
    description: "Erstellt und versendet personalisierte Newsletter effizient.",
    benefits: "Automatisierte Kundenbindung"
  }, {
    name: "Email Organisator",
    image: emailRobot,
    description: "Automatisiert E-Mail-Sortierung und reduziert administrative Last.",
    benefits: "50% weniger Zeit für E-Mail-Verwaltung"
  }, {
    name: "Sprachbot",
    image: voiceRobot,
    description: "Interagiert mit Kunden per Sprache, auch außerhalb der Geschäftszeiten.",
    benefits: "Erreichbarkeit rund um die Uhr"
  }, {
    name: "Social Media Agent",
    image: socialMediaRobot,
    description: "Automatisiert Posts und Interaktionen für konsistente Online-Präsenz.",
    benefits: "70% Zeitersparnis beim Content Management"
  }];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/20 via-background to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere <span className="text-primary">Standard-KI-Agenten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sofort einsetzbare Lösungen für die häufigsten Geschäftsprozesse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {agents.map((agent, index) => (
            <div key={index} className="bg-card border border-card-border rounded-xl p-6 hover-lift">
              <img 
                src={agent.image} 
                alt={agent.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{agent.name}</h3>
              <p className="text-muted-foreground mb-4">{agent.description}</p>
              <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-2 rounded-lg">
                {agent.benefits}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="hover-scale">
            <Link to="/standard-agenten">
              Alle Standard-Agenten ansehen
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default StandardAgentsPreview;