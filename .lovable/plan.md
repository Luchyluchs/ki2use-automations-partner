

## ROI-Rechner Seite: Scroll-Effekte, Hover-Effekte und Farbanpassung

### Problem
Die ROI-Rechner Seite (/roi-rechner) hat drei Defizite:
1. Keine Scroll-Reveal-Animationen auf den meisten Sektionen
2. Fehlende Hover-/Maus-Effekte auf den Schritt-Karten und dem Rechner
3. Zu grelle/helle Blautoene (besonders CTA-Sektion und Icon-Kreise)

### Aenderungen

**1. ROICalculator.tsx (Seite) -- Scroll- und Hover-Effekte hinzufuegen**

- Benefits-Grid (3 Karten: Kostentransparenz, Amortisationszeit, Agenten-Analyse):
  - Jede Karte bekommt `scroll-reveal` Klasse
  - `hover-lift` ist bereits vorhanden (gut)

- Rechner-Sektion:
  - Container bekommt `scroll-scale` Klasse

- "So funktioniert die Agenten-Berechnung"-Sektion:
  - Ueberschrift-Block bekommt `scroll-reveal`
  - Beschreibungstext bekommt `fade-in-element`
  - Jede der 4 Schritt-Karten bekommt `scroll-reveal` und `hover-lift`

- CTA-Sektion:
  - Textblock bekommt `scroll-reveal`

**2. ROICalculator.tsx (Seite) -- Grelle Blautoene abdunkeln**

- CTA-Sektion: `bg-gradient-primary` ersetzen durch einen dunkleren, gedaempften Gradient passend zum Neura-Design (z.B. `bg-gradient-hero` oder eine eigene dunklere Variante)
- Icon-Kreise in Benefits und Steps: `bg-gradient-primary` durch `bg-primary/20` mit `text-primary` Icon ersetzen -- subtiler, weniger grell
- CTA-Button Styling anpassen: weniger Kontrast, passend zum dunkleren Hintergrund

**3. ROICalculator.tsx (Komponente) -- Scroll-Effekte im Rechner selbst**

- Die Result-Cards (Aktuelle Kosten, Mit KI-Assistent, ROI-Analyse) bekommen `hover-lift`
- Der gesamte Rechner-Container bekommt `scroll-scale`

### Betroffene Dateien
- `src/pages/ROICalculator.tsx` -- Scroll-Klassen + Farbkorrektur
- `src/components/ROICalculator.tsx` -- Hover-Effekte auf Result-Cards
