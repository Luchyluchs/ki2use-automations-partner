

## Exit-Intent-Popup entfernen

Das Pop-up ("Kostenloses KI-Potenzial") wird durch den `useExitIntent`-Hook ausgeloest, wenn der Cursor den Viewport nach oben verlaesst. Es erscheint auf der Index-Seite.

### Aenderungen

| Datei | Aenderung |
|---|---|
| `src/pages/Index.tsx` | `useExitIntent`-Import und -Aufruf entfernen, `ExitIntentPopup`-Import und JSX entfernen |

Die Dateien `src/hooks/useExitIntent.ts` und `src/components/ExitIntentPopup.tsx` koennen bestehen bleiben (kein Schaden), werden aber nicht mehr referenziert.

