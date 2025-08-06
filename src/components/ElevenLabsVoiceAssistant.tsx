import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import robotHeadIcon from '@/assets/robot-head-icon.jpg';

const ElevenLabsVoiceAssistant: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiInput, setShowApiInput] = useState(true);
  const [status, setStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const websocketRef = useRef<WebSocket | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const AGENT_ID = 'agent_9201k1xfxkxrepj9q3zqrekwfkvs';

  const handleStartConversation = useCallback(async () => {
    if (!apiKey.trim()) {
      alert('Bitte geben Sie Ihren ElevenLabs API Key ein.');
      return;
    }

    try {
      setStatus('connecting');
      
      // Request microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Generate signed URL with the API key
      const response = await fetch(
        `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${AGENT_ID}`,
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
      
      // Connect to WebSocket
      const ws = new WebSocket(signed_url);
      websocketRef.current = ws;

      ws.onopen = () => {
        console.log('ElevenLabs WebSocket connected');
        setStatus('connected');
        
        // Start recording
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0 && ws.readyState === WebSocket.OPEN) {
            ws.send(event.data);
          }
        };
        
        mediaRecorder.start(100); // Send chunks every 100ms
      };

      ws.onmessage = (event) => {
        if (event.data instanceof Blob) {
          // Audio response from ElevenLabs
          setIsSpeaking(true);
          const audioUrl = URL.createObjectURL(event.data);
          const audio = new Audio(audioUrl);
          audio.onended = () => setIsSpeaking(false);
          audio.play();
        }
      };

      ws.onclose = () => {
        console.log('ElevenLabs WebSocket disconnected');
        setStatus('disconnected');
        setIsSpeaking(false);
        
        // Clean up
        if (mediaRecorderRef.current) {
          mediaRecorderRef.current.stop();
        }
        stream.getTracks().forEach(track => track.stop());
      };

      ws.onerror = (error) => {
        console.error('ElevenLabs WebSocket error:', error);
        setStatus('disconnected');
        alert('Fehler beim Verbinden mit ElevenLabs.');
      };
      
    } catch (error) {
      console.error('Error starting ElevenLabs conversation:', error);
      setStatus('disconnected');
      alert('Fehler beim Starten des Gesprächs. Bitte überprüfen Sie Ihren API Key.');
    }
      
  }, [apiKey]);

  const handleEndConversation = useCallback(() => {
    if (websocketRef.current) {
      websocketRef.current.close();
    }
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  }, []);

  const getButtonText = () => {
    if (status === 'connecting') return 'Verbinde...';
    if (status === 'connected') {
      return isSpeaking ? 'Agent spricht...' : 'Gespräch beenden';
    }
    return 'Mit ElevenLabs Assistent sprechen';
  };

  const isConnected = status === 'connected';

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
          ${isSpeaking ? 'animate-pulse border-green-500 bg-green-50/80' : ''}
          ${status === 'connecting' ? 'border-yellow-500 bg-yellow-50/80' : ''}
        `}
        onClick={isConnected ? handleEndConversation : handleStartConversation}
      >
        {/* Speech Bubble Arrow */}
        <div className={`
          absolute -bottom-2 left-6 w-4 h-4 rotate-45 
          ${isConnected ? 'bg-accent/10 border-r-2 border-b-2 border-accent' : 'bg-white border-r-2 border-b-2 border-primary/20'}
          ${isSpeaking ? 'bg-green-50 border-green-500' : ''}
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
                ${isSpeaking ? 'ring-green-500 animate-pulse' : ''}
                ${status === 'connecting' ? 'ring-yellow-500' : ''}
              `}
            />
            {/* Status Indicator */}
            <div className={`
              absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center
              ${isConnected ? 'bg-accent' : 'bg-primary'}
              ${isSpeaking ? 'bg-green-500' : ''}
              ${status === 'connecting' ? 'bg-yellow-500' : ''}
            `}>
              {isSpeaking ? (
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
              ${isSpeaking ? 'text-green-700' : ''}
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