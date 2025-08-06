import React, { useState } from 'react';
// import { useConversation } from '@11labs/react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Phone, PhoneOff } from 'lucide-react';

interface VoiceAgentProps {
  className?: string;
}

const VoiceAgent: React.FC<VoiceAgentProps> = ({ className = '' }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [status, setStatus] = useState<'connected' | 'disconnected'>('disconnected');
  
  // Mock conversation object to replace the useConversation hook
  const conversation = {
    status,
    isSpeaking,
    startSession: async (options: { agentId: string }) => {
      console.log('Mock: Starting session with agent:', options.agentId);
      setStatus('connected');
      setIsConnected(true);
      return 'mock-conversation-id';
    },
    endSession: async () => {
      console.log('Mock: Ending session');
      setStatus('disconnected');
      setIsConnected(false);
      setIsSpeaking(false);
    }
  };

  const startConversation = async () => {
    try {
      // Mikrofon-Zugriff anfordern
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Gespräch mit Agent-ID starten
      await conversation.startSession({
        agentId: 'agent_5901k1zj5fqee3fv7fxjaa7vhrv9'
      });
      
      // Simulate speaking after 2 seconds
      setTimeout(() => setIsSpeaking(true), 2000);
      setTimeout(() => setIsSpeaking(false), 5000);
    } catch (error) {
      console.error('Fehler beim Starten der Konversation:', error);
      alert('Mikrofon-Zugriff ist erforderlich für den Sprachagenten.');
    }
  };

  const endConversation = async () => {
    try {
      await conversation.endSession();
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
              : conversation.status === 'connected' 
                ? 'bg-blue-100 border-4 border-blue-500' 
                : 'bg-gray-100 border-4 border-gray-300'
          }`}>
            {isConnected ? (
              <Mic className={`w-6 h-6 ${conversation.isSpeaking ? 'text-green-600 animate-pulse' : 'text-green-600'}`} />
            ) : (
              <MicOff className="w-6 h-6 text-gray-400" />
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">KI Sprachagent</h3>
          <p className="text-muted-foreground text-sm mb-3">
            {isConnected 
              ? conversation.isSpeaking 
                ? 'Der Agent spricht...' 
                : 'Bereit zum Sprechen - einfach lossprechen!'
              : 'Klicken Sie auf Start, um mit dem KI-Agenten zu sprechen'
            }
          </p>
          
          <div className="text-xs text-muted-foreground mb-4">
            Status: {conversation.status === 'connected' ? 'Verbunden' : 'Getrennt'}
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