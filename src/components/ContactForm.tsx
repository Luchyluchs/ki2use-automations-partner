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
    <div className="bg-card border border-card-border rounded-2xl p-8 shadow-card">
      <h3 className="text-xl font-semibold mb-6">Nachricht senden</h3>
      

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Ihr vollständiger Name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">E-Mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="ihre@email.de"
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="company">Unternehmen</Label>
            <Input
              id="company"
              name="company"
              placeholder="Ihr Unternehmen"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">Telefon (optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+49 ..."
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="message">Nachricht *</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Beschreiben Sie kurz Ihre Anfrage oder Ihr Projekt..."
            className="mt-1 min-h-[120px]"
          />
        </div>

        <div className="bg-accent/10 rounded-lg p-4">
          <p className="text-sm text-accent font-medium mb-2">
            🤖 Automatisierung in Aktion
          </p>
          <p className="text-xs text-muted-foreground">
            Diese Nachricht wird automatisch verarbeitet, kategorisiert und an den 
            passenden Experten weitergeleitet. So demonstrieren wir live unsere Effizienz 
            und Zuverlässigkeit in der Kundenbetreuung.
          </p>
        </div>

        <Button type="submit" disabled={isLoading} className="w-full" variant="cta">
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