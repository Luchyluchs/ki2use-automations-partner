import LongTailLandingPage, { LongTailPageData } from "@/components/LongTailLandingPage";

const data: LongTailPageData = {
  title: "ChatGPT-Schulung für Unternehmen | Praxisnah & DSGVO | KI2USE",
  description: "ChatGPT-Schulungen für Mitarbeiter und Teams. Praxisnah, DSGVO-konform, branchenspezifisch. Workshops für deutsche Unternehmen mit messbarem Produktivitätsgewinn.",
  keywords: "ChatGPT Schulung, ChatGPT Workshop, ChatGPT für Unternehmen, Mitarbeiterschulung KI, ChatGPT lernen, KI Workshop Unternehmen, Prompt Engineering Schulung, ChatGPT Training",
  canonical: "https://ki2use.de/chatgpt-schulung-unternehmen",
  badge: "ChatGPT-Schulungen für Teams",
  h1: "ChatGPT-Schulung für Ihr Unternehmen – praxisnah & sofort anwendbar",
  intro: "ChatGPT ist im Mittelstand angekommen – aber die meisten Mitarbeiter nutzen nur 10% des Potenzials. KI2USE schult Ihre Teams praxisnah und branchenspezifisch: Wie schreibt man gute Prompts? Welche Aufgaben kann ChatGPT übernehmen? Was ist DSGVO-konform und was nicht?",
  whatSection: {
    heading: "Warum strukturierte ChatGPT-Schulungen wichtig sind",
    paragraphs: [
      "ChatGPT ist mächtig – aber nur, wenn man weiß, wie man es richtig einsetzt. Die meisten Mitarbeiter probieren ChatGPT zwei-, dreimal aus, sind enttäuscht von den Ergebnissen und vergessen es wieder. Dabei liegt das Problem nicht an der Technologie, sondern an fehlendem Wissen über effektive Prompts und sinnvolle Anwendungsfälle.",
      "Eine professionelle ChatGPT-Schulung schließt genau diese Lücke. KI2USE-Workshops sind praxisnah und auf Ihre Branche zugeschnitten: Marketing-Teams lernen andere Use Cases als Vertriebsteams oder Steuerfachangestellte. Statt allgemeiner Theorie arbeiten Teilnehmer an echten Aufgaben aus ihrem Arbeitsalltag.",
      "Genauso wichtig: Aufklärung über DSGVO und Datenschutz. Welche Daten dürfen in ChatGPT eingegeben werden? Welche nicht? Welche Alternativen gibt es für sensible Bereiche? Nach der Schulung wissen Ihre Mitarbeiter genau, wo die Grenzen sind – und können ChatGPT verantwortungsvoll einsetzen.",
    ],
  },
  problems: [
    { title: "Mitarbeiter nutzen ChatGPT ineffektiv", description: "Ohne Schulung führen schlechte Prompts zu enttäuschenden Ergebnissen. Das Tool wird kaum genutzt – das Potenzial bleibt liegen." },
    { title: "DSGVO-Risiken durch unbedachte Nutzung", description: "Mitarbeiter geben aus Versehen Kundendaten oder interne Informationen in ChatGPT ein. Das kann teure Datenschutzprobleme verursachen." },
    { title: "Keine einheitliche Nutzung im Team", description: "Jeder probiert irgendwie. Es gibt keine Best Practices, keine geteilten Prompts, keinen messbaren Produktivitätsgewinn." },
  ],
  useCases: [
    { title: "Grundlagen-Workshop (halber Tag)", description: "Teilnehmer lernen, was ChatGPT kann, wie man gute Prompts schreibt und welche typischen Aufgaben sich automatisieren lassen. Ideal für den ersten Aufschlag.", timeSaving: "Sofort anwendbar im Arbeitsalltag" },
    { title: "Branchenspezifischer Praxis-Workshop (1 Tag)", description: "Vertieftes Training mit echten Aufgaben aus Ihrer Branche. Marketing, Vertrieb, Steuerberatung, Handwerk – jeder Bereich hat eigene Use Cases.", timeSaving: "Spart 5-15 Std/Woche pro Mitarbeiter" },
    { title: "Prompt-Engineering Vertiefung", description: "Für Mitarbeiter, die ChatGPT systematisch in Workflows integrieren wollen. Strukturierte Prompts, Templates, Wiederverwendung im Team.", timeSaving: "Steigert Output-Qualität deutlich" },
    { title: "DSGVO und Datenschutz im Fokus", description: "Konkrete Regeln: Was darf rein, was nicht? Wie geht man mit Kundendaten um? Welche Alternativen gibt es für sensible Bereiche? Zertifikat zur Nutzung.", timeSaving: "Vermeidet teure Datenschutzfehler" },
  ],
  workflow: {
    before: "Mitarbeiter probiert ChatGPT für Angebotstexte → schlechte Ergebnisse → gibt auf.\nKollege nutzt es für E-Mails → gibt versehentlich Kundendaten ein.\nKeine geteilten Prompts, keine Standards.\nErgebnis: Tool wird kaum genutzt, kein Produktivitätsgewinn.",
    after: "Nach KI2USE-Schulung: Mitarbeiter kennt 10-15 konkrete Use Cases für seinen Job.\nEr nutzt geprüfte Prompt-Templates aus dem Team-Repository.\nEr weiß genau, welche Daten DSGVO-konform sind und welche nicht.\nErgebnis: Messbarer Produktivitätsgewinn, sicherer Umgang mit dem Tool.",
  },
  faqs: [
    { question: "Wo finden die Schulungen statt?", answer: "Wahlweise in Präsenz bei Ihnen vor Ort, hybrid oder vollständig online. Bei Online-Workshops nutzen wir interaktive Formate, damit Teilnehmer aktiv mitarbeiten – kein passives Berieseln." },
    { question: "Für wen sind die Workshops geeignet?", answer: "Grundsätzlich für alle Mitarbeiter, die im Arbeitsalltag Texte schreiben, recherchieren, planen oder kommunizieren – also nahezu alle Wissensarbeiter. Wir passen den Inhalt an die jeweilige Funktion an." },
    { question: "Was kostet eine Schulung?", answer: "Die Kosten hängen vom Format (Halbtag, Tag), der Teilnehmerzahl und dem Vor-Ort-Aufwand ab. Im kostenlosen Erstgespräch erstellen wir ein passendes Angebot. Häufig sind Schulungen über Förderprogramme bezuschussbar." },
    { question: "Brauchen die Teilnehmer Vorkenntnisse?", answer: "Nein. Die Schulungen starten bei den Grundlagen und holen jeden Teilnehmer ab. Bestehende Erfahrungen werden integriert, sodass auch ChatGPT-Nutzer profitieren." },
    { question: "Gibt es eine Folge-Begleitung?", answer: "Ja, auf Wunsch bieten wir Follow-up-Sessions, Mitarbeiter-Sprechstunden oder die Etablierung interner KI-Botschafter an. So bleibt das Wissen langfristig verankert und wird kontinuierlich erweitert." },
    { question: "Was ist der Unterschied zu kostenlosen YouTube-Videos?", answer: "YouTube vermittelt allgemeines Wissen. Eine KI2USE-Schulung arbeitet mit echten Aufgaben aus Ihrem Arbeitsalltag, klärt branchenspezifische Use Cases und beantwortet konkrete Fragen Ihrer Mitarbeiter. Der Lerneffekt ist deutlich höher und nachhaltiger." },
  ],
  relatedLinks: [
    { label: "Alle KI-Schulungen ansehen", href: "/ki-schulungen" },
    { label: "KI-Beratung für Ihr Unternehmen", href: "/beratung" },
    { label: "Fördermöglichkeiten prüfen", href: "/foerderung" },
    { label: "Kostenloses Erstgespräch", href: "/kontakt" },
  ],
};

const ChatGPTSchulung = () => <LongTailLandingPage data={data} />;
export default ChatGPTSchulung;
