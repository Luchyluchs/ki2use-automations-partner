import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import linkedinRobot from "@/assets/linkedin-robot.jpg";
import chatbotRobot from "@/assets/chatbot-robot.jpg";
import newsletterRobot from "@/assets/newsletter-robot.jpg";
import emailRobot from "@/assets/email-robot.jpg";
import voiceRobot from "@/assets/voice-robot.jpg";
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
  }];
  return;
};
export default StandardAgentsPreview;