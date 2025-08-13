
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Cookie } from "lucide-react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const Datenschutz = () => {
  const { revokeConsent, consentData } = useCookieConsent();
  
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
                <h2>Verantwortlicher</h2>
                <p className="text-muted-foreground text-sm">
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br />
                  Alexander Lux<br />
                  KI2USE<br />
                  Kaiser-Wilhelm-Ring 44<br />
                  50672 Köln<br />
                  Deutschland<br />
                  E-Mail: info@ki2use.de
                </p>

                {/* Cookie Consent Management */}
                <div className="mb-8 p-6 bg-muted/50 rounded-lg border">
                  <h2 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                    <Cookie className="h-5 w-5" />
                    Cookie-Einstellungen verwalten
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Sie können Ihre Cookie-Einstellungen jederzeit ändern oder widerrufen.
                  </p>
                  {consentData && (
                    <div className="mb-4 text-sm">
                      <p><strong>Aktuelle Einstellungen:</strong></p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Notwendige Cookies: ✓ Aktiv</li>
                        <li>Analyse-Cookies (Google Analytics): {consentData.analytics ? '✓ Aktiv' : '✗ Deaktiviert'}</li>
                      </ul>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Letzte Änderung: {new Date(consentData.timestamp).toLocaleString('de-DE')}
                      </p>
                    </div>
                  )}
                  <Button 
                    onClick={revokeConsent}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Cookie className="h-4 w-4" />
                    Cookie-Einstellungen ändern
                  </Button>
                </div>

                <h2 className="mt-8">1. Allgemeines zur Datenverarbeitung</h2>
                <p className="text-muted-foreground text-sm">
                  Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
                </p>

                <h2 className="mt-8">2. Cookies und Tracking-Technologien</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">2.1 Was sind Cookies?</h3>
                  <p className="text-muted-foreground text-sm">
                    Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Website besuchen. 
                    Sie ermöglichen es, bestimmte Informationen über Ihre Nutzung der Website zu speichern.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-primary">2.2 Arten von Cookies</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Notwendige Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Diese Cookies sind für die Grundfunktionen der Website erforderlich und speichern Ihre Cookie-Präferenzen. 
                        Sie können nicht deaktiviert werden.
                      </p>
                      <p className="text-xs"><strong>Gespeicherte Daten:</strong> Cookie-Einwilligung, Session-ID</p>
                      <p className="text-xs"><strong>Speicherdauer:</strong> Bis zum Widerruf</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Analyse-Cookies (Google Analytics)</h4>
                      <p className="text-sm text-muted-foreground">
                        Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren. 
                        Alle Informationen werden anonymisiert gesammelt.
                      </p>
                      <p className="text-xs"><strong>Anbieter:</strong> Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</p>
                      <p className="text-xs"><strong>Gespeicherte Daten:</strong> Anonymisierte Nutzungsstatistiken, Seitenaufrufe, Verweildauer</p>
                      <p className="text-xs"><strong>Speicherdauer:</strong> 26 Monate</p>
                      <p className="text-xs"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-primary">2.3 Datenschutz bei Google Analytics</h3>
                  <p className="text-muted-foreground text-sm">
                    Wir verwenden Google Analytics mit aktivierter IP-Anonymisierung. Dadurch wird Ihre IP-Adresse von Google 
                    innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über 
                    den Europäischen Wirtschaftsraum zuvor gekürzt. Die Datenübertragung in die USA erfolgt auf Grundlage 
                    der Standardvertragsklauseln der EU-Kommission.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-primary">2.4 Widerruf der Einwilligung</h3>
                  <p className="text-muted-foreground text-sm">
                    Sie können Ihre Einwilligung zur Verwendung von Cookies jederzeit widerrufen. Nutzen Sie dazu den 
                    "Cookie-Einstellungen ändern" Button oben auf dieser Seite oder löschen Sie die Cookies in Ihren Browser-Einstellungen.
                  </p>
                </div>

                <h2 className="mt-8">3. Bereitstellung der Website und Erstellung von Logfiles</h2>
                <p className="text-muted-foreground text-sm">
                  Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
                </p>
                <ul className="text-muted-foreground text-sm list-disc pl-6 mt-4">
                  <li>IP-Adresse des Nutzers</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Browsertyp und verwendete Version</li>
                  <li>Betriebssystem des Nutzers</li>
                  <li>Website, von welcher der Zugriff erfolgte (Referrer URL)</li>
                </ul>
                <p className="text-muted-foreground text-sm mt-4">
                  Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem dienen uns die Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme. Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
                </p>
                <p className="text-muted-foreground text-sm mt-4">
                  Die Daten werden auf Servern von Firebase/GitHub in Deutschland gehostet. Wir haben mit den Anbietern einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO geschlossen.
                </p>

                <h2 className="mt-8">4. Kontaktaufnahme per E-Mail oder Kontaktformular</h2>
                <p className="text-muted-foreground text-sm">
                  Bei Ihrer Kontaktaufnahme mit uns per E-Mail oder über ein Kontaktformular werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
                </p>

                <h2 className="mt-8">5. Datenverarbeitung zur Erbringung unserer Dienstleistungen (KI-Agenten)</h2>
                <p className="text-muted-foreground text-sm">
                  Zur Erbringung unserer KI-Dienstleistungen nutzen wir die Infrastruktur unseres Hosting-Partners Hostinger. Wenn Sie unsere KI-Agenten nutzen, werden die für die Funktion des Agenten notwendigen Daten (z.B. E-Mail-Inhalte für den "Email Organisator", Kontaktdaten für den "LinkedIn Agent") auf Servern von Hostinger verarbeitet.
                </p>
                <p className="text-muted-foreground text-sm mt-4">
                  Wir haben mit Hostinger einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO geschlossen, der sicherstellt, dass die Verarbeitung Ihrer Daten im Einklang mit den Datenschutzgesetzen erfolgt. Die Verarbeitung dient der Erfüllung unseres Vertrages mit Ihnen gemäß Art. 6 Abs. 1 lit. b DSGVO.
                </p>

                <h2 className="mt-8">6. Ihre Rechte als betroffene Person</h2>
                <p className="text-muted-foreground text-sm">
                  Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
                </p>
                <ul className="text-muted-foreground text-sm list-disc pl-6 mt-4">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung („Recht auf Vergessenwerden") (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                </ul>
                <p className="text-muted-foreground text-sm mt-4">
                  Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren (Art. 77 DSGVO).
                </p>

                <h2 className="mt-8">7. Datensicherheit</h2>
                <p className="text-muted-foreground text-sm">
                  Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
                </p>

                <h2 className="mt-8">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
                <p className="text-muted-foreground text-sm">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand August 2025. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
