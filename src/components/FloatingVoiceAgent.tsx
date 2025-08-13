import React, { useState } from 'react';
import { useConversation } from '@11labs/react';
import { Mic, MicOff, Phone, PhoneOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const FloatingVoiceAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  
  // Agent ID extracted from the provided URL
  const agentId = "agent_5901k1zj5fqee3fv7fxjaa7vhrv9";
  
  const conversation = useConversation({
    onConnect: () => {
      console.log('Voice agent connected');
      toast.success('Verbindung mit dem KI-Agenten hergestellt');
    },
    onDisconnect: () => {
      console.log('Voice agent disconnected');
      toast.info('Verbindung zum KI-Agenten beendet');
    },
    onError: (error) => {
      console.error('Voice agent error:', error);
      toast.error('Fehler beim Verbinden mit dem KI-Agenten');
    },
    onMessage: (message) => {
      console.log('Voice agent message:', message);
    }
  });

  const requestMicrophonePermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
      return true;
    } catch (error) {
      console.error('Microphone permission denied:', error);
      toast.error('Mikrofon-Berechtigung erforderlich für den Sprachagenten');
      return false;
    }
  };

  const startConversation = async () => {
    if (!hasPermission) {
      const granted = await requestMicrophonePermission();
      if (!granted) return;
    }

    try {
      // Generate signed URL for the agent
      const response = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`, {
        method: 'GET',
        headers: {
          'xi-api-key': process.env.ELEVENLABS_API_KEY || '',
        },
      });

      if (!response.ok) {
        // Fallback to direct agent ID if API key is not available
        await conversation.startSession({ agentId });
      } else {
        const data = await response.json();
        await conversation.startSession({ url: data.signed_url });
      }
      
      setIsOpen(true);
    } catch (error) {
      console.error('Failed to start conversation:', error);
      // Try direct connection as fallback
      try {
        await conversation.startSession({ agentId });
        setIsOpen(true);
      } catch (fallbackError) {
        toast.error('Konnte Gespräch nicht starten. Bitte versuchen Sie es später erneut.');
      }
    }
  };

  const endConversation = async () => {
    try {
      await conversation.endSession();
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to end conversation:', error);
      setIsOpen(false);
    }
  };

  const toggleConversation = () => {
    if (conversation.status === 'connected') {
      endConversation();
    } else {
      startConversation();
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Main Voice Agent Button */}
      <Button
        onClick={toggleConversation}
        size="icon"
        className={`w-12 h-12 rounded-full shadow-primary transition-all duration-300 ${
          conversation.status === 'connected' 
            ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' 
            : 'gradient-primary text-primary-foreground hover:shadow-lg transform hover:scale-105'
        }`}
        aria-label={conversation.status === 'connected' ? 'Gespräch beenden' : 'Sprachagent starten'}
      >
        {conversation.status === 'connected' ? (
          <PhoneOff className="w-5 h-5" />
        ) : (
          <Mic className="w-5 h-5" />
        )}
      </Button>

      {/* Status Indicator */}
      {conversation.status === 'connected' && (
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white"></div>
      )}

      {/* Speaking Indicator */}
      {conversation.isSpeaking && (
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      )}

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {conversation.status === 'connected' ? 'Gespräch beenden' : 'Mit KI-Agent sprechen'}
      </div>
    </div>
  );
};

export default FloatingVoiceAgent;