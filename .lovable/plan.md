
# Fliessender Hintergrund-Gradient

## Problem
Jede Section auf der Seite hat einzeln die Klasse `bg-gradient-hero`. Da der Gradient bei jeder Section neu startet, entstehen sichtbare Kanten/Abstuefungen zwischen den Sektionen. Das wirkt abgehackt statt fliessend.

## Loesung
Die `bg-gradient-hero` Klasse wird von den einzelnen Sections entfernt und stattdessen einmalig auf einen uebergreifenden Wrapper im Layout gelegt. So fliesst der Gradient nahtlos ueber die gesamte Seite.

## Betroffene Dateien

### 1. `src/components/Layout.tsx`
- Den `<main>` Tag mit `bg-gradient-hero` versehen, damit der Gradient einmal ueber den gesamten Content laeuft

### 2. `src/pages/CustomAgents.tsx` (aktuelle Seite)
- `bg-gradient-hero` von allen 5 Sections entfernen (Header, Description, Process Steps, Advantages, ROI Calculator, CTA)

### 3. `src/pages/Contact.tsx`
- `bg-gradient-hero` von beiden Sections entfernen

### 4. Weitere Seiten pruefen und anpassen
- `src/pages/Index.tsx`, `src/pages/StandardAgents.tsx`, `src/pages/Training.tsx`, `src/pages/DemoPortal.tsx` und alle anderen Seiten, die `bg-gradient-hero` auf einzelnen Sections verwenden, werden ebenfalls bereinigt

## Ergebnis
Ein durchgehender, fliessender Gradient ueber die gesamte Seite ohne sichtbare Brueche zwischen Sektionen.
