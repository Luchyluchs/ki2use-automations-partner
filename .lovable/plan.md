

# Weitere Performance-Optimierung (Mobile) – Runde 2

## Aktuelle Werte nach Runde 1
| Messwert | Vorher | Jetzt | Ziel |
|----------|--------|-------|------|
| Score | 5 | 70 | 90+ |
| FCP | 4,3s | 3,8s | <1,8s |
| LCP | 7,2s | 4,4s | <2,5s |
| TBT | 120ms | 180ms | <200ms |
| SI | 5,7s | 5,6s | <3,4s |

## Verbleibende Probleme & Lösungen

### 1. Google Fonts Stylesheet blockiert immer noch
**Problem:** `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" />` in Zeile 231 ist render-blocking – der Browser wartet auf diese externe CSS-Datei bevor er irgendwas malt.

**Lösung:** `media="print" onload="this.media='all'"` Trick – lädt das Stylesheet non-blocking:
```html
<link rel="stylesheet" href="...Inter..." media="print" onload="this.media='all'" />
<noscript><link rel="stylesheet" href="...Inter..." /></noscript>
```
Plus: Font-Gewichte reduzieren auf nur 300;400;500;600;700 (wght@200 wird kaum genutzt).

### 2. gtag.js Script in `<head>` ist render-blocking
**Problem:** Zeile 262 `<script async src="https://www.googletagmanager.com/gtag/js?id=G-6PRXY6PQ5J"></script>` plus der zugehörige Inline-Script (264-266) laufen vor dem Rendering. `async` blockiert zwar nicht das Parsing, aber die Ausführung konkurriert mit dem Main Thread.

**Lösung:** gtag.js auch erst nach 3s laden (wie GTM bereits), oder in den GTM-Timeout integrieren. Die Consent-Defaults bleiben sofort aktiv.

### 3. Synchron geladene Komponenten in App.tsx
**Problem:** `NewChatbot` (357 Zeilen), `FloatingVoiceAgent` (93 Zeilen), `CookieConsentBanner`, `SecurityMonitor` und `MobileBottomNav` werden alle synchron importiert und sofort gerendert – keiner davon ist für den First Paint nötig.

**Lösung:** Alle 5 per `lazy()` + `Suspense` laden. Sie erscheinen erst nach der initialen Interaktion oder nach dem Scrollen.

### 4. Zu viele Font-Gewichte
**Problem:** 6 Font-Gewichte (200-700) werden geladen. Jedes zusätzliche Gewicht vergrößert die Font-Datei.

**Lösung:** Auf 4 reduzieren: `300;400;600;700` (wght@200 und @500 werden kaum genutzt – 200 nur in Hero-Heading, kann auf 300 geändert werden).

## Erwartete Verbesserung
- FCP: 3,8s → ~1,5-2s (Font non-blocking + gtag deferred)
- LCP: 4,4s → ~2,5-3s (weniger Main Thread Konkurrenz)
- TBT: 180ms → ~100ms (weniger synchrone Komponenten)
- SI: 5,6s → ~3-4s

## Kein Design-Risiko
Alle Änderungen betreffen nur Ladereihenfolge. Fonts laden trotzdem, nur non-blocking. Chatbot/VoiceAgent erscheinen nach kurzer Verzögerung statt sofort.

