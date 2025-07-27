import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import linkedinRobot from "@/assets/linkedin-robot.jpg";
import chatbotRobot from "@/assets/chatbot-robot.jpg";
import newsletterRobot from "@/assets/newsletter-robot.jpg";
import emailRobot from "@/assets/email-robot.jpg";
import voiceRobot from "@/assets/voice-robot.jpg";
import socialMediaRobot from "@/assets/social-media-robot.jpg";
import salesRobot from "@/assets/sales-robot.jpg";
import appointmentRobot from "@/assets/appointment-robot.jpg";
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
  }, {
    name: "Sales Agent",
    image: salesRobot,
    description: "Automatisiert Lead-Qualifizierung und unterstützt Verkaufsprozesse.",
    benefits: "60% höhere Conversion-Rate"
  }, {
    name: "Terminbuchungsagent",
    image: appointmentRobot,
    description: "Vereinfacht Terminplanung durch automatische Buchungen und Erinnerungen.",
    benefits: "90% weniger manueller Aufwand"
  }];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Unsere Standard KI-Agenten
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sofort einsetzbare KI-Lösungen für maximale Effizienz in Ihrem Unternehmen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {agents.map((agent, index) => (
            <div
              key={agent.name}
              className="group bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-card-border hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gradient-primary/10">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                {agent.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {agent.description}
              </p>
              <p className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                {agent.benefits}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/standard-agenten">
            <Button className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 text-lg rounded-full shadow-primary transform hover:scale-105 transition-all duration-200">
              Alle Standard-Agenten entdecken
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StandardAgentsPreview;