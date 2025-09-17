import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import { useRateLimit } from "@/hooks/useRateLimit";
import { useSecurityMonitoring } from "@/hooks/useSecurityMonitoring";
import { useCSRFProtection } from "@/hooks/useCSRFProtection";
import { Loader2, Send, Shield, Mail } from "lucide-react";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben").max(100, "Name zu lang"),
  email: z.string().email("Ungültige E-Mail-Adresse").max(255, "E-Mail zu lang"),
  company: z.string().max(100, "Firmenname zu lang").optional(),
  phone: z.string().max(50, "Telefonnummer zu lang").optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben").max(2000, "Nachricht zu lang")
});

interface DemoContactFormProps {
  webhookUrl: string;
  customerName: string;
  className?: string;
}

const DemoContactForm: React.FC<DemoContactFormProps> = ({ 
  webhookUrl, 
  customerName,
  className = '' 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  
  // Rate limiting: 3 attempts per 15 minutes for demo
  const rateLimit = useRateLimit('demo_contact_form', {
    maxAttempts: 3,
    windowMs: 15 * 60 * 1000, // 15 minutes
    blockDurationMs: 30 * 60 * 1000 // 30 minutes
  });
  
  const { logSecurityEvent } = useSecurityMonitoring();
  const { csrfToken, getSecureHeaders, refreshToken } = useCSRFProtection();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    // Check rate limit
    const rateLimitCheck = rateLimit.checkLimit();
    if (!rateLimitCheck.allowed) {
      logSecurityEvent('rate_limit_exceeded', {
        remainingTime: rateLimitCheck.remainingTime,
        userAgent: navigator.userAgent
      });
      
      toast({
        title: "Zu viele Anfragen",
        description: `Bitte warten Sie ${rateLimitCheck.remainingTime} Sekunden, bevor Sie erneut versuchen.`,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company") || "",
      phone: formData.get("phone") || "",
      message: formData.get("message"),
    };

    // Validate data
    try {
      const validatedData = contactSchema.parse(rawData);
      
      const data = {
        ...validatedData,
        source: `KI2USE Demo - ${customerName}`,
        timestamp: new Date().toISOString(),
        page: "/demoportal",
        demo_customer: customerName,
        userAgent: navigator.userAgent.substring(0, 200),
      };

      // Log security event
      logSecurityEvent('form_submission', {
        page: '/demoportal',
        customer: customerName,
        hasCompany: !!data.company,
        hasPhone: !!data.phone
      });

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: getSecureHeaders(),
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      toast({
        title: "Demo-Nachricht versendet!",
        description: `Ihre Anfrage für ${customerName} wurde erfolgreich übermittelt. In der Live-Version würden Sie innerhalb von 24 Stunden kontaktiert werden.`,
      });

      // Reset form and errors
      (e.target as HTMLFormElement).reset();
      setErrors({});
      
      // Refresh CSRF token for next submission
      refreshToken();
      
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        validationError.issues.forEach((error) => {
          if (error.path[0]) {
            newErrors[error.path[0] as string] = error.message;
          }
        });
        setErrors(newErrors);
        
        toast({
          title: "Validierungsfehler",
          description: "Bitte korrigieren Sie die markierten Felder.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Demo-Modus aktiv",
          description: "Formular-Validierung funktioniert. In der Live-Version würde die Nachricht versendet werden.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={`h-full flex flex-col shadow-card ${className}`}>
      <CardHeader className="pb-3 border-b border-card-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div>
            <CardTitle className="text-lg">Kontakt aufnehmen</CardTitle>
            <p className="text-sm text-muted-foreground">Für {customerName}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-4">
        {rateLimit.isBlocked() && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 mb-4">
            <p className="text-sm text-destructive font-medium">
              Sicherheitssperre aktiv - Versuchen Sie es in {rateLimit.getRemainingTime()} Sekunden erneut.
            </p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Hidden CSRF token field */}
          <input type="hidden" name="csrf_token" value={csrfToken} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="demo-name" className="text-sm">Name *</Label>
              <Input
                id="demo-name"
                name="name"
                required
                placeholder="Ihr Name"
                className={`mt-1 h-10 ${errors.name ? 'border-destructive' : ''}`}
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="demo-email" className="text-sm">E-Mail *</Label>
              <Input
                id="demo-email"
                name="email"
                type="email"
                required
                placeholder="ihre@email.de"
                className={`mt-1 h-10 ${errors.email ? 'border-destructive' : ''}`}
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="demo-company" className="text-sm">Unternehmen</Label>
              <Input
                id="demo-company"
                name="company"
                placeholder="Ihr Unternehmen"
                className={`mt-1 h-10 ${errors.company ? 'border-destructive' : ''}`}
              />
            </div>
            <div>
              <Label htmlFor="demo-phone" className="text-sm">Telefon</Label>
              <Input
                id="demo-phone"
                name="phone"
                type="tel"
                placeholder="+49 ..."
                className={`mt-1 h-10 ${errors.phone ? 'border-destructive' : ''}`}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="demo-message" className="text-sm">Nachricht *</Label>
            <Textarea
              id="demo-message"
              name="message"
              required
              placeholder="Beschreiben Sie Ihre Anfrage..."
              className={`mt-1 h-24 resize-none ${errors.message ? 'border-destructive' : ''}`}
            />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>

          <div className="bg-accent/10 rounded-lg p-3">
            <p className="text-xs font-medium mb-1 text-accent">
              🎯 Demo für {customerName}
            </p>
            <p className="text-xs text-muted-foreground">
              Diese Anfrage wird über kundenspezifische Webhooks verarbeitet und kategorisiert.
            </p>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading || rateLimit.isBlocked()} 
            className="w-full h-10" 
            variant="cta"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Wird versendet...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Demo-Nachricht senden
              </>
            )}
          </Button>

          <div className="text-xs text-muted-foreground text-center">
            <p className="flex items-center justify-center gap-1">
              <Shield className="w-3 h-3" />
              Webhook: {webhookUrl.slice(-8)}... | {rateLimit.attemptsLeft}/3 Versuche
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default DemoContactForm;