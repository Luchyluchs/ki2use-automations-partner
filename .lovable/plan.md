

## Google Consent Mode v2 implementieren

### Problem
GTM laedt, aber GA4 bekommt keine korrekten Consent-Signale. Der aktuelle Code pusht nur ein custom `consent_update` Event in den dataLayer – GA4 erkennt das nicht als offizielles Consent-Signal.

### Loesung

**1. `index.html`** – Consent Default VOR dem GTM-Script setzen:
```js
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'functionality_storage': 'granted',
  'security_storage': 'granted',
  'wait_for_update': 500
});
```
Dieses Script kommt direkt vor den bestehenden GTM-Block.

**2. `src/hooks/useCookieConsent.ts`** – `triggerGTMEvents` und `saveConsent` anpassen:
- Bei Consent-Aenderung: `gtag('consent', 'update', { analytics_storage: 'granted'/'denied', ad_storage: ... })` aufrufen
- Bei Ablehnung ebenfalls ein explizites `gtag('consent', 'update', { ... 'denied' })` senden
- Bei bestehendem gespeichertem Consent beim Laden ebenfalls das Update senden

### Aenderungen

| Datei | Was |
|---|---|
| `index.html` | Consent-Default-Block vor GTM einfuegen |
| `src/hooks/useCookieConsent.ts` | `gtag('consent', 'update', ...)` bei jeder Consent-Aenderung aufrufen |

### Wichtig
- Der Default muss VOR dem GTM-Script stehen, damit GA4 weiss, dass es auf ein Consent-Update warten soll
- `window.gtag` Funktion wird global definiert und in der TypeScript-Deklaration ergaenzt

