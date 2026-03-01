import { FC } from 'react';

export const EnhancedStructuredData: FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KI2USE",
    "url": "https://ki2use.de",
    "description": "KI-Beratung und Umsetzung für den deutschen Mittelstand. IHK-zertifiziert, DSGVO-konform. Deutschlandweit verfügbar.",
    "foundingDate": "2024",
    "areaServed": "Deutschland",
    "knowsAbout": [
      "Künstliche Intelligenz",
      "KI-Beratung",
      "Digitalisierung Mittelstand",
      "Fördermittelberatung",
      "DSGVO-konforme KI-Lösungen",
      "KI-Implementierung"
    ],
    "expertise": [
      "KI-Beratung für KMU",
      "KI-Umsetzung und Implementierung",
      "Fördermittelberatung (Digital Jetzt, ZIM)",
      "DSGVO Compliance"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Deutschland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "KI-Beratung Services",
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
            "name": "KI-Umsetzung",
            "description": "Begleitung bei der Implementierung konkreter KI-Lösungen – von der Konzeption bis zum Rollout"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fördermittelberatung",
            "description": "Prüfung und Beantragung staatlicher Förderprogramme wie Digital Jetzt und ZIM"
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
        "name": "Lohnt sich KI für kleine Unternehmen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja! Gerade kleine Unternehmen profitieren oft am meisten, weil sie mit begrenzten Ressourcen besonders viel einsparen können."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet eine KI-Beratung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KI2USE bietet ein kostenloses Erstgespräch (20-30 Minuten). Weitere Kosten hängen vom individuellen Bedarf ab."
        }
      },
      {
        "@type": "Question",
        "name": "Gibt es Förderung für KI-Projekte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, staatliche Förderprogramme wie Digital Jetzt (bis 50% Zuschuss) oder ZIM können viele Unternehmen in Anspruch nehmen."
        }
      },
      {
        "@type": "Question",
        "name": "Ersetzt KI meine Mitarbeiter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nein. KI unterstützt Ihre Mitarbeiter bei Routineaufgaben, damit sie sich auf wertschöpfende Arbeit konzentrieren können."
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
