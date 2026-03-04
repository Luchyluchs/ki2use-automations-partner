

## SEO & LLM-Auffindbarkeit umfassend verbessern

### Probleme

1. **index.html**: Title/Description auf "Koeln" beschraenkt, Emojis in Description, Keywords decken "KI Einfuehrung", "KI Programme", "KI Foerderung" nicht ab
2. **Sitemap**: `/beratung` und `/foerderung` fehlen komplett
3. **llms.txt**: Fokus auf "KI-Agenten" statt auf Beratung/Einfuehrung/Foerderung
4. **useSEO Templates**: Emojis in Descriptions, fehlende Keywords fuer Beratung/Foerderung
5. **Seiten-SEO**: Beratung und Foerderung haben keine Keywords, Canonical nur relativ
6. **Structured Data**: `knowsAbout` fehlt "KI Einfuehrung", "KI Programme", "KI Foerderung Mittelstand"
7. **LLMMetaTags/LLMDiscoveryLayer**: Begriffe wie "KI Einfuehrung", "KI Programme", "KI Foerderung" fehlen

### Aenderungen

| Datei | Was |
|---|---|
| **index.html** | Title zu "KI-Beratung, KI-Einfuehrung & Foerderung fuer den Mittelstand \| KI2USE". Description ohne Emojis, breiter (Deutschland statt Koeln). Keywords erweitern um "KI Einfuehrung", "KI Programme", "KI Foerderung", "KI Implementierung". `knowsAbout` in beiden Schema-Bloecken erweitern. Service-Schema auf Beratung/Foerderung aktualisieren. |
| **public/sitemap.xml** | `/beratung` (priority 0.9) und `/foerderung` (priority 0.8) hinzufuegen. `lastmod` auf 2026-03-04 aktualisieren. |
| **public/llms.txt** | Komplett ueberarbeiten: Beratung, KI-Einfuehrung und Foerderung als Kernleistungen. KI-Agenten als Teil der Umsetzung. Neue FAQ zu Foerderung und KI-Einfuehrung. |
| **src/hooks/useSEO.ts** | Emojis aus allen SEOTemplates entfernen. Neue Templates fuer `beratung` und `foerderung` hinzufuegen. Keywords ueberall um "KI Einfuehrung", "KI Programme", "KI Foerderung" erweitern. Canonical-URLs absolut machen. |
| **src/pages/Beratung.tsx** | useSEO-Aufruf mit erweiterten Keywords und absolutem Canonical. |
| **src/pages/Foerderung.tsx** | useSEO-Aufruf mit erweiterten Keywords und absolutem Canonical. |
| **src/components/LLMMetaTags.tsx** | Keywords um "KI Einfuehrung", "KI Programme", "KI Foerderung Mittelstand", "KI Implementierung" erweitern. |
| **src/components/LLMDiscoveryLayer.tsx** | Begriffe "KI Einfuehrung", "KI Programme", "KI Foerderung" in DefinedTerms und Services einbauen. |
| **src/components/EnhancedStructuredData.tsx** | `knowsAbout` um "KI Einfuehrung", "KI Programme", "KI Foerderung" erweitern. Neue FAQ-Eintraege zu diesen Themen. |

### Ziel-Keywords (neu abgedeckt)

- KI Beratung Deutschland / Mittelstand
- KI Einfuehrung Unternehmen
- KI Programme fuer KMU
- KI Foerderung / Foerdermittel KI
- KI Implementierung Deutschland
- Kuenstliche Intelligenz Beratung
- Digitalisierung Foerderung Mittelstand

