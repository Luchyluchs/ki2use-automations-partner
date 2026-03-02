

## Chat-Fenster: iPhone-Tastatur-Anpassung

### Problem
Auf dem iPhone verschiebt sich das Chat-Fenster beim Oeffnen der Tastatur komplett nach oben. Header und erste Nachricht verschwinden, weil iOS Safari die `window.innerHeight` nicht aendert -- stattdessen aendert sich nur `visualViewport.height` und `visualViewport.offsetTop`.

### Loesung

**Datei: `src/components/NewChatbot.tsx`**

1. **`visualViewport.height` statt `window.innerHeight` nutzen**: Die aktuelle Viewport-Hoehe wird korrekt aus `window.visualViewport?.height` gelesen (Fallback auf `window.innerHeight`).

2. **Chat-Fenster mit `position: fixed` am unteren Rand des sichtbaren Bereichs verankern**: Ueber `visualViewport.offsetTop` wird der vertikale Offset berechnet, sodass das Fenster immer im sichtbaren Bereich bleibt, auch wenn die Tastatur geoeffnet ist.

3. **Hoehe dynamisch anpassen**: Die Chat-Fenster-Hoehe wird auf die verfuegbare `visualViewport.height` minus Abstand begrenzt, damit Header, Nachrichten und Input-Feld alle sichtbar bleiben.

### Technische Details

```text
Vorher (Tastatur offen):
+------------------+
| [versteckt]      |  <- Header + erste Nachrichten unsichtbar
| ...              |
| Nachrichten      |
| [Input]          |
| [Tastatur]       |
+------------------+

Nachher (Tastatur offen):
+------------------+
| [Header]         |  <- Alles sichtbar
| Nachrichten      |
| [Input]          |
| [Tastatur]       |
+------------------+
```

- State `viewportHeight` wird durch zwei States ersetzt: `vpHeight` und `vpOffsetTop`
- Im resize-Handler: `vpHeight = visualViewport.height`, `vpOffsetTop = visualViewport.offsetTop`
- Style des Chat-Fensters: `top: vpOffsetTop + 'px'`, `height: min(600, vpHeight - 80) + 'px'`, `bottom: 'auto'`
- Wenn Tastatur geschlossen: `vpOffsetTop` ist 0 und `vpHeight` ist die volle Fensterhoehe, also normales Verhalten

### Aenderungen

| Datei | Aenderung |
|---|---|
| `src/components/NewChatbot.tsx` | visualViewport-basierte Positionierung und Hoehe fuer iOS-Tastatur-Kompatibilitaet |

