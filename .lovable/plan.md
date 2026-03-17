

# Performance-Optimierung (ohne Design-Änderungen)

Ja – folgende Optimierungen sind **risikofrei** und ändern nichts am Design:

## 1. Font-Loading Fix (größter Impact auf FCP)
**Problem:** `@import url(...)` in Zeile 1 von `index.css` blockiert das Rendering komplett.  
**Lösung:** `@import` entfernen, stattdessen `<link>` mit `display=swap` in `index.html` einfügen (nach den bestehenden `preconnect`-Tags). Visuell identisch, aber nicht mehr render-blocking.

## 2. Ungültige Preload-Hints entfernen
**Problem:** Zeile 231-232 in `index.html` preloaden `/src/main.tsx` und `/src/index.css` – das funktioniert bei Vite nicht (Dateien werden zur Buildzeit transformiert).  
**Lösung:** Diese 2 Zeilen entfernen. Bringt keine visuelle Änderung, entfernt aber unnötige Netzwerk-Requests.

## 3. GTM-Script verzögern
**Problem:** Das GTM-Script (Zeile 270-361) mit Retry-Logik, Timeout und Fallback blockiert den Main Thread beim initialen Load.  
**Lösung:** GTM erst nach 3 Sekunden laden (`setTimeout` um den `loadGTM()`-Aufruf). Consent-Default bleibt sofort. Analytics-Daten gehen nicht verloren (dataLayer puffert).

## 4. FloatingParticles Canvas durch CSS ersetzen
**Problem:** 50-Partikel-Canvas mit endlosem `requestAnimationFrame`-Loop startet sofort beim Seitenaufbau.  
**Lösung:** Canvas-Partikel durch 5-6 CSS-animierte `div`-Elemente ersetzen (gleicher visueller Effekt: kleine schwebende Punkte mit `opacity: 0.1-0.5`). Die FloatingBlobs und der Gradient-Mesh bleiben exakt gleich.

## 5. InteractiveKIDemo lazy laden
**Problem:** Wird synchron in `HeroSection.tsx` importiert, ist aber nur auf Desktop sichtbar.  
**Lösung:** `React.lazy()` + `Suspense` nur für diese Komponente. Auf Mobile wird sie gar nicht gerendert, auf Desktop lädt sie nach dem ersten Paint.

---

**Erwartete Verbesserung:**
- FCP: 4,3s → ~1,5-2s (Font-Fix + Script-Deferral)
- LCP: 7,2s → ~3-4s (weniger Main Thread Blocking)
- Speed Index: 5,7s → ~3-4s

**Garantiert keine Design-Änderung:** Alle Maßnahmen betreffen nur Ladereihenfolge und Rendering-Strategie.

