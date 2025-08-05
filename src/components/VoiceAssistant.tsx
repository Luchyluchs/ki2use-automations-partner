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
    <div className="relative w-80 h-48">
      {/* Background Image */}
      <img 
        src={humanRobotHandshake} 
        alt="Human Robot Handshake" 
        className="w-full h-full object-cover rounded-2xl shadow-card"
      />
      
      {/* Speech Bubble positioned in front of robot face */}
      <div 
        className={`
          absolute top-4 left-4 max-w-48
          bg-white/95 backdrop-blur-sm border-2 rounded-2xl px-4 py-3 shadow-xl cursor-pointer
          transition-all duration-300 hover:shadow-primary hover-lift z-10
          ${isConnected ? 'border-accent bg-accent/10 backdrop-blur-sm' : 'border-primary/30'}
          ${conversation.isSpeaking ? 'animate-pulse border-green-500 bg-green-50/95' : ''}
        `}
        onClick={handleConversationToggle}
      >
        {/* Speech Bubble Arrow pointing to robot */}
        <div className={`
          absolute -bottom-2 right-6 w-4 h-4 rotate-45 
          ${isConnected ? 'bg-accent/10 border-r-2 border-b-2 border-accent' : 'bg-white/95 border-r-2 border-b-2 border-primary/30'}
          ${conversation.isSpeaking ? 'bg-green-50/95 border-green-500' : ''}
        `} />
        
        {/* Content */}
        <div className="flex items-center gap-3">
          {/* Status Icon */}
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center
            ${isConnected ? 'bg-accent' : 'bg-primary'}
            ${conversation.isSpeaking ? 'bg-green-500 animate-pulse' : ''}
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
          <div className="flex-1">
            <div className={`
              text-sm font-medium leading-tight
              ${isConnected ? 'text-accent-foreground' : 'text-foreground'}
              ${conversation.isSpeaking ? 'text-green-700' : ''}
            `}>
              {getButtonText()}
            </div>
            {!isConnected && (
              <div className="text-xs text-muted-foreground mt-1">
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