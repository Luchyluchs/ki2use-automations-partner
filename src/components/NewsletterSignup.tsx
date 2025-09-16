import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Mail, Zap } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
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
        title: "Newsletter abonniert!",
        description: "Sie erhalten wöchentlich die neuesten KI-Trends für KMUs.",
      });
      
      setEmail('');
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
    <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">
              Bleiben Sie auf dem Laufenden
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Erhalten Sie wöchentlich die neuesten KI-Trends und praktische 
              Automatisierungs-Tipps für deutsche KMUs.
            </p>
            
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ihre@email.de"
                className="flex-1"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="px-6"
              >
                {isSubmitting ? (
                  <Zap className="w-4 h-4 animate-pulse" />
                ) : (
                  "Anmelden"
                )}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-2">
              Kostenlos • Jederzeit abbestellbar • DSGVO-konform
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;