import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { useRateLimit } from "@/hooks/useRateLimit";
import { useSecurityMonitoring } from "@/hooks/useSecurityMonitoring";
import { useCSRFProtection } from "@/hooks/useCSRFProtection";
import { Loader2, Send, Shield } from "lucide-react";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben").max(100, "Name zu lang"),
  email: z.string().email("Ungültige E-Mail-Adresse").max(255, "E-Mail zu lang"),
  company: z.string().max(100, "Firmenname zu lang").optional(),
  phone: z.string().max(50, "Telefonnummer zu lang").optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben").max(2000, "Nachricht zu lang")
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const webhookUrl = "https://n8n.srv929188.hstgr.cloud/webhook/kontaktformular";
  const { toast } = useToast();
  
  // Rate limiting: 3 attempts per 15 minutes, block for 30 minutes
  const rateLimit = useRateLimit('contact_form', {
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
        source: "KI2USE Contact Form",
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent.substring(0, 200), // Limit length
      };

      // Log security event
      logSecurityEvent('form_submission', {
        page: window.location.pathname,
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
        title: "Nachricht erfolgreich versendet!",
        description: "Wir werden uns innerhalb von 24 Stunden bei Ihnen melden. Ihre Anfrage wird automatisch verarbeitet.",
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
        
        logSecurityEvent('error', {
          type: 'validation_error',
          errors: validationError.issues
        });
      } else {
        toast({
          title: "Fehler beim Versenden",
          description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.",
          variant: "destructive",
        });
        
        logSecurityEvent('error', {
          type: 'submission_error',
          error: String(validationError)
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card border border-card-border rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <Shield className="w-5 h-5 text-primary" />
        <h3 className="text-lg sm:text-xl font-semibold">Sichere Nachricht senden</h3>
      </div>
      
      {rateLimit.isBlocked() && (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 mb-4">
          <p className="text-sm text-destructive font-medium">
            Sicherheitssperre aktiv - Versuchen Sie es in {rateLimit.getRemainingTime()} Sekunden erneut.
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Hidden CSRF token field */}
        <input type="hidden" name="csrf_token" value={csrfToken} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <Label htmlFor="name" className="text-sm sm:text-base">Name *</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Ihr vollständiger Name"
              className={`mt-1 h-11 sm:h-12 ${errors.name ? 'border-destructive' : ''}`}
            />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="text-sm sm:text-base">E-Mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="ihre@email.de"
              className={`mt-1 h-11 sm:h-12 ${errors.email ? 'border-destructive' : ''}`}
            />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <Label htmlFor="company" className="text-sm sm:text-base">Unternehmen</Label>
            <Input
              id="company"
              name="company"
              placeholder="Ihr Unternehmen"
              className={`mt-1 h-11 sm:h-12 ${errors.company ? 'border-destructive' : ''}`}
            />
            {errors.company && <p className="text-sm text-destructive mt-1">{errors.company}</p>}
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm sm:text-base">Telefon (optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+49 ..."
              className={`mt-1 h-11 sm:h-12 ${errors.phone ? 'border-destructive' : ''}`}
            />
            {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-sm sm:text-base">Nachricht *</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Beschreiben Sie kurz Ihre Anfrage oder Ihr Projekt..."
            className={`mt-1 min-h-24 sm:min-h-32 ${errors.message ? 'border-destructive' : ''}`}
          />
          {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
        </div>

        <Button
          type="submit" 
          disabled={isLoading || rateLimit.isBlocked()} 
          className="w-full min-h-11 sm:min-h-12" 
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
              Nachricht senden
            </>
          )}
        </Button>

        <div className="text-xs text-muted-foreground text-center space-y-1">
          <p>* Pflichtfelder. Ihre Daten werden DSGVO-konform verarbeitet.</p>
          <p className="flex items-center justify-center gap-1">
            <Shield className="w-3 h-3" />
            Sicherheit: {rateLimit.attemptsLeft} von 3 Versuchen verbleibend
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;