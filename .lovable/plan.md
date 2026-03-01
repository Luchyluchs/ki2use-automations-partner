

## Scroll-Effekt auf der ganzen Seite reparieren

### Problem
Nach Analyse des Codes gibt es zwei Hauptursachen:

1. **LeadMagnetsSection hat keine Animations-Klassen** -- weder die Ueberschrift noch die Card noch der Newsletter-Bereich haben `scroll-reveal` oder `scroll-scale` Klassen. Deshalb passiert dort beim Scrollen nichts.

2. **Elemente verschwinden wieder** -- der Observer entfernt `revealed` wenn ein Element den Viewport verlaesst (Zeile 16-22 in useScrollAnimations.ts). Das fuehrt zu Flackern und dazu, dass Inhalte beim Zurueckscrollen kurz verschwinden und neu einblenden.

### Loesung

**1. useScrollAnimations.ts -- "Reveal once" Logik**
- Die `else`-Branch entfernen, die `revealed` wieder wegnimmt
- Elemente nach dem Reveal mit `unobserve()` vom Observer abmelden (spart auch Performance)
- Stagger-Children bleiben dauerhaft sichtbar nach erstem Einblenden

**2. LeadMagnetsSection.tsx -- Fehlende Animations-Klassen ergaenzen**
- Ueberschrift-Block: `scroll-reveal`
- Haupt-Card: `scroll-scale`
- Newsletter-Block: `scroll-reveal`

**3. CTASection.tsx -- Redundanten Hook-Aufruf entfernen**
- `useScrollReveal()` wird bereits in Index.tsx aufgerufen und beobachtet global alle Elemente
- Der zusaetzliche Aufruf in CTASection ist unnoetig

### Betroffene Dateien
- `src/hooks/useScrollAnimations.ts` -- Reveal-once + unobserve
- `src/components/LeadMagnetsSection.tsx` -- Animations-Klassen hinzufuegen
- `src/components/CTASection.tsx` -- Redundanten useScrollReveal entfernen

