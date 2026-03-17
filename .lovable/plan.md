

# Performance-Optimierung Runde 3 – von 84 auf 90+

## Fortschritt
| Messwert | Start | Runde 1 | Runde 2 | Ziel |
|----------|-------|---------|---------|------|
| Score | 5 | 70 | **84** | 90+ |
| FCP | 4,3s | 3,8s | **2,9s** | <1,8s |
| LCP | 7,2s | 4,4s | **3,1s** | <2,5s |
| TBT | 120ms | 180ms | **240ms** | <200ms |
| SI | 5,7s | 5,6s | **3,2s** | <3,4s ✓ |

## Verbleibende Probleme

### 1. CalendlyButton lädt `react-calendly` synchron im Hero
`react-calendly` (PopupButton) wird direkt in HeroSection importiert – auf Mobile und Desktop. Das ist eine externe Dependency die den Main Thread blockiert und die TBT von 180ms auf 240ms erhöht hat.

**Lösung:** CalendlyButton per `React.lazy()` laden. Fallback: einfacher `<a>`-Link zum Calendly-URL. Visuell identisch, aber die Calendly-Library wird erst nach dem First Paint geladen.

### 2. MutationObserver in useScrollReveal beobachtet gesamten Body
In `useScrollAnimations.ts` Zeile 47-50: Ein `MutationObserver` mit `{ childList: true, subtree: true }` auf `document.body` feuert bei jedem DOM-Change und ruft `observeAll()` auf, das den gesamten DOM nach 5 verschiedenen Selektoren durchsucht. Das erhöht die TBT.

**Lösung:** MutationObserver entfernen. Stattdessen `observeAll()` einmalig ausführen + nochmal nach 1s (für lazy-geladene Inhalte). Gleicher visueller Effekt, deutlich weniger Main-Thread-Arbeit.

### 3. useMagneticCursor läuft auf Mobile mit
`useMagneticCursor()` wird in Index.tsx aufgerufen, registriert mousemove-Events auf `.magnetic`-Elementen. Auf Mobile nutzlos, kostet aber Initialisierungszeit.

**Lösung:** Nur auf Desktop ausführen (Matchmedia-Check `pointer: fine`).

### 4. Font-Gewicht 200 wird nicht genutzt
`font-thin` in Tailwind = font-weight 100 (nicht 200). `font-extralight` = 200, wird nirgends verwendet. Gewicht 200 kann entfernt werden.

**Lösung:** In `index.html` `wght@200;300;400;600;700` → `wght@300;400;600;700` ändern. Kleinere Font-Datei.

## Erwartete Verbesserung
- FCP: 2,9s → ~1,5-2s (Calendly nicht mehr synchron)
- LCP: 3,1s → ~2,3-2,8s (weniger Main Thread Blocking)
- TBT: 240ms → ~100-150ms (MutationObserver weg, Calendly lazy, Magnetic nur Desktop)
- Score: 84 → ~90+

## Kein Design-Risiko
CalendlyButton zeigt sofort einen identischen Button – nur die Calendly-Popup-Library lädt im Hintergrund. Scroll-Animationen funktionieren identisch. Magnetic-Cursor existiert auf Mobile ohnehin nicht.

