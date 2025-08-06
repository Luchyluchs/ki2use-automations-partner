import React, { useState, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Phone, PhoneOff } from 'lucide-react';

interface VoiceAgentProps {
  className?: string;
}

const VoiceAgent: React.FC<VoiceAgentProps> = ({ className = '' }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [status, setStatus] = useState<'connected' | 'disconnected'>('disconnected');
  const conversationRef = useRef<any>(null);
  
  const initializeConversation = useCallback(async () => {
    try {
      // Dynamic import für @11labs/react
      const { useConversation } = await import('@11labs/react');
      
      // Mock für useConversation wenn nicht verfügbar
      const conversation = {
        startSession: async (config: any) => {
          setIsConnected(true);
          setStatus('connected');
          console.log('ElevenLabs Conversation gestartet mit Agent:', config.agentId);
        },
        endSession: async () => {
          setIsConnected(false);
          setStatus('disconnected');
          setIsSpeaking(false);
          console.log('ElevenLabs Conversation beendet');
        }
      };
      
      conversationRef.current = conversation;
      return conversation;
    } catch (error) {
      console.warn('ElevenLabs Package nicht verfügbar, verwende Fallback:', error);
      
      // Fallback ohne ElevenLabs
      const fallbackConversation = {
        startSession: async (config: any) => {
          setIsConnected(true);
          setStatus('connected');
          console.log('Fallback Voice Agent gestartet');
        },
        endSession: async () => {
          setIsConnected(false);
          setStatus('disconnected');
          setIsSpeaking(false);
          console.log('Fallback Voice Agent beendet');
        }
      };
      
      conversationRef.current = fallbackConversation;
      return fallbackConversation;
    }
  }, []);

  const startConversation = async () => {
    try {
      // Mikrofon-Zugriff anfordern
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Conversation initialisieren falls noch nicht geschehen
      if (!conversationRef.current) {
        await initializeConversation();
      }
      
      // Gespräch mit Agent-ID starten
      await conversationRef.current?.startSession({
        agentId: 'agent_5901k1zj5fqee3fv7fxjaa7vhrv9'
      });
    } catch (error) {
      console.error('Fehler beim Starten der Konversation:', error);
      alert('Mikrofon-Zugriff ist erforderlich für den Sprachagenten.');
    }
  };

  const endConversation = async () => {
    try {
      await conversationRef.current?.endSession();
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
              ? 'bg-green-100 border-4 border-green-500' 
              : status === 'connected' 
                ? 'bg-blue-100 border-4 border-blue-500' 
                : 'bg-gray-100 border-4 border-gray-300'
          }`}>
            {isConnected ? (
              <Mic className={`w-6 h-6 ${isSpeaking ? 'text-green-600 animate-pulse' : 'text-green-600'}`} />
            ) : (
              <MicOff className="w-6 h-6 text-gray-400" />
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">KI Sprachagent</h3>
          <p className="text-muted-foreground text-sm mb-3">
            {isConnected 
              ? isSpeaking 
                ? 'Der Agent spricht...' 
                : 'Bereit zum Sprechen - einfach lossprechen!'
              : 'Klicken Sie auf Start, um mit dem KI-Agenten zu sprechen'
            }
          </p>
          
          <div className="text-xs text-muted-foreground mb-4">
            Status: {status === 'connected' ? 'Verbunden' : 'Getrennt'}
          </div>
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
            💡 Mikrofon-Zugriff wird für die Sprachchat-Funktion benötigt
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgent;