import React, { useState } from 'react';
import { Mic, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VoiceAgent from './VoiceAgent';

const FloatingVoiceAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Debug: Super Simple Button */}
      <div 
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 9999,
          width: '60px',
          height: '60px',
          backgroundColor: '#ff0000',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: 'white',
          border: '3px solid white',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}
        onClick={() => setIsOpen(true)}
      >
        🎤
      </div>

      {/* Voice Agent Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-card rounded-2xl shadow-2xl border border-card-border max-w-md w-full mx-4 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-primary text-primary-foreground">
              <div className="flex items-center space-x-3">
                <Mic className="w-5 h-5" />
                <h3 className="font-semibold">KI Sprachagent</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-white/20 rounded-full w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Voice Agent */}
            <VoiceAgent className="border-0" />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingVoiceAgent;