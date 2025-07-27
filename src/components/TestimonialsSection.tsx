import { Star, Quote } from "lucide-react";
const TestimonialsSection = () => {
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
  return <section className="section-padding bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-element">
          <h2 className="mb-6 scale-in-element">
            Was unsere <span className="text-primary">Kunden sagen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-element">
            Vertrauen Sie auf die Erfahrungen deutscher Unternehmen, 
            die bereits erfolgreich mit KI2USE automatisieren.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift cursor-pointer">
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
        <div className="mt-12 bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground hover-scale">
          <h3 className="text-xl font-semibold mb-4">
            Höchste Sicherheitsstandards für deutsche Unternehmen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl mb-2">🔒</div>
              <div className="font-medium">DSGVO-konform</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🇩🇪</div>
              <div className="font-medium">Deutsche Server</div>
            </div>
            <div>
              <div className="text-2xl mb-2">📋</div>
              <div className="font-medium">ISO 27001</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;