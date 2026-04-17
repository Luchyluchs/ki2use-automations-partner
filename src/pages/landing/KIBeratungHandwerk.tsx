import LongTailLandingPage, { LongTailPageData } from "@/components/LongTailLandingPage";

const data: LongTailPageData = {
  title: "KI für Handwerksbetriebe | Angebote & Termine automatisieren | KI2USE",
  description: "KI-Beratung speziell für Handwerksbetriebe: Angebotserstellung, Terminbuchung und Kundenkommunikation automatisieren. DSGVO-konform, praxisnah, mit Fördermöglichkeiten.",
  keywords: "KI Handwerk, KI für Handwerksbetriebe, Digitalisierung Handwerk, Angebotserstellung Handwerk, Terminbuchung Handwerk, KI Bau, Handwerk automatisieren, Handwerksbetrieb Digitalisierung",
  canonical: "https://ki2use.de/ki-beratung-handwerk",
  badge: "KI für das Handwerk",
  h1: "KI für Handwerksbetriebe – mehr Zeit für die Baustelle",
  intro: "Angebote schreiben am Wochenende, Anrufe während der Arbeit, Termine im Kalender suchen – Handwerksbetriebe verlieren wertvolle Zeit mit Büroarbeit. KI2USE zeigt, wie Künstliche Intelligenz genau diese Aufgaben übernimmt, damit Sie sich auf Ihre Kernarbeit konzentrieren können.",
  whatSection: {
    heading: "Warum KI gerade für Handwerksbetriebe sinnvoll ist",
    paragraphs: [
      "Im Handwerk ist Zeit das knappste Gut. Während Konzerne ganze Verwaltungsabteilungen haben, übernimmt im typischen Handwerksbetrieb der Inhaber selbst die Büroarbeit – meist abends oder am Wochenende. Genau hier setzt KI an: Sie erledigt repetitive Aufgaben automatisch, ohne dass jemand zusätzlich eingestellt werden muss.",
      "Konkret bedeutet das: Eine Kundenanfrage geht ein, die KI antwortet sofort höflich und qualifiziert, schlägt einen Termin vor und trägt diesen in den Kalender ein. Angebote werden auf Basis einer kurzen Beschreibung vorbereitet. Rechnungen und Mahnungen entstehen automatisch. Der Inhaber prüft nur noch und gibt frei.",
      "Für Handwerksbetriebe ab 3 Mitarbeitern rechnet sich KI-Einführung typischerweise innerhalb weniger Monate – sowohl finanziell als auch durch die wiedergewonnene Lebensqualität. Zudem gibt es staatliche Förderprogramme, die einen Teil der Investition decken können.",
    ],
  },
  problems: [
    { title: "Anfragen gehen verloren", description: "Anrufe während der Arbeit, E-Mails am Abend – Kundenanfragen werden zu spät oder gar nicht beantwortet. Aufträge gehen an die Konkurrenz." },
    { title: "Angebote dauern zu lange", description: "Jedes Angebot manuell schreiben kostet 30-90 Minuten. Bei 10 Anfragen pro Woche sind das schnell 5-15 Stunden zusätzliche Büroarbeit." },
    { title: "Terminchaos im Kalender", description: "Doppelbuchungen, vergessene Erinnerungen, Kunden die nicht erscheinen. Jeder verlorene Termin bedeutet konkreten Umsatzverlust." },
  ],
  useCases: [
    { title: "Kundenanfragen automatisch beantworten", description: "Ein KI-Chatbot oder E-Mail-Assistent beantwortet Standardanfragen sofort, qualifiziert Interessenten und leitet nur die wichtigen Fälle an Sie weiter.", timeSaving: "Spart 5-10 Std/Woche" },
    { title: "Angebote per Sprachnachricht erstellen", description: "Sie diktieren die Eckdaten unterwegs, die KI erstellt ein vollständiges Angebot inkl. Positionen, Preisen und Begleittext zum Versand.", timeSaving: "Spart 60-80% Angebotszeit" },
    { title: "Terminbuchung 24/7 automatisieren", description: "Kunden buchen direkt online verfügbare Termine, die KI sendet Erinnerungen und vermeidet No-Shows.", timeSaving: "Spart 3-5 Std/Woche" },
    { title: "Kundenkommunikation per Sprachassistent", description: "Verpasste Anrufe werden vom Sprach-Assistenten entgegengenommen, qualifiziert und als Termin oder Rückruf dokumentiert.", timeSaving: "Keine verlorenen Aufträge mehr" },
  ],
  workflow: {
    before: "Kunde ruft Dienstag 11 Uhr an → Mailbox.\nAbends 21 Uhr Rückruf → Kunde nicht erreichbar.\nMittwoch E-Mail mit Anfrage → Donnerstag erste Antwort.\nFreitag Termin vereinbart → Sonntag Angebot geschrieben.\nDauer: 5 Tage, 2 Stunden Aufwand.",
    after: "Kunde ruft Dienstag 11 Uhr an → KI-Sprachassistent nimmt entgegen, qualifiziert, schlägt Termin vor.\nKunde bestätigt Termin online → Kalendereintrag automatisch.\nKI erstellt Angebotsentwurf aus dem Gespräch → Sie prüfen und senden.\nDauer: 2 Stunden, 10 Minuten Aufwand.",
  },
  faqs: [
    { question: "Lohnt sich KI auch für kleine Handwerksbetriebe?", answer: "Ja, gerade kleine Betriebe profitieren am stärksten. Wo ein Konzern eine Verwaltungsabteilung hat, übernimmt im Handwerk meist der Inhaber die Büroarbeit. Diese Zeit lässt sich durch KI deutlich reduzieren – oft schon ab 3 Mitarbeitern wirtschaftlich sinnvoll." },
    { question: "Brauche ich technisches Vorwissen?", answer: "Nein. KI2USE übernimmt die komplette Einrichtung und schult Sie und Ihr Team. Die Bedienung ist so einfach wie eine App auf dem Handy. Auch ältere Mitarbeiter kommen damit problemlos zurecht." },
    { question: "Was kostet die KI-Einführung im Handwerk?", answer: "Die Kosten hängen vom Umfang ab. Einfache Lösungen (z. B. Terminbuchung oder Chatbot) starten im niedrigen vierstelligen Bereich. Im kostenlosen Erstgespräch erhalten Sie eine konkrete Einschätzung – oft sind staatliche Fördermittel möglich." },
    { question: "Sind die Lösungen DSGVO-konform?", answer: "Ja, alle KI2USE-Lösungen entsprechen den deutschen und europäischen Datenschutzbestimmungen. Kundendaten werden auf europäischen Servern verarbeitet. Wichtig gerade im Handwerk, wo viele private Daten von Kunden anfallen." },
    { question: "Wie lange dauert die Einführung?", answer: "Einfache Lösungen sind innerhalb von 1-2 Wochen einsatzbereit. Umfassendere Pakete (Chatbot + Terminbuchung + Angebotsassistent) brauchen 4-6 Wochen inkl. Schulung Ihres Teams." },
    { question: "Was, wenn die KI mal etwas falsch macht?", answer: "Die KI arbeitet immer mit Freigabeprozessen: Angebote, wichtige Antworten und Termine können vor dem Versand geprüft werden. So behalten Sie die Kontrolle, sparen aber die Tipparbeit." },
  ],
  relatedLinks: [
    { label: "Alle KI-Beratungsformate ansehen", href: "/beratung" },
    { label: "Standard KI-Agenten entdecken", href: "/standard-agenten" },
    { label: "Fördermöglichkeiten prüfen", href: "/foerderung" },
    { label: "ROI für meinen Betrieb berechnen", href: "/roi-rechner" },
  ],
};

const KIBeratungHandwerk = () => <LongTailLandingPage data={data} />;
export default KIBeratungHandwerk;
