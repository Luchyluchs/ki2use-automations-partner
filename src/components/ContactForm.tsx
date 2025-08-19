import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const webhookUrl = "https://n8n.srv929188.hstgr.cloud/webhook/kontaktformular";
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      source: "KI2USE Contact Form",
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      toast({
        title: "Nachricht erfolgreich versendet!",
        description: "Wir werden uns innerhalb von 24 Stunden bei Ihnen melden. Ihre Anfrage wird automatisch verarbeitet.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch {
      toast({
        title: "Fehler beim Versenden",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card border border-card-border rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Nachricht senden</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <Label htmlFor="name" className="text-sm sm:text-base">Name *</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Ihr vollständiger Name"
              className="mt-1 h-11 sm:h-12"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm sm:text-base">E-Mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="ihre@email.de"
              className="mt-1 h-11 sm:h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <Label htmlFor="company" className="text-sm sm:text-base">Unternehmen</Label>
            <Input
              id="company"
              name="company"
              placeholder="Ihr Unternehmen"
              className="mt-1 h-11 sm:h-12"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm sm:text-base">Telefon (optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+49 ..."
              className="mt-1 h-11 sm:h-12"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-sm sm:text-base">Nachricht *</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Beschreiben Sie kurz Ihre Anfrage oder Ihr Projekt..."
            className="mt-1 min-h-24 sm:min-h-32"
          />
        </div>

        <div className="bg-accent/10 rounded-lg p-3 sm:p-4">
          <p className="text-sm font-medium mb-2 text-accent">
            🤖 Automatisierung in Aktion
          </p>
          <p className="text-xs text-muted-foreground">
            Diese Nachricht wird automatisch verarbeitet, kategorisiert und an den 
            passenden Experten weitergeleitet. So demonstrieren wir live unsere Effizienz 
            und Zuverlässigkeit in der Kundenbetreuung.
          </p>
        </div>

        <Button type="submit" disabled={isLoading} className="w-full min-h-11 sm:min-h-12" variant="cta">
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Wird versendet...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Nachricht senden
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          * Pflichtfelder. Ihre Daten werden DSGVO-konform verarbeitet.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;