import React, { useState } from 'react';
import { Mic, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingVoiceAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStartConversation = () => {
    alert('Sprachagent ist derzeit in Entwicklung. Bitte kontaktieren Sie uns über das Kontaktformular für weitere Informationen.');
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[60] w-14 h-14 rounded-full bg-gradient-primary hover:scale-110 transition-all duration-300 shadow-2xl border-2 border-white/20"
        size="lg"
        title="KI Sprachagent"
      >
        <Mic className="w-6 h-6 text-primary-foreground" />
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
            
            {/* Simple Voice Agent Content */}
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Mic className="w-8 h-8 text-primary" />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">KI Sprachagent</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Sprechen Sie direkt mit unserem KI-Agenten über Ihre individuellen Anforderungen.
                </p>
              </div>

              <Button 
                onClick={handleStartConversation}
                className="w-full bg-gradient-primary hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Gespräch starten
              </Button>

              <div className="text-xs text-muted-foreground">
                💡 Mikrofon-Zugriff wird für die Sprachchat-Funktion benötigt
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingVoiceAgent;