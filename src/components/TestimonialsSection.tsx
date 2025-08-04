import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

const TestimonialsSection = () => {
  useScrollReveal();
  const testimonials = [{
    name: "Dr. Michael Weber",
    position: "Geschäftsführer",
    company: "Weber Consulting GmbH",
    content: "Die Automatisierungslösungen von KI2USE haben unsere Effizienz um 60% gesteigert. Besonders beeindruckend ist, wie schnell und unkompliziert die Implementierung war.",
    rating: 5
  }, {
    name: "Sandra Müller",
    position: "Marketing Leiterin",
    company: "TechStart KMU",
    content: "Der LinkedIn Agent hat unsere Lead-Generierung revolutioniert. Wir sparen 10 Stunden pro Woche und haben gleichzeitig bessere Ergebnisse.",
    rating: 5
  }, {
    name: "Thomas Schmidt",
    position: "Inhaber",
    company: "Schmidt & Partner",
    content: "Die KI-Schulungen waren genau das, was unser Team brauchte. Praxisnah, verständlich und sofort umsetzbar. Sehr empfehlenswert für jeden Mittelständler.",
    rating: 5
  }];
  const partners = [{
    name: "Microsoft Partner",
    logo: "🔷"
  }, {
    name: "Google Cloud",
    logo: "☁️"
  }, {
    name: "AWS Partner",
    logo: "🔶"
  }, {
    name: "Automation Certified",
    logo: "⚡"
  }];
  return <section className="section-padding bg-muted relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl parallax-slow"></div>
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-accent/4 rounded-full blur-3xl parallax-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="scroll-reveal mb-6">
            Was unsere <span className="text-primary">Kunden sagen</span>
          </h2>
          <p className="scroll-reveal stagger-delay-1 text-xl text-muted-foreground max-w-3xl mx-auto">
            Vertrauen Sie auf die Erfahrungen deutscher Unternehmen, 
            die bereits erfolgreich mit KI2USE automatisieren.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => <div key={index} className={`scroll-scale stagger-delay-${index + 1} bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift cursor-pointer transform hover:scale-105 transition-all duration-500`}>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-muted/20" />
                <p className="text-muted-foreground leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="border-t border-card-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                <div className="text-sm text-primary font-medium">{testimonial.company}</div>
              </div>
            </div>)}
        </div>

        {/* Partner Logos */}
        

        {/* Trust Indicators */}
        
      </div>
    </section>;
};
export default TestimonialsSection;