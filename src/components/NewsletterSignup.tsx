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
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Newsletter abonniert!",
        description: "Sie erhalten wöchentlich die neuesten KI-Trends für KMUs."
      });

      setEmail('');
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
      








































      
    </Card>);

};

export default NewsletterSignup;