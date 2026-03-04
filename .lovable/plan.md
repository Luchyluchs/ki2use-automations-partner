

## react-snap Integration fuer statische HTML-Snapshots

### Was passiert

`react-snap` rendert nach jedem Build alle Routen in einem Headless-Browser und speichert das fertige HTML. Google sieht sofort den kompletten Inhalt statt einer leeren `<div id="root">`.

### Aenderungen

| Datei | Was |
|---|---|
| **package.json** | `react-snap` als devDependency, `postbuild`-Script hinzufuegen |
| **src/main.tsx** | Von `createRoot` auf `hydrateRoot` umstellen (wenn Snapshot vorhanden), sonst `createRoot` |
| **package.json** | `reactSnap`-Konfiguration mit allen Routen |

### Details

**package.json** – Neues Script und Konfiguration:
```json
"scripts": {
  "postbuild": "react-snap"
},
"reactSnap": {
  "source": "dist",
  "include": [
    "/", "/beratung", "/foerderung", "/standard-agenten",
    "/massgeschneiderte-agenten", "/agenten-rechner",
    "/ki-schulungen", "/kontakt", "/impressum",
    "/datenschutz", "/agb"
  ],
  "minifyHtml": { "collapseWhitespace": false },
  "skipThirdPartyRequests": true,
  "headless": true,
  "puppeteerArgs": ["--no-sandbox"]
}
```

**src/main.tsx** – Hydration-Logik:
```tsx
import { createRoot, hydrateRoot } from 'react-dom/client';

const container = document.getElementById("root")!;
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
```

Wenn `container` bereits HTML enthaelt (= Snapshot wurde geladen), wird `hydrateRoot` verwendet. Sonst normales `createRoot` wie bisher. Die Seite sieht und funktioniert fuer Besucher identisch.

