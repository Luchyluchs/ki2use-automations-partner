

# Hintergrund-Gradient anpassen: Dunkler, klassischer Stil

## Ziel
Den `bg-gradient-hero` Hintergrund auf der gesamten Seite dunkler und klassischer gestalten -- weniger Cyan-Akzent, mehr tiefes Dunkelblau/Schwarz.

## Technische Umsetzung

### Datei: `src/index.css`

Die CSS-Variable `--gradient-hero` wird angepasst:

**Aktuell:**
```css
--gradient-hero: linear-gradient(135deg, hsl(200 25% 8%) 0%, hsl(197 35% 12%) 30%, hsl(193 45% 18%) 60%, hsl(189 55% 22%) 100%);
```

**Neu (dunkler, klassischer):**
```css
--gradient-hero: linear-gradient(135deg, hsl(210 20% 7%) 0%, hsl(205 18% 9%) 40%, hsl(200 15% 11%) 70%, hsl(195 12% 13%) 100%);
```

Die Farben werden deutlich dunkler und entsaettigter -- naeher an Schwarz mit nur einem minimalen, kuehlen Blauton. Das ergibt einen eleganten, klassischen dunklen Hintergrund ohne auffaellige Cyan-Akzente.

Die gleiche Anpassung wird auch fuer den `.dark`-Modus vorgenommen, damit beide konsistent sind.

