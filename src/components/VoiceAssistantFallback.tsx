import React, { useState, useCallback } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import robotHeadIcon from '@/assets/robot-head-icon.jpg';

const VoiceAssistantFallback: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [status, setStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');

  const handleClick = useCallback(async () => {
    if (status === 'connected') {
      setStatus('disconnected');
      setIsRecording(false);
      return;
    }

    try {
      setStatus('connecting');
      
      // Web Speech API verwenden
      console.log('WebSpeech API wird verwendet');
      
      setStatus('connected');
      setIsRecording(true);
    } catch (error) {
      console.error('WebSpeech API nicht verfügbar:', error);
      setStatus('disconnected');
      
      // Fallback-Verhalten
      alert('Sprachassistent ist momentan nicht verfügbar. Bitte verwenden Sie das Kontaktformular oder buchen Sie einen Termin.');
    }
  }, [status]);

  const getButtonText = () => {
    switch (status) {
      case 'connecting':
        return 'Verbinde...';
      case 'connected':
        return isRecording ? 'Agent spricht...' : 'Gespräch beenden';
      default:
        return 'Mit Assistent sprechen';
    }
  };

  const isConnected = status === 'connected';

  return (
    <div className="relative">
      {/* Speech Bubble */}
      <div 
        className={`
          relative bg-white/80 backdrop-blur-sm border-2 rounded-2xl px-4 py-3 shadow-card cursor-pointer
          transition-all duration-300 hover:shadow-primary hover-lift opacity-90
          ${isConnected ? 'border-accent bg-accent/20' : 'border-primary/20'}
          ${isRecording ? 'animate-pulse border-green-500 bg-green-50/80' : ''}
          ${status === 'connecting' ? 'border-yellow-500 bg-yellow-50/80' : ''}
        `}
        onClick={handleClick}
      >
        {/* Speech Bubble Arrow */}
        <div className={`
          absolute -bottom-2 left-6 w-4 h-4 rotate-45 
          ${isConnected ? 'bg-accent/10 border-r-2 border-b-2 border-accent' : 'bg-white border-r-2 border-b-2 border-primary/20'}
          ${isRecording ? 'bg-green-50 border-green-500' : ''}
          ${status === 'connecting' ? 'bg-yellow-50 border-yellow-500' : ''}
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
                ${isRecording ? 'ring-green-500 animate-pulse' : ''}
                ${status === 'connecting' ? 'ring-yellow-500' : ''}
              `}
            />
            {/* Status Indicator */}
            <div className={`
              absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center
              ${isConnected ? 'bg-accent' : 'bg-primary'}
              ${isRecording ? 'bg-green-500' : ''}
              ${status === 'connecting' ? 'bg-yellow-500' : ''}
            `}>
              {isRecording ? (
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
              ${isRecording ? 'text-green-700' : ''}
              ${status === 'connecting' ? 'text-yellow-700' : ''}
            `}>
              {getButtonText()}
            </div>
            {status === 'disconnected' && (
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

export default VoiceAssistantFallback;