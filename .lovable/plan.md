

## Problem
Das Canvas hat `z-0` (z-index: 0) und `opacity: 0.4` -- auf den helleren blauen Sektionen (gradient-hero Bereiche) ist der Kontrast zu gering, um den Effekt zu sehen.

## Loesung

Zwei Anpassungen in `src/components/FuturisticBackground.tsx`:

1. **Z-Index erhoehen**: Von `z-0` auf `z-10`, damit das Canvas ueber den Sektions-Hintergruenden liegt
2. **Opacity erhoehen**: Von `0.4` auf `0.6` fuer bessere Sichtbarkeit auf helleren Bereichen
3. **Glow-Intensitaet verstaerken**: Die Opazitaet des Maus-Glows von `0.12` / `0.05` auf `0.18` / `0.08` erhoehen, damit er auch auf helleren Hintergruenden sichtbar bleibt
4. **Partikel heller machen**: Basis-Opacity der Partikel leicht erhoehen (`0.4 + 0.15` statt `0.4 + 0.1`)

### Aenderungen
- **Datei**: `src/components/FuturisticBackground.tsx`
  - Zeile 197: `z-0` zu `z-10` aendern
  - Zeile 198: `opacity: 0.4` zu `opacity: 0.6` aendern
  - Zeile 94: Glow center opacity `0.12` zu `0.18`
  - Zeile 95: Glow mid opacity `0.05` zu `0.08`
  - Zeile 42: Partikel base opacity erhoehen

