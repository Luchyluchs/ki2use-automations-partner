
## Maus-Effekt passend zum KI2USE Design

### Konzept
Ein subtiler **Cyan-Glow** folgt dem Mauszeiger -- passend zum dunklen Farbschema mit Cyan/Teal-Akzenten und dem KI/Robotik-Thema. Der Effekt erinnert an ein "Scanner"-Licht, das die Seite abtastet.

### Umsetzung
Die bestehende `FuturisticBackground.tsx` wird erweitert:

1. **Maus-Glow-Kreis**: Ein weicher, radialer Cyan-Gradient (ca. 200-300px Radius) folgt dem Cursor mit leichter Verzoegerung (smooth trailing)
2. **Partikel reagieren staerker**: Partikel in der Naehe des Cursors leuchten heller auf und werden leicht angezogen statt abgestossen -- wie ein Magnetfeld
3. **Verbindungslinien zum Cursor**: Nahe Partikel verbinden sich mit feinen Linien zum Mauszeiger, als wuerde der Cursor ins Netzwerk "eingesteckt"

### Technische Details
- Alles in der bestehenden Canvas-Zeichnung (`FuturisticBackground.tsx`), kein zusaetzliches DOM-Element
- Smooth-Interpolation der Mausposition (lerp) fuer fluessige Bewegung
- Farben aus CSS-Variablen (`--primary`, `--accent`) fuer Theme-Konsistenz
- Effekt nur auf Desktop (kein Touch), performant durch bestehenden `requestAnimationFrame`-Loop
