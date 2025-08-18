import React, { useState } from 'react';
import { useConversation } from '@11labs/react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Phone, PhoneOff } from 'lucide-react';

interface VoiceAgentProps {
  className?: string;
}

const VoiceAgent: React.FC<VoiceAgentProps> = ({ className = '' }) => {
  const [isConnected, setIsConnected] = useState(false);
  
  const conversation = useConversation({
    onConnect: () => setIsConnected(true),
    onDisconnect: () => setIsConnected(false),
    onError: () => {}, // Handle silently in production
    onMessage: () => {} // Handle silently in production  
  });

  const startConversation = async () => {
    try {
      // Mikrofon-Zugriff anfordern
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Gespräch mit Agent-ID starten
      await conversation.startSession({
        agentId: 'agent_5901k1zj5fqee3fv7fxjaa7vhrv9'
      });
    } catch {
      alert('Mikrofon-Zugriff ist erforderlich für den Sprachagenten.');
    }
  };

  const endConversation = async () => {
    try {
      await conversation.endSession();
    } catch {
      // Handle silently in production
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
          <h3 className="text-lg font-semibold mb-2">KI2USE Voice Agent</h3>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-3 mb-3">
            <p className="text-sm font-semibold text-primary">
              🧠 Mit KI2USE Expertenwissen trainiert
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Spezialisiert auf KI-Automatisierung & digitale Lösungen
            </p>
          </div>
          <p className="text-muted-foreground text-sm mb-3">
            {isConnected 
              ? conversation.isSpeaking 
                ? 'Der KI2USE-Agent antwortet...' 
                : 'Fragen Sie mich alles über KI2USE - Services, Preise, Implementierung!'
              : 'Sprechen Sie mit unserem KI2USE-trainierten Voice Agent'
            }
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-blue-800">
              <strong>💡 Diese Technologie</strong> kann in Ihren Telefonsystemen oder auf Ihrer Website integriert werden
            </p>
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
          
          <div className="text-xs text-muted-foreground space-y-1">
            <div>🎯 <strong>Einsatzbereiche:</strong> Kundenservice, Terminbuchung, Produktberatung</div>
            <div>📞 <strong>Integration:</strong> Telefon, Website, WhatsApp, Teams</div>
            <div>⚡ <strong>Vorteile:</strong> 24/7 verfügbar, mehrsprachig, sofort einsatzbereit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgent;