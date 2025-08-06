import React, { useState, useCallback } from 'react';
import { useConversation } from '@11labs/react';

const VoiceAssistant: React.FC = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('elevenlabs_api_key') || '');
  const [showApiInput, setShowApiInput] = useState(!apiKey);

  const conversation = useConversation({
    onConnect: () => console.log('Sprachassistent verbunden'),
    onDisconnect: () => console.log('Sprachassistent getrennt'),
    onError: (error) => {
      console.error('Sprachassistent Fehler:', error);
    },
  });

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      localStorage.setItem('elevenlabs_api_key', apiKey);
      setShowApiInput(false);
    }
  };

  const handleConversationToggle = useCallback(async () => {
    if (conversation.status === 'connected') {
      await conversation.endSession();
    } else {
      try {
        // Mikrofonzugriff anfragen
        await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Sprachassistent starten
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
      return conversation.isSpeaking ? '🎤 Hört zu...' : '🔊 Gespräch beenden';
    }
    return '🎤 Mit Assistent sprechen';
  };

  const isConnected = conversation.status === 'connected';

  if (showApiInput) {
    return (
      <div className="voice-assistant-container p-4 border rounded-lg bg-background">
        <h3 className="text-lg font-semibold mb-2">Sprachassistent Setup</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Bitte geben Sie Ihren ElevenLabs API Key ein, um den Sprachassistenten zu aktivieren:
        </p>
        <div className="flex gap-2">
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="ElevenLabs API Key"
            className="flex-1 px-3 py-2 border rounded-md"
          />
          <button
            onClick={handleApiKeySubmit}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
          >
            Aktivieren
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="voice-assistant-container">
      <button
        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          isConnected 
            ? 'bg-red-500 hover:bg-red-600 text-white' 
            : 'bg-primary hover:bg-primary/90 text-primary-foreground'
        } ${conversation.isSpeaking ? 'animate-pulse' : ''}`}
        onClick={handleConversationToggle}
        disabled={conversation.status === 'connecting'}
      >
        {getButtonText()}
      </button>
      
      <button
        onClick={() => setShowApiInput(true)}
        className="ml-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        ⚙️
      </button>
    </div>
  );
};

export default VoiceAssistant;