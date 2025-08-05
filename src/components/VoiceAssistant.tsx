import React, { useCallback } from 'react';
import { useConversation } from '@11labs/react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import humanRobotHandshake from '@/assets/human-robot-handshake.jpg';

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
    <div className="relative w-80 h-60">
      {/* Background Image */}
      <img 
        src={humanRobotHandshake} 
        alt="Mensch-Roboter Handschlag" 
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      
      {/* Speech Bubble - positioned in front of robot's face */}
      <div 
        className={`
          absolute top-8 right-12 bg-white border-2 rounded-2xl px-4 py-3 shadow-card cursor-pointer
          transition-all duration-300 hover:shadow-primary hover-lift max-w-40
          ${isConnected ? 'border-accent bg-accent/10' : 'border-primary/20'}
          ${conversation.isSpeaking ? 'animate-pulse border-green-500 bg-green-50' : ''}
        `}
        onClick={handleConversationToggle}
      >
        {/* Speech Bubble Arrow pointing to robot */}
        <div className={`
          absolute -bottom-2 left-4 w-4 h-4 rotate-45 
          ${isConnected ? 'bg-accent/10 border-r-2 border-b-2 border-accent' : 'bg-white border-r-2 border-b-2 border-primary/20'}
          ${conversation.isSpeaking ? 'bg-green-50 border-green-500' : ''}
        `} />
        
        {/* Content */}
        <div className="text-center">
          {/* Status Icon */}
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2
            ${isConnected ? 'bg-accent' : 'bg-primary'}
            ${conversation.isSpeaking ? 'bg-green-500' : ''}
          `}>
            {conversation.isSpeaking ? (
              <Volume2 className="w-4 h-4 text-white" />
            ) : isConnected ? (
              <MicOff className="w-4 h-4 text-white" />
            ) : (
              <Mic className="w-4 h-4 text-white" />
            )}
          </div>
          
          {/* Text Content */}
          <div className={`
            text-xs font-medium text-center
            ${isConnected ? 'text-accent-foreground' : 'text-foreground'}
            ${conversation.isSpeaking ? 'text-green-700' : ''}
          `}>
            {getButtonText()}
          </div>
          {!isConnected && (
            <div className="text-xs text-muted-foreground mt-1">
              Klicken
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;