import React, { useCallback } from 'react';
import { useConversation } from '@11labs/react';

const VoiceAssistant: React.FC = () => {
  const conversation = useConversation({
    onConnect: () => console.log('ElevenLabs Agent verbunden'),
    onDisconnect: () => console.log('ElevenLabs Agent getrennt'),
    onError: (error) => {
      console.error('ElevenLabs Fehler:', error);
      alert('Fehler bei der Kommunikation mit dem Sprachassistenten.');
    },
  });

  const handleConversationToggle = useCallback(async () => {
    if (conversation.status === 'connected') {
      await conversation.endSession();
    } else {
      try {
        // Mikrofonzugriff anfragen
        await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // ElevenLabs Agent starten
        await conversation.startSession({
          agentId: 'agent_9201k1xfxkxrepj9q3zqrekwfkvs'
        });
      } catch (error) {
        console.error('Mikrofonzugriff verweigert:', error);
        alert('Mikrofonzugriff wurde verweigert. Bitte erlauben Sie den Zugriff in Ihren Browser-Einstellungen.');
      }
    }
  }, [conversation]);

  const getButtonText = () => {
    if (conversation.status === 'connected') {
      return conversation.isSpeaking ? 'Agent spricht...' : 'Gespräch beenden';
    }
    return 'Mit Assistent sprechen';
  };

  const isConnected = conversation.status === 'connected';

  return (
    <div className="voice-assistant-container">
      <style>
        {`
          #voice-agent-button {
            cursor: pointer;
            padding: 12px 20px;
            border: 1px solid #ccc;
            border-radius: 20px;
            font-size: 16px;
            transition: all 0.2s ease;
            background-color: white;
            color: #333;
          }
          #voice-agent-button.connected {
            background-color: #e60000;
            color: white;
            border-color: #e60000;
          }
          #voice-agent-button.speaking {
            background-color: #00a000;
            color: white;
            border-color: #00a000;
            animation: pulse 1.5s infinite;
          }
          #voice-agent-button:hover {
            opacity: 0.9;
          }
          #voice-agent-button:disabled {
            cursor: not-allowed;
            opacity: 0.6;
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
      
      <button
        id="voice-agent-button"
        className={`${isConnected ? 'connected' : ''} ${conversation.isSpeaking ? 'speaking' : ''}`}
        onClick={handleConversationToggle}
        disabled={conversation.status === 'connecting'}
      >
        {getButtonText()}
      </button>
    </div>
  );
};

export default VoiceAssistant;