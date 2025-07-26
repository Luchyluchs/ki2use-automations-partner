import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </Button>
            
            <h1 className="mb-8">Impressum</h1>
            
            <div className="bg-card border border-card-border rounded-2xl p-8 shadow-card">
              <div className="prose prose-sm max-w-none">
                <h2>Angaben gemäß § 5 TMG</h2>
                <p className="text-muted-foreground">
                  <strong>KI2USE</strong><br />
                  [Vollständiger Firmenname]<br />
                  [Straße und Hausnummer]<br />
                  [PLZ und Ort]<br />
                  Deutschland
                </p>

                <h3 className="mt-8">Vertreten durch</h3>
                <p className="text-muted-foreground">
                  [Name des Geschäftsführers/Inhabers]
                </p>

                <h3 className="mt-8">Kontakt</h3>
                <p className="text-muted-foreground">
                  Telefon: +49 (0) 123 456 789<br />
                  E-Mail: info@ki2use.de
                </p>

                <h3 className="mt-8">Registereintrag</h3>
                <p className="text-muted-foreground">
                  Eintragung im Handelsregister.<br />
                  Registergericht: [Registergericht]<br />
                  Registernummer: [Registernummer]
                </p>

                <h3 className="mt-8">Umsatzsteuer-ID</h3>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  [USt-IdNr.]
                </p>

                <h3 className="mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p className="text-muted-foreground">
                  [Name und Anschrift des Verantwortlichen]
                </p>

                <h3 className="mt-8">Haftungsausschluss</h3>
                <h4 className="mt-6">Haftung für Inhalte</h4>
                <p className="text-muted-foreground text-sm">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h4 className="mt-6">Haftung für Links</h4>
                <p className="text-muted-foreground text-sm">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h4 className="mt-6">Urheberrecht</h4>
                <p className="text-muted-foreground text-sm">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Hinweis:</strong> Dies ist ein Muster-Impressum. Bitte ersetzen Sie alle Platzhalter 
                    durch Ihre korrekten Unternehmensdaten und lassen Sie das Impressum von einem Rechtsanwalt 
                    prüfen, um rechtliche Konformität sicherzustellen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;