import LongTailLandingPage, { LongTailPageData } from "@/components/LongTailLandingPage";

const data: LongTailPageData = {
  title: "KI für Immobilienmakler | Exposés & Leads automatisieren | KI2USE",
  description: "KI-Beratung für Immobilienmakler: Exposé-Erstellung, Lead-Qualifizierung und Kundenkommunikation automatisieren. DSGVO-konform, praxisnah und effizient.",
  keywords: "KI Immobilien, KI für Immobilienmakler, Exposé erstellen KI, Lead Qualifizierung Immobilien, Immobilienmakler Digitalisierung, KI Maklerbüro",
  canonical: "https://ki2use.de/ki-beratung-immobilien",
  badge: "KI für die Immobilienbranche",
  h1: "KI für Immobilienmakler – mehr Abschlüsse, weniger Verwaltung",
  intro: "Exposés schreiben, Anfragen filtern, Besichtigungen koordinieren, Nachfasstermine setzen – im Maklerbüro frisst die Verwaltung mehr Zeit als die eigentliche Beratung. KI2USE zeigt, wie sich genau diese Aufgaben automatisieren lassen, damit Sie sich auf die wirklich wertvollen Mandate konzentrieren.",
  whatSection: {
    heading: "Warum KI im Maklerbüro den Unterschied macht",
    paragraphs: [
      "Der Immobilienmarkt ist 2025 anspruchsvoller denn je. Käufer und Verkäufer erwarten schnelle, professionelle Reaktionen – meist innerhalb weniger Stunden. Wer zu langsam ist, verliert das Mandat oder den Käufer an die Konkurrenz. Gleichzeitig verbringen Makler einen Großteil ihrer Zeit mit Verwaltungsarbeiten, die niemand bezahlt.",
      "Hier setzt KI an: Sie übernimmt die zeitraubenden Aufgaben rund um Exposé-Erstellung, Anfragen-Qualifizierung und Nachfassprozesse. Aus 30 Anfragen pro Woche werden so vorqualifizierte 5-7 echte Interessenten, mit denen Sie zielgerichtet arbeiten können.",
      "Besonders wertvoll: KI arbeitet rund um die Uhr. Ein Interessent, der abends um 22 Uhr eine Anfrage stellt, bekommt sofort eine professionelle, qualifizierende Antwort – nicht erst am nächsten Vormittag, wenn er schon bei der Konkurrenz angefragt hat.",
    ],
  },
  problems: [
    { title: "Zu viele unqualifizierte Anfragen", description: "Pro Inserat kommen schnell 30+ Anfragen. Die meisten sind reine Neugierige oder Profile, die nicht zur Immobilie passen. Manuelle Vorqualifizierung kostet Stunden." },
    { title: "Exposés zu erstellen dauert ewig", description: "Jedes Exposé manuell zu schreiben – mit ansprechenden Texten, korrekten Daten und passenden Highlights – frisst pro Objekt 2-4 Stunden Arbeitszeit." },
    { title: "Nachfassen wird vergessen", description: "Aus dem Tagesgeschäft heraus bleibt das systematische Nachfassen bei Interessenten oft liegen. Geschäft wird verschenkt." },
  ],
  useCases: [
    { title: "Exposé-Texte automatisch generieren", description: "Aus Eckdaten und Fotos erstellt die KI hochwertige Exposé-Texte, Headlines und Beschreibungen – fertig zur Freigabe und im Stil Ihres Maklerbüros.", timeSaving: "Spart 70-85% der Erstellungszeit" },
    { title: "Lead-Qualifizierung per Chatbot", description: "Interessenten werden vom Chatbot automatisch qualifiziert: Budget, Finanzierung, Zeitrahmen, Profil. Sie sehen nur noch echte Kandidaten.", timeSaving: "Filtert 60-80% der Anfragen" },
    { title: "Automatisches Nachfassen via E-Mail-Assistent", description: "Interessenten werden systematisch nachgefasst – mit personalisierten Texten und passendem Timing. Kein Lead geht mehr verloren.", timeSaving: "Spart 4-6 Std/Woche" },
    { title: "Besichtigungen koordinieren auf Autopilot", description: "Online-Buchung, Erinnerungen, Vorbereitungs-Checklisten und Nachbereitung – die KI organisiert den gesamten Termin-Workflow.", timeSaving: "Reduziert No-Shows um 50-70%" },
  ],
  workflow: {
    before: "Inserat geht online → 35 Anfragen in 48 Std.\nManuelle Sichtung jeder Anfrage → 3-5 Stunden.\nRückrufe und Mailaustausch zur Qualifizierung → weitere 4-6 Std.\nNach 4 Tagen: 5 echte Interessenten identifiziert.\nGesamtzeit: 8-11 Stunden für die Vorqualifizierung.",
    after: "Inserat geht online → 35 Anfragen in 48 Std.\nKI-Chatbot qualifiziert jede Anfrage automatisch (Budget, Finanzierung, Zeitrahmen).\nNach 48 Std: 6 vorqualifizierte Interessenten in Ihrem CRM.\nIhr Aufwand: 30 Minuten zur finalen Auswahl.\nGesamtzeit: 30 Minuten statt 8-11 Stunden.",
  },
  faqs: [
    { question: "Wirken KI-generierte Exposé-Texte nicht generisch?", answer: "Nein, wenn sie richtig konfiguriert sind. KI2USE trainiert die Texterstellung auf Ihren Stil und die Besonderheiten Ihrer Objekte. Sie haben immer die Freigabe vor Veröffentlichung – die KI liefert nur den Entwurf." },
    { question: "Wie reagieren Interessenten auf den Chatbot?", answer: "Sehr positiv, weil sie sofort eine Antwort bekommen. Wichtig ist die Transparenz: Der Chatbot stellt sich als digitaler Assistent vor und übergibt komplexere Themen nahtlos an Sie. Interessenten erleben das als Service-Plus." },
    { question: "Ist die Verarbeitung von Interessentendaten DSGVO-konform?", answer: "Ja, alle Daten werden auf europäischen Servern verarbeitet, Einwilligungen werden korrekt eingeholt und dokumentiert. Gerade im Immobilienbereich, wo viele persönliche Daten anfallen, ist das essenziell." },
    { question: "Was kostet die KI-Einführung im Maklerbüro?", answer: "Die Kosten hängen vom Umfang ab. Einzelne Bausteine wie Exposé-Generator oder Chatbot starten im niedrigen vierstelligen Bereich. Im kostenlosen Erstgespräch bekommen Sie eine konkrete Einschätzung." },
    { question: "Lohnt sich KI auch für Einzelmakler?", answer: "Gerade für Einzelmakler ist KI wertvoll – Sie sind Ihr eigenes Backoffice. Jede Stunde, die Sie nicht für Verwaltung verlieren, können Sie für Akquise oder Beratung nutzen. Die Investition rechnet sich oft schon nach wenigen Mandaten." },
    { question: "Wie schnell kann ich starten?", answer: "Einfache Bausteine wie ein Lead-Qualifizierungs-Chatbot sind innerhalb von 2 Wochen einsatzbereit. Ein vollständiges KI-Setup für ein Maklerbüro lässt sich in 4-6 Wochen aufbauen." },
  ],
  relatedLinks: [
    { label: "KI-Beratung im Detail", href: "/beratung" },
    { label: "Standard KI-Agenten ansehen", href: "/standard-agenten" },
    { label: "ROI für mein Büro berechnen", href: "/roi-rechner" },
    { label: "Kostenloses Erstgespräch", href: "/kontakt" },
  ],
};

const KIBeratungImmobilien = () => <LongTailLandingPage data={data} />;
export default KIBeratungImmobilien;
