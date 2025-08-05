import React, { useCallback } from 'react';
import { useConversation } from '@11labs/react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import voiceRobotIcon from '@/assets/voice-robot-icon.jpg';

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
    <div className="relative">
      {/* Speech Bubble */}
      <div 
        className={`
          relative bg-white border-2 rounded-2xl px-4 py-3 shadow-card cursor-pointer
          transition-all duration-300 hover:shadow-primary hover-lift
          ${isConnected ? 'border-accent bg-accent/10' : 'border-primary/20'}
          ${conversation.isSpeaking ? 'animate-pulse border-green-500 bg-green-50' : ''}
        `}
        onClick={handleConversationToggle}
      >
        {/* Speech Bubble Arrow */}
        <div className={`
          absolute -bottom-2 left-6 w-4 h-4 rotate-45 
          ${isConnected ? 'bg-accent/10 border-r-2 border-b-2 border-accent' : 'bg-white border-r-2 border-b-2 border-primary/20'}
          ${conversation.isSpeaking ? 'bg-green-50 border-green-500' : ''}
        `} />
        
        {/* Robot Avatar & Content */}
        <div className="flex items-center gap-3">
          {/* Robot Avatar */}
          <div className="relative">
            <img 
              src={voiceRobotIcon} 
              alt="AI Robot" 
              className={`
                w-10 h-10 rounded-full object-cover ring-2
                ${isConnected ? 'ring-accent' : 'ring-primary/30'}
                ${conversation.isSpeaking ? 'ring-green-500 animate-pulse' : ''}
              `}
            />
            {/* Status Indicator */}
            <div className={`
              absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center
              ${isConnected ? 'bg-accent' : 'bg-primary'}
              ${conversation.isSpeaking ? 'bg-green-500' : ''}
            `}>
              {conversation.isSpeaking ? (
                <Volume2 className="w-2.5 h-2.5 text-white" />
              ) : isConnected ? (
                <MicOff className="w-2.5 h-2.5 text-white" />
              ) : (
                <Mic className="w-2.5 h-2.5 text-white" />
              )}
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1">
            <div className={`
              text-sm font-medium
              ${isConnected ? 'text-accent-foreground' : 'text-foreground'}
              ${conversation.isSpeaking ? 'text-green-700' : ''}
            `}>
              {getButtonText()}
            </div>
            {!isConnected && (
              <div className="text-xs text-muted-foreground">
                Klicken zum Sprechen
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;