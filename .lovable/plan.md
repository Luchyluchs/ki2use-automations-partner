

# ElevenLabs Voice Agent optimieren

## Aktueller Stand
Die Agent-ID `agent_6501k4ckhy26e568zy2z9bkvn6vx` ist bereits korrekt in `VoiceAgent.tsx` gesetzt und wird ueber `FloatingVoiceAgent` auf der gesamten Website angezeigt.

## Aenderung
`connectionType: "webrtc"` zu den `startSession`-Aufrufen hinzufuegen -- das ist die von ElevenLabs empfohlene Verbindungsmethode fuer niedrigere Latenz und bessere Audioqualitaet.

### Betroffene Dateien

**1. src/components/VoiceAgent.tsx (Zeile 26-28)**
- `startSession({ agentId: '...' })` erweitern um `connectionType: "webrtc"`

**2. src/components/DemoVoiceAgent.tsx (Zeile 39-41)**
- Gleiche Aenderung: `connectionType: "webrtc"` hinzufuegen

### Technische Details
- Kein neues Package noetig (`@11labs/react` ist bereits installiert)
- WebRTC nutzt direkte Peer-to-Peer-Verbindung statt WebSocket, was die Audio-Latenz deutlich reduziert
