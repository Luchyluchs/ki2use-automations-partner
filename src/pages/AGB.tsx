
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AGB = () => {
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
            
            <h1 className="mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
            
            <div className="bg-card border border-card-border rounded-2xl p-8 shadow-card">
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground text-sm mb-6">Stand: 06.08.2025</p>

                <h2>§ 1 Geltungsbereich und Anbieter</h2>
                <p className="text-muted-foreground text-sm">
                  (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen KI2USE, Inhaber Alexander Lux, Kaiser-Wilhelm-Ring 44, 50672 Köln (nachfolgend „Anbieter") und seinen Kunden (nachfolgend „Kunde").
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) Das Angebot des Anbieters richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB, also an natürliche oder juristische Personen oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handeln.
                </p>
                <p className="text-muted-foreground text-sm">
                  (3) Abweichende oder entgegenstehende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter hat ihrer Geltung ausdrücklich schriftlich zugestimmt.
                </p>

                <h2 className="mt-8">§ 2 Vertragsgegenstand</h2>
                <p className="text-muted-foreground text-sm">
                  (1) Gegenstand des Vertrages sind die vom Anbieter auf seiner Website und in individuellen Angeboten dargestellten Leistungen in den Bereichen KI-basierte Automatisierungslösungen, KI-Schulungen & Beratung sowie Homepage Erstellung.
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) Dies umfasst insbesondere:
                </p>
                <ul className="text-muted-foreground text-sm list-disc pl-6">
                  <li>Standard-KI-Agenten: Die Bereitstellung von vorgefertigten Software-Agenten (z.B. LinkedIn Agent, Chatbot Agent) zur Nutzung durch den Kunden als Software-as-a-Service (SaaS).</li>
                  <li>Maßgeschneiderte KI-Agenten: Die Konzeption, Entwicklung und Implementierung individueller KI-Lösungen nach Kundenspezifikation.</li>
                  <li>KI-Schulungen & Beratung: Die Durchführung von Workshops, Seminaren und Beratungsleistungen.</li>
                  <li>Homepage Erstellung: Die Erstellung und der Support von Websites.</li>
                </ul>
                <p className="text-muted-foreground text-sm">
                  (3) Die auf der Website dargestellten Einsparungs- und Effizienzsteigerungs-Potenziale (z.B. ROI-Rechner, prozentuale Zeitersparnis) sind beispielhafte Berechnungen und stellen keine zugesicherten Eigenschaften oder Garantien dar.
                </p>

                <h2 className="mt-8">§ 3 Vertragsschluss</h2>
                <p className="text-muted-foreground text-sm">
                  (1) Die Präsentation der Leistungen auf der Website stellt kein rechtlich bindendes Angebot dar, sondern eine Aufforderung zur Abgabe eines Angebots durch den Kunden.
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) Der Vertragsschluss erfolgt durch ein individuelles Angebot des Anbieters und dessen Annahme durch den Kunden in Textform (z.B. per E-Mail).
                </p>
                <p className="text-muted-foreground text-sm">
                  (3) Ein kostenloses Beratungsgespräch ist unverbindlich und begründet keinen Vertrag.
                </p>

                <h2 className="mt-8">§ 4 Leistungsumfang und Pflichten des Anbieters</h2>
                <p className="text-muted-foreground text-sm">
                  (1) Allgemein: Der Anbieter erbringt seine Leistungen mit größter Sorgfalt und nach dem aktuellen Stand der Technik.
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) Standard-KI-Agenten: Der Anbieter stellt die gebuchten Agenten für die Dauer des Vertrages zur Nutzung bereit. Der Anbieter gewährleistet eine branchenübliche Verfügbarkeit und wird geplante Wartungsarbeiten rechtzeitig ankündigen. Ein bestimmter Erfolg, wie die Generierung einer konkreten Anzahl von Leads, ist nicht geschuldet.
                </p>
                <p className="text-muted-foreground text-sm">
                  (3) Maßgeschneiderte KI-Agenten und Homepage Erstellung: Die Leistungen werden nach dem im Angebot definierten Prozess (Bedarfsanalyse, Konzeption, Entwicklung, Implementierung) erbracht. Der Anbieter ist berechtigt, agile Entwicklungsmethoden anzuwenden.
                </p>
                <p className="text-muted-foreground text-sm">
                  (4) KI-Schulungen: Der Anbieter erbringt die Schulungsleistung wie im Angebot beschrieben. Die ausgestellten Zertifikate sind reine Teilnahmezertifikate ohne staatliche Anerkennung. Der Anbieter behält sich das Recht vor, Schulungstermine bei zu geringer Teilnehmerzahl abzusagen oder zu verschieben.
                </p>

                <h2 className="mt-8">§ 5 Mitwirkungspflichten des Kunden</h2>
                <p className="text-muted-foreground text-sm">
                  (1) Der Kunde ist verpflichtet, dem Anbieter alle für die Leistungserbringung notwendigen Informationen, Daten, Zugänge und Unterlagen rechtzeitig und vollständig zur Verfügung zu stellen.
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) Bei Entwicklungsleistungen (maßgeschneiderte Agenten, Homepage Erstellung) ist der Kunde zur unverzüglichen Prüfung von Entwürfen, Prototypen und Teilergebnissen sowie zur Abnahme der vertragsgemäß erbrachten Leistung verpflichtet.
                </p>
                <p className="text-muted-foreground text-sm">
                  (3) Kommt der Kunde seinen Mitwirkungspflichten nicht nach und verzögert sich dadurch die Leistungserbringung, ist der Anbieter für die daraus entstehenden Folgen nicht verantwortlich. Der Anbieter kann den dadurch entstehenden Mehraufwand gesondert in Rechnung stellen.
                </p>

                <h2 className="mt-8">§ 6 Preise, Vergütung und Zahlungsbedingungen</h2>
                <p className="text-muted-foreground text-sm">
                  (1) Alle Preise verstehen sich netto zuzüglich der gesetzlichen Umsatzsteuer.
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) Die Vergütung richtet sich nach dem individuellen Angebot. Sofern nicht anders vereinbart, sind Rechnungen innerhalb von 14 Tagen ohne Abzug zur Zahlung fällig.
                </p>
                <p className="text-muted-foreground text-sm">
                  (3) Bei Entwicklungsaufträgen über 5.000 € ist der Anbieter berechtigt, Abschlagszahlungen nach Erreichen von Projektmeilensteinen zu verlangen.
                </p>
                <p className="text-muted-foreground text-sm">
                  (4) Monatliche Wartungs- oder Lizenzgebühren sind im Voraus fällig.
                </p>

                <h2 className="mt-8">§ 7 Nutzungsrechte</h2>
                <p className="text-muted-foreground text-sm">
                  (1) An Standard-KI-Agenten erhält der Kunde für die Vertragslaufzeit ein einfaches, nicht übertragbares, nicht unterlizenzierbares Recht zur Nutzung der Software für eigene Geschäftszwecke.
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) An individuell erstellten KI-Agenten und Websites erhält der Kunde nach vollständiger Bezahlung ein ausschließliches, zeitlich und räumlich unbeschränktes Nutzungsrecht am Endprodukt. Der Anbieter behält das Recht, die zugrundeliegenden generischen Module, Frameworks und sein Know-how für andere Projekte zu verwenden.
                </p>
                <p className="text-muted-foreground text-sm">
                  (3) Der Quellcode verbleibt, sofern nicht ausdrücklich anders vereinbart, beim Anbieter.
                </p>

                <h2 className="mt-8">§ 8 Abnahme</h2>
                <p className="text-muted-foreground text-sm">
                  (1) Werkvertragliche Leistungen (Maßgeschneiderte KI-Agenten, Homepage Erstellung) bedürfen der Abnahme durch den Kunden.
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) Nach Fertigstellung und Übergabe zur Prüfung hat der Kunde 10 Werktage Zeit, die Leistung zu testen und abzunehmen. Die Abnahme gilt als erfolgt, wenn der Kunde innerhalb dieser Frist keine wesentlichen Mängel schriftlich rügt oder die Leistung produktiv nutzt.
                </p>
                <p className="text-muted-foreground text-sm">
                  (3) Wesentliche Mängel werden vom Anbieter in angemessener Frist behoben.
                </p>

                <h2 className="mt-8">§ 9 Gewährleistung</h2>
                <p className="text-muted-foreground text-sm">
                  (1) Der Anbieter leistet Gewähr für die vertraglich vereinbarte Beschaffenheit der Leistungen.
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) Bei Mängeln hat der Anbieter zunächst das Recht zur Nacherfüllung (Nachbesserung oder Ersatzlieferung). Schlägt die Nacherfüllung fehl, stehen dem Kunden die gesetzlichen Rechte (Minderung, Rücktritt) zu.
                </p>
                <p className="text-muted-foreground text-sm">
                  (3) Die Gewährleistung ist ausgeschlossen für Mängel, die auf fehlerhaften Informationen oder mangelnder Mitwirkung des Kunden beruhen oder durch unsachgemäße Bedienung oder Eingriffe Dritter entstehen.
                </p>

                <h2 className="mt-8">§ 10 Haftung</h2>
                <p className="text-muted-foreground text-sm">
                  (1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit.
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf, ist die Haftung des Anbieters auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.
                </p>
                <p className="text-muted-foreground text-sm">
                  (3) Im Übrigen ist eine Haftung für leichte Fahrlässigkeit ausgeschlossen.
                </p>
                <p className="text-muted-foreground text-sm">
                  (4) Diese Haftungsbeschränkung gilt auch für die Haftung für Erfüllungsgehilfen und gesetzliche Vertreter des Anbieters.
                </p>
                <p className="text-muted-foreground text-sm">
                  (5) Die Haftung für Datenverlust wird auf den typischen Wiederherstellungsaufwand beschränkt, der bei regelmäßiger und gefahrentsprechender Anfertigung von Sicherungskopien durch den Kunden eingetreten wäre.
                </p>
                <p className="text-muted-foreground text-sm">
                  (6) Der Anbieter haftet nicht für den wirtschaftlichen Erfolg der durch die KI-Agenten oder Beratungen erzielten Ergebnisse.
                </p>

                <h2 className="mt-8">§ 11 Vertragslaufzeit und Kündigung</h2>
                <p className="text-muted-foreground text-sm">
                  (1) Verträge über fortlaufende Leistungen (z.B. Wartung, SaaS-Nutzung von Standard-Agenten) haben die im Angebot vereinbarte Mindestlaufzeit. Sie verlängern sich automatisch um die jeweilige Mindestlaufzeit, wenn sie nicht von einer Partei mit einer Frist von drei Monaten zum Ende der Laufzeit schriftlich gekündigt werden.
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                </p>

                <h2 className="mt-8">§ 12 Geheimhaltung und Datenschutz</h2>
                <p className="text-muted-foreground text-sm">
                  (1) Beide Parteien verpflichten sich, über alle ihnen im Rahmen der Vertragsdurchführung bekannt gewordenen vertraulichen Informationen der jeweils anderen Partei Stillschweigen zu bewahren.
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) Der Anbieter verarbeitet personenbezogene Daten im Einklang mit der DSGVO. Details hierzu sind in der separaten Datenschutzerklärung geregelt.
                </p>

                <h2 className="mt-8">§ 13 Schlussbestimmungen</h2>
                <p className="text-muted-foreground text-sm">
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                </p>
                <p className="text-muted-foreground text-sm">
                  (2) Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis ist Köln, sofern der Kunde Kaufmann, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen ist.
                </p>
                <p className="text-muted-foreground text-sm">
                  (3) Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein oder werden, so wird hierdurch die Wirksamkeit der übrigen Bestimmungen nicht berührt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AGB;
