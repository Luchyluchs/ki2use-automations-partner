

## Navigation vereinheitlichen + Foerderung-Seite erstellen

### Problem
Mobile und Desktop-Navigation haben komplett unterschiedliche Eintraege. Die Navigationen sollen logisch gleich sein.

### Einheitliche Navigation (6 Punkte)

| Eintrag | Link | Ersetzt |
|---|---|---|
| Start | `/` | bleibt |
| Beratung | `/beratung` | bleibt |
| KI-Agenten | `/standard-agenten` | "Leistungen" (Desktop) / "Agenten" (Mobile) |
| KI-Rechner | `/roi-rechner` | neu in Desktop, existiert in Mobile |
| Foerderung | `/foerderung` | neu (eigene Seite) |
| Demo | `/demoportal` | existiert in Mobile, neu in Desktop |

### Aenderungen

**1. Neue Seite: `src/pages/Foerderung.tsx`**
- Eigene Seite fuer Foerdermittel/Zuschuesse
- Aufbau: Hero, Foerderprogramme, Ablauf, CTA
- Stil konsistent mit Beratung.tsx

**2. Desktop-Navigation (`src/components/Layout.tsx`)**
- Navigation-Array ersetzen durch: Start, Beratung, KI-Agenten, KI-Rechner, Foerderung, Demo
- Alle als direkte Links (keine Anchor-Links mehr auf `/#leistungen`, `/#ueber-uns`, `/#faq`)
- Footer aktualisieren: "Leistungen" wird "Angebot" mit korrekten Links zu `/beratung`, `/standard-agenten`, `/foerderung`, `/demoportal`

**3. Mobile-Navigation (`src/components/MobileBottomNav.tsx`)**
- Gleiche Logik: Start, Beratung, KI-Agenten, KI-Rechner, Foerderung, Demo
- Problem: 6 Items passen nicht gut in eine Bottom-Nav (max 5 empfohlen)
- Loesung: Die 5 wichtigsten in der Bottom-Nav, Rest ueber Hamburger-Menu erreichbar. Vorschlag fuer Bottom-Nav: Start, KI-Agenten, Beratung (primary), KI-Rechner, Demo. Foerderung ueber Header-Menu erreichbar.

**4. ServicesSection.tsx + MobileServiceCards.tsx**
- Umbauen zu kompakten Teaser-Karten: Beratung, KI-Agenten, Foerderung
- Kurzer Text + "Mehr erfahren"-Link statt langer Feature-Listen

**5. App.tsx**
- Neue Route `/foerderung` hinzufuegen

**6. Index.tsx**
- Anchor-Links (`/#leistungen`, `/#ueber-uns`, `/#faq`) werden nicht mehr aus der Navigation referenziert, die Sections bleiben aber auf der Seite bestehen

### Dateien

| Datei | Aktion |
|---|---|
| `src/pages/Foerderung.tsx` | Neu erstellen |
| `src/components/Layout.tsx` | Nav-Items + Footer aktualisieren |
| `src/components/MobileBottomNav.tsx` | Items angleichen |
| `src/components/ServicesSection.tsx` | Zu Teasern umbauen |
| `src/components/MobileServiceCards.tsx` | Analog anpassen |
| `src/App.tsx` | Route `/foerderung` hinzufuegen |

