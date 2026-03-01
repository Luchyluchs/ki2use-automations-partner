

## Beratungsseite an neue Strategie anpassen

### Aktueller Zustand
Die Kontaktseite (/kontakt) verwendet noch das alte Design: fette Schriften (font-bold), helle Card-Hintergruende (bg-card), und der Fokus liegt generisch auf "KI-Automatisierung" statt auf dem Beratungsansatz.

### Ziel
Die Seite soll den Beratungs-Fokus der Hauptseite widerspiegeln und das Neura-Design verwenden.

### Aenderungen in `src/pages/Contact.tsx`

**1. Hero-Section ueberarbeiten**
- Titel aendern von "Sprechen wir ueber Ihre KI-Automatisierung" zu einem beratungsorientierten Titel wie "Ihr Weg zur KI beginnt mit einem Gespraech"
- Untertitel auf den Beratungsprozess ausrichten (Analyse, Empfehlung, Umsetzung)
- Typografie anpassen: `font-bold` durch `font-thin` ersetzen, passend zum Neura-Design

**2. Primaerer Beratungsbereich neu gestalten**
- Den Calendly-Block visuell prominenter als Beratungseinstieg positionieren
- Text staerker auf "KI-Beratung" und "Erstgespraech" ausrichten statt "Automatisierungspotenzial"
- Die drei Schritte der Beratungsstrategie einbauen: Analyse → Empfehlung → Umsetzung
- Card-Stil ersetzen durch schlichteres Design (border-basiert statt bg-card mit Shadow)

**3. Design an Neura-Stil anpassen**
- `bg-background` Section durch `bg-gradient-hero` ersetzen fuer durchgaengigen dunklen Look
- Schwere Card-Borders und Shadows reduzieren zugunsten subtiler Trennlinien
- `font-bold`/`font-semibold` durch `font-thin`/`font-light` ersetzen
- Gradient-Buttons und Icons dezenter gestalten

**4. Kontaktformular und Voice-Agent beibehalten**
- Beide bleiben als sekundaere Kontaktoptionen erhalten
- Visuell dem neuen Stil anpassen (weniger Card-Optik, mehr Minimalismus)

**5. Direkter Kontakt Footer**
- `bg-muted` durch subtilere Darstellung ersetzen (z.B. border-top statt farbiger Hintergrund)

### Technische Details
- Nur `src/pages/Contact.tsx` wird geaendert
- Alle bestehenden Komponenten (ContactForm, VoiceAgent, CalendlyButton) bleiben unveraendert
- Scroll-Animationen (scroll-reveal) bleiben aktiv

