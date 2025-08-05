
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
                  <strong>Alexander Lux</strong><br />
                  KI2USE<br />
                  Kaiser-Wilhelm-Ring 44<br />
                  50672 Köln<br />
                  Deutschland
                </p>

                <h3 className="mt-8">Kontakt</h3>
                <p className="text-muted-foreground">
                  Telefon: +49 162 63 19 474<br />
                  E-Mail: info@ki2use.de
                </p>

                <h3 className="mt-8">Umsatzsteuer-ID</h3>
                <p className="text-muted-foreground">
                  Sobald vom Finanzamt zugeteilt, hier die Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz eintragen. Falls Sie die Kleinunternehmerregelung nach § 19 UStG in Anspruch nehmen, stattdessen hier folgenden Satz einfügen: "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet."
                </p>

                <h3 className="mt-8">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
                <p className="text-muted-foreground">
                  Alexander Lux<br />
                  Kaiser-Wilhelm-Ring 44<br />
                  50672 Köln
                </p>

                <h3 className="mt-8">EU-Streitschlichtung</h3>
                <p className="text-muted-foreground text-sm">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> https://ec.europa.eu/consumers/odr/</a>.<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>

                <h3 className="mt-8">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
                <p className="text-muted-foreground text-sm">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>

                <h3 className="mt-8">Haftung für Inhalte</h3>
                <p className="text-muted-foreground text-sm">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="mt-8">Hosting</h3>
                <p className="text-muted-foreground text-sm">
                  Diese Website wird bei Firebase und GitHub gehostet. Die von uns genutzten Server befinden sich in Deutschland. Die Verarbeitung personenbezogener Daten im Rahmen des Hostings erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren und effizienten Bereitstellung unseres Online-Angebots gemäß Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
