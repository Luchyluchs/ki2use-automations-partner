import React, { useState } from 'react';
import { Mic, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VoiceAgent from './VoiceAgent';

const FloatingVoiceAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 w-32 h-16 rounded-xl bg-gradient-primary hover:scale-105 hover:shadow-3xl active:scale-95 transition-all duration-200 shadow-2xl border-2 border-white/30 cursor-pointer"
        size="lg"
      >
        <span className="text-sm font-bold text-primary-foreground text-center">
          Voice Agent testen
        </span>
      </Button>

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
                <div>
                  <h3 className="font-semibold">Voice Agent testen</h3>
                  <p className="text-sm opacity-90">Sprechen Sie mit unserem KI-Assistenten</p>
                </div>
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