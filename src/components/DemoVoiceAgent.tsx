import React, { useState } from 'react';
import { useConversation } from '@11labs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, MicOff, Phone, PhoneOff, Volume2 } from 'lucide-react';

interface DemoVoiceAgentProps {
  agentId: string;
  title: string;
  description: string;
  type: 'support' | 'booking';
  className?: string;
}

const DemoVoiceAgent: React.FC<DemoVoiceAgentProps> = ({ 
  agentId, 
  title, 
  description, 
  type,
  className = '' 
}) => {
  const [isConnected, setIsConnected] = useState(false);
  
  const conversation = useConversation({
    onConnect: () => setIsConnected(true),
    onDisconnect: () => setIsConnected(false),
    onError: () => {}, // Handle silently in demo
    onMessage: () => {} // Handle silently in demo  
  });

  const startConversation = async () => {
    try {
      // Mikrofon-Zugriff anfordern
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Gespräch mit Agent-ID starten
      await conversation.startSession({
        agentId: agentId
      });
    } catch {
      alert('Mikrofon-Zugriff ist erforderlich für den Sprachagenten.');
    }
  };

  const endConversation = async () => {
    try {
      await conversation.endSession();
    } catch {
      // Handle silently in demo
    }
  };

  return (
    <Card className={`h-full flex flex-col shadow-card ${className}`}>
      <CardHeader className="pb-3 border-b border-card-border">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            type === 'support' ? 'bg-primary/10' : 'bg-accent/10'
          }`}>
            <Volume2 className={`w-5 h-5 ${
              type === 'support' ? 'text-primary' : 'text-accent'
            }`} />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-center p-6">
        <div className="text-center space-y-6">
          {/* Voice Agent Status Indicator */}
          <div className="flex items-center justify-center">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
              isConnected 
                ? 'bg-green-100 border-4 border-green-500 animate-pulse' 
                : conversation.status === 'connected' 
                  ? 'bg-blue-100 border-4 border-blue-500' 
                  : 'bg-gray-100 border-4 border-gray-300'
            }`}>
              {isConnected ? (
                <Mic className={`w-8 h-8 ${conversation.isSpeaking ? 'text-green-600 animate-pulse' : 'text-green-600'}`} />
              ) : (
                <MicOff className="w-8 h-8 text-gray-400" />
              )}
            </div>
          </div>

          {/* Status Text */}
          <div className="space-y-2">
            <p className="text-lg font-medium">
              {isConnected 
                ? conversation.isSpeaking 
                  ? 'Agent antwortet...' 
                  : 'Bereit für Ihre Fragen!'
                : `${type === 'support' ? 'Support' : 'Terminbuchungs'}-Agent bereit`
              }
            </p>
            
            <p className="text-sm text-muted-foreground">
              {isConnected 
                ? 'Sprechen Sie einfach los'
                : 'Klicken Sie auf "Gespräch starten"'
              }
            </p>
          </div>

          {/* Demo Features */}
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="text-xs text-muted-foreground space-y-2">
              <div className="font-medium text-foreground mb-2">
                🎯 Demo-Features:
              </div>
              <div>📞 <strong>Einsatz:</strong> {type === 'support' ? 'Kundenservice, FAQ' : 'Terminbuchung, Kalender'}</div>
              <div>🌐 <strong>Integration:</strong> Website, Telefon, WhatsApp</div>
              <div>⚡ <strong>Vorteile:</strong> 24/7 verfügbar, mehrsprachig</div>
            </div>
          </div>

          {/* Action Button */}
          <div className="space-y-4">
            {!isConnected ? (
              <Button 
                onClick={startConversation}
                className="w-full bg-gradient-primary hover:scale-105 transition-all duration-200"
                size="lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                Gespräch starten
              </Button>
            ) : (
              <Button 
                onClick={endConversation}
                className="w-full"
                variant="danger"
                size="lg"
              >
                <PhoneOff className="w-4 h-4 mr-2" />
                Gespräch beenden
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemoVoiceAgent;