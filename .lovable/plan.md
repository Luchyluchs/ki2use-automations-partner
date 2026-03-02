

## Footer: Reihenfolge angleichen, kurze Labels, aktive Seite hervorheben

### Aenderungen in `src/components/Layout.tsx`

**1. Reihenfolge wie Navigation**

Aktuell: KI-Beratung, KI-Agenten, Foerderung, KI-Rechner, Demoportal
Neu: Beratung, Agenten, Rechner, Foerderung, Demo

**2. Kuerzere Labels fuer mobile Ansicht**

| Navigation | Footer (kurz) |
|---|---|
| Beratung | Beratung |
| KI-Agenten | Agenten |
| KI-Rechner | Rechner |
| Foerderung | Foerderung |
| Demo | Demo |

**3. Aktive Seite farbig hervorheben**

Der Link der aktuellen Seite wird farbig (`text-primary`) dargestellt, alle anderen bleiben grau (`text-white/60`). Dafuer wird die bestehende `isActive`-Funktion wiederverwendet.

### Technische Umsetzung

- Footer-Links in Zeilen 106-112 umordnen und Labels kuerzen
- Klassennamen dynamisch setzen: aktiv = `text-primary`, inaktiv = `text-white/60 hover:text-white`

### Datei

| Datei | Aktion |
|---|---|
| `src/components/Layout.tsx` | Footer-Links umordnen, kuerzen, aktive Hervorhebung |

