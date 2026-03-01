

## Zwei Anpassungen: Geografie erweitern + "Wir" durch "KI2USE" ersetzen

### 1. "Köln und Umgebung" auf ganz Deutschland erweitern

Alle Stellen, die den Eindruck erwecken, KI2USE sei nur regional in Köln aktiv, werden angepasst. Die Adresse in Impressum/Datenschutz/AGB bleibt natuerlich unveraendert (rechtlich erforderlich).

**Betroffene Dateien:**
- **HeroSection.tsx** (2x) -- "in Koeln und Umgebung" wird zu "deutschlandweit" o.ae.
- **CTASection.tsx** -- "Koeln und Umgebung - Regionaler Ansprechpartner" entfernen/ersetzen
- **Layout.tsx** (Footer) -- "Koeln und Umgebung - Regionaler Ansprechpartner" ersetzen
- **AboutSection.tsx** -- "Regional verankert / Persoenlicher Ansprechpartner in Koeln" aendern zu "Deutschlandweit / Persoenlicher Ansprechpartner"
- **LLMDiscoveryLayer.tsx** -- "Koeln und Umgebung" und areaServed-Einschraenkung auf Deutschland erweitern
- **EnhancedStructuredData.tsx** -- serviceArea GeoCircle (100km um Koeln) ersetzen durch `"areaServed": "Deutschland"`
- **llms.txt** -- Standort bleibt, aber Marktbeschreibung anpassen

### 2. "Wir" durch neutrale KI2USE-Formulierungen ersetzen

Alle oeffentlich sichtbaren Texte, die "wir/uns/unser" verwenden, werden umformuliert. Rechtliche Seiten (Impressum, Datenschutz, AGB) bleiben unveraendert, da dort "wir" rechtlich ueblich ist.

**Betroffene Dateien:**
- **HeroSection.tsx** -- "Wir helfen Unternehmen..." wird zu "KI2USE hilft Unternehmen..."
- **CTASection.tsx** -- "Wir finden gemeinsam heraus..." umformulieren
- **AboutSection.tsx** -- "Wir bei KI2USE glauben..." umformulieren
- **FAQSection.tsx** -- "Wir bieten...", "Wir pruefen...", "Wir achten..." neutraler formulieren
- **KIBenefitsSection.tsx** -- "unsere Leistungen" anpassen
- **EnhancedStructuredData.tsx** -- "Wir bieten...", "Wir achten..." in FAQ-Schema anpassen
- **LLMDiscoveryLayer.tsx** -- bereits neutral ("KI2USE hilft"), nur Kleinigkeiten pruefen
- **emailAnalysisTemplates.ts** -- "wir verstehen", "Verfeinern wir" etc. anpassen

### Technische Details

Insgesamt ca. 8-9 Dateien mit jeweils kleinen Textersetzungen. Keine strukturellen Aenderungen, nur Copy-Anpassungen. Die Aenderungen betreffen:
- Sichtbare UI-Texte (Hero, About, CTA, FAQ, Footer)
- SEO/LLM-Metadaten (StructuredData, LLMDiscoveryLayer, llms.txt)
- E-Mail-Templates (emailAnalysisTemplates.ts)

Rechtliche Seiten (Impressum, Datenschutz, AGB) bleiben komplett unveraendert.

