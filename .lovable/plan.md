

## Kölner Dom Silhouette im Background

### Idee
Eine minimalistische, geometrische Kölner Dom Silhouette als SVG direkt in den `FuturisticBackground.tsx` Canvas zeichnen – passend zum dunklen, spartanischen Design. Der Dom wird als feine Linien-Silhouette (Wireframe-Stil) gerendert, sehr dezent mit niedriger Opazität, sodass er sich nahtlos in die bestehenden Partikel und Verbindungslinien einfügt.

### Umsetzung

**Datei: `src/components/FuturisticBackground.tsx`**

- Eine SVG-Path-basierte Kölner Dom Silhouette als Canvas-Path2D zeichnen
- Positionierung: unten rechts im Viewport, leicht versetzt
- Stil: Nur Umrisslinien (stroke), keine Füllung – in der Primary/Accent-Farbe mit ~0.06-0.08 Opazität
- Skalierung responsiv basierend auf Canvas-Größe
- Der Dom wird VOR den Partikeln gezeichnet, sodass Partikel und Verbindungslinien darüber schweben
- Partikel in der Nähe des Doms können subtil mit der Silhouette interagieren

### Visuelles Ergebnis
- Sehr dezente, kaum sichtbare Dom-Silhouette im Hintergrund
- Passt zum minimalistischen Neura-inspirierten Design
- Lokaler Köln-Bezug ohne aufdringlich zu wirken
- Wireframe/technischer Stil passend zum KI-Thema

### Änderungen

| Datei | Was |
|---|---|
| `src/components/FuturisticBackground.tsx` | Kölner Dom Silhouette als Canvas-Linienzeichnung einfügen |

