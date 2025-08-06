import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Phone, PhoneOff } from 'lucide-react';

interface VoiceAgentProps {
  className?: string;
}

const VoiceAgent: React.FC<VoiceAgentProps> = ({ className = '' }) => {
  const [isListening, setIsListening] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [status, setStatus] = useState('Getrennt');
  
  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Check if speech recognition is available
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'de-DE';

      recognitionRef.current.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        
        if (finalTranscript) {
          setTranscript(finalTranscript);
          handleSpeechInput(finalTranscript);
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setStatus('Fehler bei der Spracherkennung');
      };

      recognitionRef.current.onend = () => {
        if (isConnected) {
          // Restart recognition if still connected
          recognitionRef.current?.start();
        }
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [isConnected]);

  const handleSpeechInput = async (text: string) => {
    console.log('Benutzer sagte:', text);
    setStatus('Verarbeite Anfrage...');
    
    // Simple response logic - you can expand this
    let response = '';
    if (text.toLowerCase().includes('hallo') || text.toLowerCase().includes('hi')) {
      response = 'Hallo! Wie kann ich Ihnen bei Ihren KI-Automatisierungsfragen helfen?';
    } else if (text.toLowerCase().includes('preis') || text.toLowerCase().includes('kosten')) {
      response = 'Unsere Preise variieren je nach Ihren spezifischen Anforderungen. Gerne erstellen wir Ihnen ein individuelles Angebot. Soll ich einen Termin für ein kostenloses Beratungsgespräch vereinbaren?';
    } else if (text.toLowerCase().includes('termin') || text.toLowerCase().includes('beratung')) {
      response = 'Sehr gerne! Sie können direkt über den Terminbuchungsbutton oben einen kostenlosen 30-minütigen Beratungstermin vereinbaren. Soll ich Ihnen dabei helfen?';
    } else if (text.toLowerCase().includes('ki') || text.toLowerCase().includes('automatisierung')) {
      response = 'Wir bieten verschiedene KI-Lösungen: Chatbots, E-Mail-Automatisierung, Terminbuchung, Social Media Management und vieles mehr. Was interessiert Sie am meisten?';
    } else {
      response = 'Das ist eine interessante Frage. Für detaillierte Informationen empfehle ich Ihnen ein persönliches Beratungsgespräch. Möchten Sie einen Termin vereinbaren?';
    }

    await speakText(response);
  };

  const speakText = async (text: string) => {
    setIsSpeaking(true);
    setStatus('Agent spricht...');

    try {
      // Use browser's built-in speech synthesis for immediate functionality
      // You can replace this with ElevenLabs API call if you have an API key
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        
        utterance.onend = () => {
          setIsSpeaking(false);
          setStatus('Bereit zum Sprechen');
        };

        speechSynthesis.speak(utterance);
      }
    } catch (error) {
      console.error('Fehler bei der Sprachausgabe:', error);
      setIsSpeaking(false);
      setStatus('Fehler bei der Sprachausgabe');
    }
  };

  const startConversation = async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      setIsConnected(true);
      setIsListening(true);
      setStatus('Verbunden - Hören...');
      
      // Start speech recognition
      if (recognitionRef.current) {
        recognitionRef.current.start();
      }

      // Welcome message
      setTimeout(() => {
        speakText('Hallo! Ich bin Ihr KI-Assistent von KI2USE. Wie kann ich Ihnen heute helfen?');
      }, 1000);

    } catch (error) {
      console.error('Fehler beim Starten der Konversation:', error);
      alert('Mikrofon-Zugriff ist erforderlich für den Sprachagenten.');
      setStatus('Fehler: Mikrofon-Zugriff verweigert');
    }
  };

  const endConversation = async () => {
    try {
      setIsConnected(false);
      setIsListening(false);
      setIsSpeaking(false);
      setStatus('Getrennt');
      setTranscript('');

      // Stop speech recognition
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }

      // Stop any ongoing speech
      if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
      }

    } catch (error) {
      console.error('Fehler beim Beenden der Konversation:', error);
    }
  };

  return (
    <div className={`bg-card border border-card-border rounded-2xl p-6 shadow-lg ${className}`}>
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
            isConnected 
              ? isSpeaking
                ? 'bg-blue-100 border-4 border-blue-500 animate-pulse' 
                : isListening
                  ? 'bg-green-100 border-4 border-green-500' 
                  : 'bg-yellow-100 border-4 border-yellow-500'
              : 'bg-gray-100 border-4 border-gray-300'
          }`}>
            {isConnected ? (
              <Mic className={`w-6 h-6 ${
                isSpeaking ? 'text-blue-600' : 
                isListening ? 'text-green-600' : 'text-yellow-600'
              }`} />
            ) : (
              <MicOff className="w-6 h-6 text-gray-400" />
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">KI Sprachagent</h3>
          <p className="text-muted-foreground text-sm mb-3">
            {status}
          </p>
          
          {transcript && (
            <div className="text-xs bg-muted p-2 rounded mb-3">
              <strong>Sie:</strong> {transcript}
            </div>
          )}
        </div>

        <div className="space-y-3">
          {!isConnected ? (
            <Button 
              onClick={startConversation}
              className="w-full bg-gradient-primary hover:scale-105 transition-all duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              Gespräch starten
            </Button>
          ) : (
            <Button 
              onClick={endConversation}
              className="w-full bg-red-600 hover:bg-red-700 text-white hover:scale-105 transition-all duration-200"
            >
              <PhoneOff className="w-4 h-4 mr-2" />
              Gespräch beenden
            </Button>
          )}
          
          <div className="text-xs text-muted-foreground">
            💡 Funktioniert mit Mikrofon und Spracherkennung
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgent;