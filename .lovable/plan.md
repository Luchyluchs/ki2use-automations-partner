
# Interaktiver Foerdercheck auf der Foerderung-Seite

## Uebersicht
Ein mehrstufiges Formular (als Modal/Dialog) auf der Foerderung-Seite mit 6 Schritten, Fortschrittsanzeige, Webhook-Anbindung und Bestaetigungsscreen.

## Umsetzung

### 1. Neue Komponente: `src/components/FoerderCheck.tsx`
- React-Komponente mit internem State fuer aktuellen Schritt (1-6), Abschluss-Screen und Bestaetigungs-Screen
- Nutzt den vorhandenen `Dialog` aus `src/components/ui/dialog.tsx`
- State-Objekt fuer alle Formulardaten (`mitarbeiter`, `unternehmensalter`, `bundesland`, `branche`, `vorhaben[]`, `vorname`, `nachname`, `email`, `unternehmen`)

**Schritt 1-4**: Radio-Button-Auswahl (Single Select) mit gestylten Karten
**Schritt 3**: Dropdown (Select-Komponente) mit 16 Bundeslaendern
**Schritt 5**: Checkbox-Auswahl (Mehrfachauswahl) mit gestylten Karten
**Schritt 6**: Kontaktformular mit Input-Feldern, Validierung (Vorname, Nachname, E-Mail Pflicht)

**Abschluss-Screen**: "Fast geschafft!" mit Zusammenfassung-freiem Text und "Kostenlos pruefen lassen"-Button
**Bestaetigungs-Screen**: "Ihre Anfrage ist eingegangen" mit CalendlyButton

**UI-Elemente pro Schritt**:
- Fortschrittsbalken oben: "Schritt X von 6" + Progress-Bar
- Zurueck-Button (ab Schritt 2)
- Weiter-Button (disabled wenn keine Auswahl)

### 2. Webhook-Anbindung
- `fetch()` POST an `https://n8n.srv929188.hstgr.cloud/webhook/fe97e9e3-f45a-4bba-9e5f-82cead14235f`
- JSON-Body mit allen Feldern wie spezifiziert
- Loading-State waehrend des Sendens
- Fehlerbehandlung mit Toast-Nachricht

### 3. Integration in `src/pages/Foerderung.tsx`
- Neuer Abschnitt zwischen "Ablauf" und "Vorteile" mit CTA-Button "Jetzt Foerdercheck starten"
- Button oeffnet den Dialog
- Bestehendes Design beibehalten (border, rounded-2xl, font-light, text-primary)

### Technische Details
- Verwendet bestehende UI-Komponenten: `Dialog`, `Button`, `Input`, `Select`, `Progress`, `RadioGroup`, `Checkbox`
- Zod-Validierung fuer E-Mail und Pflichtfelder in Schritt 6
- Mobile-first: Karten-Optionen als volle Breite, Dialog responsive
- Kein Emoji, gleiche Schriften/Farben wie Rest der Seite
