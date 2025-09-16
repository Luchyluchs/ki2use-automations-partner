import { useState } from 'react';
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { X, Download, Gift } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentPopup = ({ isOpen, onClose }: ExitIntentPopupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "KI-Potenzial Check angefordert!",
        description: "Wir senden Ihnen in wenigen Minuten eine personalisierte KI-Analyse zu.",
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-primary/20 bg-gradient-to-br from-background to-muted/30">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
            <Gift className="w-8 h-8 text-primary-foreground" />
          </div>
          <DialogTitle className="text-xl font-bold">
            Warten Sie! Hier ist Ihr <span className="text-primary">kostenloses KI-Potenzial</span>
          </DialogTitle>
          <DialogDescription className="text-base">
            Bevor Sie gehen - erhalten Sie eine personalisierte Analyse, 
            wie viel Zeit und Geld Sie mit KI-Automatisierung sparen können.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="exit-email">E-Mail-Adresse für kostenlosen KI-Check</Label>
            <Input
              id="exit-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ihre@email.de"
              required
            />
          </div>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Download className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm">Sie erhalten sofort:</span>
            </div>
            <ul className="text-sm space-y-1">
              <li>✓ Personalisierte KI-Potenzial-Analyse</li>
              <li>✓ ROI-Berechnung für Ihr Unternehmen</li>
              <li>✓ Konkrete Automatisierungs-Möglichkeiten</li>
              <li>✓ Kostenlose KI-Checkliste (PDF)</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-primary hover:shadow-elevated"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wird gesendet..." : "Kostenlosen Check anfordern"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="px-4"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground text-center">
            100% kostenlos • Keine Verpflichtung • DSGVO-konform
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;