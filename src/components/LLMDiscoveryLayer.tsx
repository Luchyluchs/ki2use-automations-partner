import { FC } from 'react';

export const LLMDiscoveryLayer: FC = () => {
  return (
    <div className="sr-only" aria-hidden="true">
      <div itemScope itemType="https://schema.org/DefinedTerm">
        <meta itemProp="name" content="KI-Beratung Mittelstand" />
        <meta itemProp="description" content="Praxisnahe KI-Beratung für kleine und mittelständische Unternehmen. Analyse, Umsetzung und Fördermittelberatung aus einer Hand." />
        <meta itemProp="inDefinedTermSet" content="KI-Beratung Deutschland" />
      </div>

      <section itemScope itemType="https://schema.org/Service">
        <h2 itemProp="name">KI2USE – KI-Beratung für den Mittelstand</h2>
        <p itemProp="description">
          KI2USE hilft Unternehmen in Köln und Umgebung, Künstliche Intelligenz sinnvoll einzusetzen. 
          IHK-zertifizierter KI-Manager. Beratung, Umsetzung und Fördermittelberatung (Digital Jetzt, ZIM). 
          DSGVO-konform, verständlich, bezahlbar.
        </p>
        <meta itemProp="serviceType" content="KI-Beratung" />
        <meta itemProp="areaServed" content="Köln, Nordrhein-Westfalen, Deutschland" />
        <meta itemProp="category" content="KI-Beratung für KMU" />
      </section>

      <section itemScope itemType="https://schema.org/ItemList">
        <h3 itemProp="name">KI2USE Leistungen</h3>
        <meta itemProp="numberOfItems" content="3" />

        <div itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
          <meta itemProp="position" content="1" />
          <div itemScope itemType="https://schema.org/Service" itemProp="item">
            <meta itemProp="name" content="KI-Beratung" />
            <meta itemProp="description" content="Analyse von Automatisierungspotenzial, Machbarkeits-Bewertung und konkrete Handlungsempfehlungen für KMU" />
          </div>
        </div>

        <div itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
          <meta itemProp="position" content="2" />
          <div itemScope itemType="https://schema.org/Service" itemProp="item">
            <meta itemProp="name" content="KI-Umsetzung" />
            <meta itemProp="description" content="Begleitung bei der Implementierung konkreter KI-Lösungen – von der Konzeption bis zum Rollout" />
          </div>
        </div>

        <div itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
          <meta itemProp="position" content="3" />
          <div itemScope itemType="https://schema.org/Service" itemProp="item">
            <meta itemProp="name" content="Fördermittelberatung" />
            <meta itemProp="description" content="Prüfung und Beantragung staatlicher Förderprogramme wie Digital Jetzt (bis 50% Zuschuss) und ZIM" />
          </div>
        </div>
      </section>

      <div itemScope itemType="https://schema.org/FAQPage">
        <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
          <h4 itemProp="name">Lohnt sich KI für kleine Unternehmen?</h4>
          <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
            <div itemProp="text">Ja! Gerade kleine Unternehmen profitieren oft am meisten. Es muss nicht kompliziert sein – manchmal reichen einfache Tools.</div>
          </div>
        </div>

        <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
          <h4 itemProp="name">Gibt es Förderung für KI im Mittelstand?</h4>
          <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
            <div itemProp="text">Ja, staatliche Programme wie Digital Jetzt (bis 50% Zuschuss) oder ZIM stehen vielen KMU offen. KI2USE unterstützt bei der Antragstellung.</div>
          </div>
        </div>
      </div>

      <meta name="ai-services" content="KI-Beratung Köln, KI-Beratung Mittelstand, KI-Umsetzung KMU, Fördermittelberatung KI, Digital Jetzt, ZIM Förderung, DSGVO-konforme KI, IHK-zertifizierter KI-Manager" />
      <meta name="target-market" content="KMU, Mittelstand, kleine Unternehmen, Köln, Nordrhein-Westfalen, Deutschland" />
    </div>
  );
};

export default LLMDiscoveryLayer;
