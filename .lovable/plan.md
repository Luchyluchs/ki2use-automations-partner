

## Scroll-Effekte Optimierung

### Aktuelle Probleme

1. **ScrollProgressIndicator** loest bei jedem Scroll-Event ein React-Re-Render aus (`useState` + `setState`) -- unnoetig, da nur ein CSS-Transform geaendert wird
2. **useScrollReveal** wird in mehreren Komponenten aufgerufen (Index, HeroSection, KIBenefitsSection, FAQSection) -- erzeugt mehrere redundante IntersectionObserver
3. **FuturisticBackground** ruft `getComputedStyle()` in jedem Animations-Frame auf (~60x/Sekunde) -- teuer und unnoetig, da sich die Werte nicht aendern
4. **useMagneticCursor** hat fehlerhafte Cleanup-Logik (leere Arrow-Functions statt der echten Handler)
5. **useEnhancedParallax** laeuft parallel zum Canvas-Loop -- koennte zusammengefasst werden

### Geplante Aenderungen

**1. ScrollProgressIndicator.tsx -- DOM-direkt statt React-State**
- `useState`/`setState` entfernen
- Stattdessen `useRef` auf das DOM-Element und `element.style.transform` direkt setzen
- Kein Re-Render mehr bei jedem Scroll

**2. FuturisticBackground.tsx -- CSS-Variablen cachen**
- `getComputedStyle` einmalig beim Mount und bei Resize auslesen
- Werte in einer Ref speichern statt in jedem Frame neu abzufragen
- Spart ~60 Layout-Berechnungen pro Sekunde

**3. useScrollAnimations.ts -- Redundante Observer zusammenfuehren**
- `useScrollReveal` so anpassen, dass es nur einmal global einen Observer registriert (Singleton-Pattern mit Ref-Counter)
- `useMagneticCursor` Cleanup korrigieren: echte Handler-Referenzen in `removeEventListener` verwenden
- `useEnhancedParallax` mit `will-change: transform` und `transform: translate3d()` fuer GPU-Beschleunigung

**4. CSS-Optimierungen in index.css**
- `scroll-behavior: smooth` nur wenn `prefers-reduced-motion: no-preference`
- `will-change` Properties gezielter einsetzen (nur waehrend Animation, nicht dauerhaft)

### Zusammenfassung der Dateien
- `src/components/ScrollProgressIndicator.tsx` -- DOM-direkte Updates
- `src/components/FuturisticBackground.tsx` -- CSS-Variablen cachen
- `src/hooks/useScrollAnimations.ts` -- Singleton Observer, Cleanup-Fix, GPU-Hints
- `src/index.css` -- reduced-motion Support, will-change Optimierung

