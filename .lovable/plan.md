

# Abstände zwischen Navigationsleiste und Inhalten reduzieren

## Problem
- Die **HeroSection** hat `min-h-screen`, was sie auf die volle Bildschirmhöhe zwingt -- dadurch entsteht viel Leerraum zwischen Headline und dem nächsten Abschnitt.
- Die **HeroSection** nutzt `space-y-12` (3rem Abstand) zwischen den Elementen, was die Elemente weit auseinanderzieht.
- Die **AboutSection** hat sowohl `section-padding` als auch `py-24`, die sich überlagern und doppelt Abstand erzeugen.

## Änderungen

### 1. HeroSection.tsx
- `min-h-screen` ersetzen durch `min-h-[70vh]` oder `min-h-[80vh]` -- genug Präsenz, aber kein unnötiger Leerraum
- Mobile `space-y-12` auf `space-y-8` reduzieren
- Desktop `space-y-12` auf `space-y-8` reduzieren

### 2. AboutSection.tsx
- `py-24` entfernen (kollidiert mit `section-padding`) und durch `py-16` ersetzen, damit ein einheitlicher, moderater Abstand bleibt

### Betroffene Dateien
- `src/components/HeroSection.tsx` (3 kleine Änderungen)
- `src/components/AboutSection.tsx` (1 Klassen-Änderung)
