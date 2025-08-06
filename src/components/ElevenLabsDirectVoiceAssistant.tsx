import React, { useState, useCallback, useRef } from 'react';
import { Mic, MicOff, Volume2, Bot } from 'lucide-react';
import robotHeadIcon from '@/assets/robot-head-icon.jpg';

const ElevenLabsDirectVoiceAssistant: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'listening' | 'connecting' | 'connected' | 'speaking'>('idle');
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  const handleToggle = useCallback(async () => {
    if (status === 'speaking') {
      // Stop speaking if currently speaking
      setIsSpeaking(false);
      setStatus('idle');
      return;
    }

    if (status === 'connected' || status === 'listening') {
      // Stop conversation
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
      setStatus('idle');
      setIsRecording(false);
      return;
    }

    try {
      setStatus('connecting');
      
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Connect to ElevenLabs Conversational AI
      const ws = new WebSocket('wss://api.elevenlabs.io/v1/convai/conversation');
      wsRef.current = ws;

      ws.onopen = () => {
        console.log('Connected to ElevenLabs');
        setStatus('connected');
        
        // Send agent configuration
        ws.send(JSON.stringify({
          type: 'conversation_initiation_metadata',
          conversation_initiation_metadata: {
            agent_id: 'agent_9201k1xfxkxrepj9q3zqrekwfkvs'
          }
        }));

        // Start recording
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          // Send audio to ElevenLabs
          if (ws.readyState === WebSocket.OPEN) {
            ws.send(audioBlob);
          }
          audioChunksRef.current = [];
        };

        mediaRecorder.start(100); // Record in 100ms chunks
        setIsRecording(true);
        setStatus('listening');
      };

      ws.onmessage = (event) => {
        if (event.data instanceof Blob) {
          // Received audio response
          const audioUrl = URL.createObjectURL(event.data);
          const audio = new Audio(audioUrl);
          
          setIsSpeaking(true);
          setStatus('speaking');
          
          audio.play();
          
          audio.onended = () => {
            setIsSpeaking(false);
            setStatus('connected');
            URL.revokeObjectURL(audioUrl);
          };
        } else {
          // Handle text messages
          try {
            const message = JSON.parse(event.data);
            console.log('ElevenLabs message:', message);
          } catch (e) {
            console.log('ElevenLabs raw message:', event.data);
          }
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        setStatus('idle');
        setIsRecording(false);
        alert('Verbindung zu ElevenLabs fehlgeschlagen. Bitte versuchen Sie es erneut.');
      };

      ws.onclose = () => {
        console.log('WebSocket closed');
        setStatus('idle');
        setIsRecording(false);
        setIsSpeaking(false);
        
        // Stop media recorder if still recording
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
          mediaRecorderRef.current.stop();
        }
        
        // Stop media stream
        stream.getTracks().forEach(track => track.stop());
      };

    } catch (error) {
      console.error('Failed to start conversation:', error);
      setStatus('idle');
      alert('Mikrofon-Zugriff erforderlich für den Sprachassistenten.');
    }
  }, [status]);

  const getButtonText = () => {
    switch (status) {
      case 'connecting':
        return 'Verbinde...';
      case 'connected':
        return isSpeaking ? 'Agent spricht...' : 'Sprechen Sie jetzt...';
      case 'listening':
        return 'Ich höre zu...';
      case 'speaking':
        return 'Agent spricht...';
      default:
        return 'Mit Assistent sprechen';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'connecting':
        return 'border-yellow-500 bg-yellow-50/80';
      case 'connected':
        return isSpeaking ? 'border-green-500 bg-green-50/80' : 'border-blue-500 bg-blue-50/80';
      case 'listening':
        return 'border-blue-500 bg-blue-50/80';
      case 'speaking':
        return 'border-green-500 bg-green-50/80';
      default:
        return 'border-primary/20 bg-white/80';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'connecting':
        return <Bot className="w-2.5 h-2.5 text-white animate-pulse" />;
      case 'connected':
        return isSpeaking ? 
          <Volume2 className="w-2.5 h-2.5 text-white" /> : 
          <Mic className="w-2.5 h-2.5 text-white" />;
      case 'listening':
        return <Mic className="w-2.5 h-2.5 text-white" />;
      case 'speaking':
        return <Volume2 className="w-2.5 h-2.5 text-white" />;
      default:
        return <MicOff className="w-2.5 h-2.5 text-white" />;
    }
  };

  const getRingColor = () => {
    switch (status) {
      case 'connecting':
        return 'ring-yellow-500';
      case 'connected':
        return isSpeaking ? 'ring-green-500' : 'ring-blue-500';
      case 'listening':
        return 'ring-blue-500';
      case 'speaking':
        return 'ring-green-500';
      default:
        return 'ring-primary/30';
    }
  };

  const getIndicatorColor = () => {
    switch (status) {
      case 'connecting':
        return 'bg-yellow-500';
      case 'connected':
        return isSpeaking ? 'bg-green-500' : 'bg-blue-500';
      case 'listening':
        return 'bg-blue-500';
      case 'speaking':
        return 'bg-green-500';
      default:
        return 'bg-primary';
    }
  };

  const isActive = status !== 'idle';
  const shouldAnimate = status === 'connecting' || status === 'listening' || status === 'speaking';

  return (
    <div className="relative">
      {/* Speech Bubble */}
      <div 
        className={`
          relative backdrop-blur-sm border-2 rounded-2xl px-4 py-3 shadow-card cursor-pointer
          transition-all duration-300 hover:shadow-primary hover-lift opacity-90
          ${getStatusColor()}
          ${shouldAnimate ? 'animate-pulse' : ''}
        `}
        onClick={handleToggle}
      >
        {/* Speech Bubble Arrow */}
        <div className={`
          absolute -bottom-2 left-6 w-4 h-4 rotate-45 border-r-2 border-b-2
          ${status === 'connecting' ? 'bg-yellow-50 border-yellow-500' : ''}
          ${status === 'connected' && isSpeaking ? 'bg-green-50 border-green-500' : ''}
          ${status === 'connected' && !isSpeaking ? 'bg-blue-50 border-blue-500' : ''}
          ${status === 'listening' ? 'bg-blue-50 border-blue-500' : ''}
          ${status === 'speaking' ? 'bg-green-50 border-green-500' : ''}
          ${status === 'idle' ? 'bg-white border-primary/20' : ''}
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
                ${shouldAnimate ? 'animate-pulse' : ''}
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
              ${status === 'connecting' ? 'text-yellow-700' : ''}
              ${status === 'connected' && isSpeaking ? 'text-green-700' : ''}
              ${status === 'connected' && !isSpeaking ? 'text-blue-700' : ''}
              ${status === 'listening' ? 'text-blue-700' : ''}
              ${status === 'speaking' ? 'text-green-700' : ''}
              ${status === 'idle' ? 'text-foreground' : ''}
            `}>
              {getButtonText()}
            </div>
            {status === 'idle' && (
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

export default ElevenLabsDirectVoiceAssistant;