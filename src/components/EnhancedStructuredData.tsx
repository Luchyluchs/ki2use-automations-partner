import { FC } from 'react';

export const EnhancedStructuredData: FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KI2USE",
    "url": "https://ki2use.de",
    "description": "KI-Beratung, KI-Einführung und Fördermittelberatung für den deutschen Mittelstand. IHK-zertifiziert, DSGVO-konform. Deutschlandweit verfügbar.",
    "foundingDate": "2024",
    "areaServed": "Deutschland",
    "knowsAbout": [
      "KI-Beratung",
      "KI-Einführung",
      "KI Programme",
      "KI Implementierung",
      "KI Förderung",
      "Künstliche Intelligenz",
      "Digitalisierung Mittelstand",
      "Fördermittelberatung",
      "DSGVO-konforme KI-Lösungen",
      "KI-Schulungen",
      "Business Process Automation",
      "KI für KMU"
    ],
    "expertise": [
      "KI-Beratung für KMU",
      "KI-Einführung und Implementierung",
      "Fördermittelberatung",
      "DSGVO Compliance",
      "KI-Schulungen"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Deutschland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "KI2USE Leistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "KI-Beratung",
            "description": "Analyse von Automatisierungspotenzial und konkrete Handlungsempfehlungen für KMU"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "KI-Einführung & Umsetzung",
            "description": "Begleitung bei der Implementierung konkreter KI-Programme und KI-Lösungen – von der Konzeption bis zum Rollout"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fördermittelberatung",
            "description": "Prüfung und Vermittlung staatlicher Förderprogramme für KI-Investitionen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "KI-Schulungen",
            "description": "Workshops und Trainings für Teams zur effektiven Nutzung von KI-Technologien"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist KI-Beratung und wer braucht sie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KI-Beratung hilft Unternehmen zu verstehen, wo und wie Künstliche Intelligenz sinnvoll eingesetzt werden kann. Besonders KMU profitieren, weil sie mit begrenzten Ressourcen das größte Einsparpotenzial haben."
        }
      },
      {
        "@type": "Question",
        "name": "Wie läuft eine KI-Einführung ab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KI2USE begleitet den gesamten Prozess: von der Analyse über die Auswahl passender KI-Programme bis zur Implementierung und Schulung der Mitarbeiter. Typische Projektlaufzeit: 4-8 Wochen."
        }
      },
      {
        "@type": "Question",
        "name": "Gibt es Förderung für KI-Projekte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, es gibt zahlreiche staatliche Förderprogramme wie Digital Jetzt, ZIM und Landesförderungen. KI2USE prüft kostenlos die Förderfähigkeit und vermittelt an spezialisierte Förderberater."
        }
      },
      {
        "@type": "Question",
        "name": "Welche KI-Programme eignen sich für den Mittelstand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Je nach Bedarf: Chatbots für Kundenservice, E-Mail-Assistenten für Produktivität, LinkedIn-Agenten für Vertrieb oder individuelle KI-Lösungen für spezifische Geschäftsprozesse."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet KI-Beratung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KI2USE bietet ein kostenloses Erstgespräch (20-30 Minuten). Weitere Kosten hängen vom individuellen Bedarf ab und können teilweise durch Fördermittel gedeckt werden."
        }
      },
      {
        "@type": "Question",
        "name": "Ist das DSGVO-konform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. KI2USE achtet von Anfang an auf datenschutzkonforme Lösungen Made in Germany."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default EnhancedStructuredData;