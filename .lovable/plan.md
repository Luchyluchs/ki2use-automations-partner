

## Problem

Die `scroll-reveal` Klasse wurde auf den aeussersten Container der Demo-Login-Seite angewandt. Diese Klasse setzt `opacity: 0` und wartet auf ein Scroll-Event, um die Elemente einzublenden. Da die Login-Seite zentriert ist und keinen scrollbaren Inhalt hat, werden die Elemente nie sichtbar.

## Loesung

Die `scroll-reveal` Klasse aus dem aeussersten Container in `src/components/NewDemoLogin.tsx` entfernen. Stattdessen kann eine einfache `fade-in` Animation verwendet werden, die sofort beim Laden abspielt.

### Aenderung

**Datei: `src/components/NewDemoLogin.tsx` (Zeile 38)**

Vorher:
```
bg-gradient-hero ... scroll-reveal
```

Nachher:
```
bg-gradient-hero ... animate-fade-in
```

Dies stellt sicher, dass der Inhalt sofort sichtbar ist, waehrend der dunkle Hintergrund (`bg-gradient-hero`) beibehalten wird.

