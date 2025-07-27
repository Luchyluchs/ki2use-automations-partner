import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
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
            
            <h1 className="mb-8">Datenschutzerklärung</h1>
            
            <div className="bg-card border border-card-border rounded-2xl p-8 shadow-card">
              <div className="prose prose-sm max-w-none">
                <h2>1. Datenschutz auf einen Blick</h2>
                
                <h3 className="mt-6">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground text-sm">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>

                <h3 className="mt-6">Datenerfassung auf dieser Website</h3>
                <h4 className="mt-4">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p className="text-muted-foreground text-sm">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>

                <h4 className="mt-4">Wie erfassen wir Ihre Daten?</h4>
                <p className="text-muted-foreground text-sm">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
                </p>

                <h2 className="mt-8">2. Hosting und Content Delivery Networks (CDN)</h2>
                
                <h3 className="mt-6">Firebase Hosting</h3>
                <p className="text-muted-foreground text-sm">
                  Diese Website wird auf Firebase Hosting gehostet, einem Service von Google LLC. Anbieter ist Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Bei jedem Aufruf dieser Website erfasst Firebase Hosting automatisch Informationen in Server-Log-Dateien.
                </p>

                <h2 className="mt-8">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="mt-6">Datenschutz</h3>
                <p className="text-muted-foreground text-sm">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>

                <h3 className="mt-6">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-muted-foreground text-sm">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
                  [Firmenname]<br />
                  [Adresse]<br />
                  Telefon: +49 (0) 123 456 789<br />
                  E-Mail: info@ki2use.de
                </p>

                <h2 className="mt-8">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="mt-6">Kontaktformular</h3>
                <p className="text-muted-foreground text-sm">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>

                <h3 className="mt-6">Automatisierte Datenverarbeitung</h3>
                <p className="text-muted-foreground text-sm">
                  Ihre über das Kontaktformular eingegebenen Daten werden automatisch an unser Automatisierungssystem weitergeleitet. Dies dient der effizienten Bearbeitung Ihrer Anfrage und der automatischen Zuweisung an den zuständigen Mitarbeiter. Die Datenübertragung erfolgt verschlüsselt und DSGVO-konform.
                </p>

                <h2 className="mt-8">5. Ihre Rechte</h2>
                
                <p className="text-muted-foreground text-sm">
                  Sie haben jederzeit das Recht:<br />
                  • unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten;<br />
                  • Berichtigung oder Löschung dieser Daten zu verlangen;<br />
                  • eine Einschränkung der Datenverarbeitung zu verlangen;<br />
                  • der Datenverarbeitung zu widersprechen;<br />
                  • sich bei einer Aufsichtsbehörde zu beschweren.
                </p>

                <h2 className="mt-8">6. Analyse-Tools und Werbung</h2>
                
                <h3 className="mt-6">Google Analytics</h3>
                <p className="text-muted-foreground text-sm">
                  Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren.
                </p>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Hinweis:</strong> Dies ist eine Muster-Datenschutzerklärung. Bitte lassen Sie Ihre Datenschutzerklärung 
                    von einem Rechtsanwalt erstellen oder überprüfen, um sicherzustellen, dass sie alle relevanten 
                    Datenverarbeitungsaktivitäten Ihres Unternehmens abdeckt und rechtlich konform ist.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold text-accent mb-2">KI2USE - Automatisierung auch beim Datenschutz</h4>
                  <p className="text-sm text-muted-foreground">
                    Auch unsere Datenschutzprozesse sind automatisiert: Ihre Anfragen bezüglich Ihrer Rechte werden 
                    automatisch bearbeitet und an die zuständigen Stellen weitergeleitet, um Ihnen 
                    schnellstmöglich zu helfen.
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

export default Datenschutz;