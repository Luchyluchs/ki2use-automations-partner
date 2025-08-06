import React, { useState, useCallback } from 'react';
import { useConversation } from '@11labs/react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import robotHeadIcon from '@/assets/robot-head-icon.jpg';

const ElevenLabsVoiceAssistant: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiInput, setShowApiInput] = useState(true);
  
  const conversation = useConversation({
    onConnect: () => {
      console.log('ElevenLabs connected');
    },
    onDisconnect: () => {
      console.log('ElevenLabs disconnected');
    },
    onMessage: (message) => {
      console.log('ElevenLabs message:', message);
    },
    onError: (error) => {
      console.error('ElevenLabs error:', error);
    }
  });

  const handleStartConversation = useCallback(async () => {
    if (!apiKey.trim()) {
      alert('Bitte geben Sie Ihren ElevenLabs API Key ein.');
      return;
    }

    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Generate signed URL with the API key
      const response = await fetch(
        `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=your_agent_id_here`,
        {
          method: 'GET',
          headers: {
            'xi-api-key': apiKey
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get signed URL from ElevenLabs');
      }

      const { signed_url } = await response.json();
      await conversation.startSession({ agentId: signed_url });
      
    } catch (error) {
      console.error('Error starting ElevenLabs conversation:', error);
      alert('Fehler beim Starten des Gesprächs. Bitte überprüfen Sie Ihren API Key.');
    }
  }, [apiKey, conversation]);

  const handleEndConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const getButtonText = () => {
    if (conversation.status === 'connecting') return 'Verbinde...';
    if (conversation.status === 'connected') {
      return conversation.isSpeaking ? 'Agent spricht...' : 'Gespräch beenden';
    }
    return 'Mit ElevenLabs Assistent sprechen';
  };

  const isConnected = conversation.status === 'connected';

  if (showApiInput) {
    return (
      <div className="relative">
        <div className="bg-white/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl px-4 py-3 shadow-card">
          <div className="flex items-center gap-3">
            <img 
              src={robotHeadIcon} 
              alt="AI Robot" 
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/30"
            />
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground mb-2">
                ElevenLabs API Key eingeben:
              </div>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-..."
                  className="flex-1 px-2 py-1 text-xs border rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  onClick={() => {
                    if (apiKey.trim()) {
                      setShowApiInput(false);
                    } else {
                      alert('Bitte geben Sie einen gültigen API Key ein.');
                    }
                  }}
                  className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Speech Bubble */}
      <div 
        className={`
          relative bg-white/80 backdrop-blur-sm border-2 rounded-2xl px-4 py-3 shadow-card cursor-pointer
          transition-all duration-300 hover:shadow-primary hover-lift opacity-90
          ${isConnected ? 'border-accent bg-accent/20' : 'border-primary/20'}
          ${conversation.isSpeaking ? 'animate-pulse border-green-500 bg-green-50/80' : ''}
          ${conversation.status === 'connecting' ? 'border-yellow-500 bg-yellow-50/80' : ''}
        `}
        onClick={isConnected ? handleEndConversation : handleStartConversation}
      >
        {/* Speech Bubble Arrow */}
        <div className={`
          absolute -bottom-2 left-6 w-4 h-4 rotate-45 
          ${isConnected ? 'bg-accent/10 border-r-2 border-b-2 border-accent' : 'bg-white border-r-2 border-b-2 border-primary/20'}
          ${conversation.isSpeaking ? 'bg-green-50 border-green-500' : ''}
          ${conversation.status === 'connecting' ? 'bg-yellow-50 border-yellow-500' : ''}
        `} />
        
        {/* Robot Avatar & Content */}
        <div className="flex items-center gap-3">
          {/* Robot Avatar */}
          <div className="relative">
            <img 
              src={robotHeadIcon} 
              alt="AI Robot" 
              className={`
                w-10 h-10 rounded-full object-cover ring-2
                ${isConnected ? 'ring-accent' : 'ring-primary/30'}
                ${conversation.isSpeaking ? 'ring-green-500 animate-pulse' : ''}
                ${conversation.status === 'connecting' ? 'ring-yellow-500' : ''}
              `}
            />
            {/* Status Indicator */}
            <div className={`
              absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center
              ${isConnected ? 'bg-accent' : 'bg-primary'}
              ${conversation.isSpeaking ? 'bg-green-500' : ''}
              ${conversation.status === 'connecting' ? 'bg-yellow-500' : ''}
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
              ${conversation.status === 'connecting' ? 'text-yellow-700' : ''}
            `}>
              {getButtonText()}
            </div>
            {conversation.status === 'disconnected' && (
              <div className="text-xs text-muted-foreground">
                Klicken zum Sprechen
              </div>
            )}
          </div>
          
          {/* Settings Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowApiInput(true);
            }}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            ⚙️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElevenLabsVoiceAssistant;