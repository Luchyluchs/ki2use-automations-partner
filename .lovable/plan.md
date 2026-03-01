
## Standard-Agenten Seite: Scroll-Effekte und Farbanpassung

### Problem
Die Seite `/standard-agenten` hat:
1. Scroll-Effekte sind teilweise vorhanden (scroll-scale auf Karten), aber der Header-Bereich, ROI-Sektion und CTA-Sektion haben keine funktionierenden Reveal-Effekte
2. Die CTA-Sektion ("Wichtiger Hinweis") verwendet `bg-gradient-primary` -- zu grell, passt nicht zum gedaempften Neura-Design
3. Die `bg-muted` Hintergrundfarbe der CTA-Sektion erzeugt einen harten Bruch
4. Redundante Hook-Aufrufe (`useScrollReveal`, `useParallax`, `useScrollFade`) -- der globale Observer im Layout reicht

### Aenderungen an `src/pages/StandardAgents.tsx`

**Scroll-Effekte ergaenzen:**
- ROI-Calculator Sektion: Container bekommt `scroll-scale`
- CTA-Sektion ("Wichtiger Hinweis"): Inner-Card bekommt `scroll-reveal`

**Farben abdaempfen:**
- CTA-Card: `bg-gradient-primary` ersetzen durch `bg-gradient-hero` (passend zum Rest der Seite)
- CTA-Sektion Hintergrund: `bg-muted` ersetzen durch `bg-background` fuer nahtlosen Uebergang
- CTA-Button: `bg-card text-foreground hover:bg-muted` anpassen zu `bg-white/10 text-primary-foreground hover:bg-white/20` fuer bessere Harmonie mit dem dunkleren Gradient

**Redundante Hooks entfernen:**
- `useScrollReveal()`, `useParallax()`, `useScrollFade()` entfernen -- werden bereits global ueber Layout behandelt

### Betroffene Dateien
- `src/pages/StandardAgents.tsx`
