import React, { useState, useCallback } from 'react';
import { useConversation } from '@11labs/react';
import { Mic, MicOff, Volume2, Bot } from 'lucide-react';
import robotHeadIcon from '@/assets/robot-head-icon.jpg';

const ElevenLabsVoiceAssistant: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  
  const conversation = useConversation({
    onConnect: () => {
      console.log('ElevenLabs connected');
    },
    onDisconnect: () => {
      console.log('ElevenLabs disconnected');
      setIsStarted(false);
    },
    onError: (error) => {
      console.error('ElevenLabs error:', error);
      setIsStarted(false);
    },
  });

  const handleToggle = useCallback(async () => {
    if (conversation.status === 'connected') {
      await conversation.endSession();
      setIsStarted(false);
    } else {
      try {
        // Request microphone access first
        await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Start conversation with your agent
        await conversation.startSession({
          agentId: 'agent_9201k1xfxkxrepj9q3zqrekwfkvs'
        });
        setIsStarted(true);
      } catch (error) {
        console.error('Failed to start conversation:', error);
        alert('Mikrofon-Zugriff erforderlich für den Sprachassistenten.');
      }
    }
  }, [conversation]);

  const getButtonText = () => {
    if (conversation.status === 'connected') {
      return conversation.isSpeaking ? 'Agent spricht...' : 'Sprechen Sie jetzt...';
    }
    return isStarted ? 'Verbinde...' : 'Mit Assistent sprechen';
  };

  const getStatusColor = () => {
    if (conversation.status === 'connected') {
      return conversation.isSpeaking ? 'border-green-500 bg-green-50/80' : 'border-blue-500 bg-blue-50/80';
    }
    return isStarted ? 'border-yellow-500 bg-yellow-50/80' : 'border-primary/20 bg-white/80';
  };

  const getStatusIcon = () => {
    if (conversation.status === 'connected') {
      return conversation.isSpeaking ? 
        <Volume2 className="w-2.5 h-2.5 text-white" /> : 
        <Mic className="w-2.5 h-2.5 text-white" />;
    }
    return isStarted ? 
      <Bot className="w-2.5 h-2.5 text-white animate-pulse" /> : 
      <MicOff className="w-2.5 h-2.5 text-white" />;
  };

  const getRingColor = () => {
    if (conversation.status === 'connected') {
      return conversation.isSpeaking ? 'ring-green-500' : 'ring-blue-500';
    }
    return isStarted ? 'ring-yellow-500' : 'ring-primary/30';
  };

  const getIndicatorColor = () => {
    if (conversation.status === 'connected') {
      return conversation.isSpeaking ? 'bg-green-500' : 'bg-blue-500';
    }
    return isStarted ? 'bg-yellow-500' : 'bg-primary';
  };

  const isActive = conversation.status === 'connected';
  const isProcessing = isStarted && conversation.status !== 'connected';

  return (
    <div className="relative">
      {/* Speech Bubble */}
      <div 
        className={`
          relative backdrop-blur-sm border-2 rounded-2xl px-4 py-3 shadow-card cursor-pointer
          transition-all duration-300 hover:shadow-primary hover-lift opacity-90
          ${getStatusColor()}
          ${(isActive || isProcessing) ? 'animate-pulse' : ''}
        `}
        onClick={handleToggle}
      >
        {/* Speech Bubble Arrow */}
        <div className={`
          absolute -bottom-2 left-6 w-4 h-4 rotate-45 border-r-2 border-b-2
          ${isActive && conversation.isSpeaking ? 'bg-green-50 border-green-500' : ''}
          ${isActive && !conversation.isSpeaking ? 'bg-blue-50 border-blue-500' : ''}
          ${isProcessing ? 'bg-yellow-50 border-yellow-500' : ''}
          ${!isActive && !isProcessing ? 'bg-white border-primary/20' : ''}
        `} />
        
        {/* Robot Avatar & Content */}
        <div className="flex items-center gap-3">
          {/* Robot Avatar */}
          <div className="relative">
            <img 
              src={robotHeadIcon} 
              alt="AI Robot" 
              className={`
                w-10 h-10 rounded-full object-cover ring-2 transition-all duration-300
                ${getRingColor()}
                ${(isActive || isProcessing) ? 'animate-pulse' : ''}
              `}
            />
            {/* Status Indicator */}
            <div className={`
              absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300
              ${getIndicatorColor()}
            `}>
              {getStatusIcon()}
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1">
            <div className={`
              text-sm font-medium transition-colors duration-300
              ${isActive && conversation.isSpeaking ? 'text-green-700' : ''}
              ${isActive && !conversation.isSpeaking ? 'text-blue-700' : ''}
              ${isProcessing ? 'text-yellow-700' : ''}
              ${!isActive && !isProcessing ? 'text-foreground' : ''}
            `}>
              {getButtonText()}
            </div>
            {!isActive && !isProcessing && (
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

export default ElevenLabsVoiceAssistant;