import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Mic, MicOff, Volume2, Bot } from 'lucide-react';
import robotHeadIcon from '@/assets/robot-head-icon.jpg';

// TypeScript-Definitionen für Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const WebSpeechVoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [status, setStatus] = useState<'idle' | 'listening' | 'processing' | 'speaking'>('idle');
  
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    // Prüfe ob Web Speech API verfügbar ist
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      if (recognitionRef.current) {
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'de-DE';
        
        recognitionRef.current.onstart = () => {
          setStatus('listening');
          setIsListening(true);
        };
        
        recognitionRef.current.onresult = (event) => {
          const result = event.results[event.resultIndex];
          if (result.isFinal) {
            const finalTranscript = result[0].transcript;
            setTranscript(finalTranscript);
            handleUserInput(finalTranscript);
          }
        };
        
        recognitionRef.current.onend = () => {
          setIsListening(false);
          if (status === 'listening') {
            setStatus('idle');
          }
        };
        
        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
          setStatus('idle');
        };
      }
    }

    // Speech Synthesis
    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, [status]);

  const handleUserInput = async (input: string) => {
    setStatus('processing');
    
    // Simuliere KI-Antwort (hier könnte man eine echte AI API aufrufen)
    const responses = [
      "Gerne helfe ich Ihnen dabei! Buchen Sie einen Termin für eine kostenlose Beratung.",
      "Das ist eine großartige Frage! Unsere KI-Agenten können Ihnen dabei helfen, bis zu 80% Zeit zu sparen.",
      "Für maßgeschneiderte Lösungen empfehle ich Ihnen unser Beratungsgespräch. Soll ich einen Termin für Sie reservieren?",
      "KI2Use bietet professionelle Automatisierungslösungen für deutsche Unternehmen. Wie kann ich Ihnen heute helfen?",
      "Unsere DSGVO-konformen KI-Agenten sind speziell für den deutschen Markt entwickelt. Möchten Sie mehr darüber erfahren?"
    ];
    
    // Zufällige Antwort auswählen
    const response = responses[Math.floor(Math.random() * responses.length)];
    
    // Kurze Verzögerung für realistisches Verhalten
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    speakResponse(response);
  };

  const speakResponse = (text: string) => {
    if (synthRef.current) {
      setStatus('speaking');
      setIsSpeaking(true);
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      
      utterance.onend = () => {
        setIsSpeaking(false);
        setStatus('idle');
      };
      
      utterance.onerror = () => {
        setIsSpeaking(false);
        setStatus('idle');
      };
      
      synthRef.current.speak(utterance);
    }
  };

  const handleToggle = useCallback(() => {
    if (status === 'speaking') {
      // Stop speaking
      if (synthRef.current) {
        synthRef.current.cancel();
      }
      setIsSpeaking(false);
      setStatus('idle');
      return;
    }

    if (isListening) {
      // Stop listening
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      return;
    }

    // Start listening
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error('Speech recognition start error:', error);
        alert('Spracherkennung ist nicht verfügbar. Bitte überprüfen Sie Ihre Browser-Einstellungen.');
      }
    } else {
      alert('Spracherkennung wird von Ihrem Browser nicht unterstützt.');
    }
  }, [status, isListening]);

  const getButtonText = () => {
    switch (status) {
      case 'listening':
        return 'Ich höre zu...';
      case 'processing':
        return 'Verarbeite Anfrage...';
      case 'speaking':
        return 'Agent spricht...';
      default:
        return 'Mit Assistent sprechen';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'listening':
        return 'border-blue-500 bg-blue-50/80';
      case 'processing':
        return 'border-yellow-500 bg-yellow-50/80';
      case 'speaking':
        return 'border-green-500 bg-green-50/80';
      default:
        return 'border-primary/20 bg-white/80';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'listening':
        return <Mic className="w-2.5 h-2.5 text-white" />;
      case 'processing':
        return <Bot className="w-2.5 h-2.5 text-white animate-pulse" />;
      case 'speaking':
        return <Volume2 className="w-2.5 h-2.5 text-white" />;
      default:
        return <MicOff className="w-2.5 h-2.5 text-white" />;
    }
  };

  const getRingColor = () => {
    switch (status) {
      case 'listening':
        return 'ring-blue-500';
      case 'processing':
        return 'ring-yellow-500';
      case 'speaking':
        return 'ring-green-500';
      default:
        return 'ring-primary/30';
    }
  };

  const getIndicatorColor = () => {
    switch (status) {
      case 'listening':
        return 'bg-blue-500';
      case 'processing':
        return 'bg-yellow-500';
      case 'speaking':
        return 'bg-green-500';
      default:
        return 'bg-primary';
    }
  };

  return (
    <div className="relative">
      {/* Speech Bubble */}
      <div 
        className={`
          relative backdrop-blur-sm border-2 rounded-2xl px-4 py-3 shadow-card cursor-pointer
          transition-all duration-300 hover:shadow-primary hover-lift opacity-90
          ${getStatusColor()}
          ${(status === 'listening' || status === 'speaking') ? 'animate-pulse' : ''}
        `}
        onClick={handleToggle}
      >
        {/* Speech Bubble Arrow */}
        <div className={`
          absolute -bottom-2 left-6 w-4 h-4 rotate-45 border-r-2 border-b-2
          ${status === 'listening' ? 'bg-blue-50 border-blue-500' : ''}
          ${status === 'processing' ? 'bg-yellow-50 border-yellow-500' : ''}
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
                ${(status === 'listening' || status === 'speaking') ? 'animate-pulse' : ''}
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
              ${status === 'listening' ? 'text-blue-700' : ''}
              ${status === 'processing' ? 'text-yellow-700' : ''}
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
            {transcript && status === 'processing' && (
              <div className="text-xs text-muted-foreground mt-1">
                "{transcript}"
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSpeechVoiceAssistant;