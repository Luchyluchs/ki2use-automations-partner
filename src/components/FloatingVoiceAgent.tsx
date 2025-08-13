import React, { useState } from 'react';
import { Mic, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VoiceAgent from './VoiceAgent';

const FloatingVoiceAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Debug: Komponente wird gerendert
  console.log('FloatingVoiceAgent rendering...');

  return (
    <>
      {/* Floating Button - Mit Debug-Styles für bessere Sichtbarkeit */}
      <Button
        onClick={() => {
          console.log('Voice Agent button clicked!');
          setIsOpen(true);
        }}
        className="fixed bottom-20 left-6 z-[60] w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-2xl border-4 border-white"
        size="lg"
        style={{
          backgroundColor: '#2563eb',
          position: 'fixed',
          bottom: '80px',
          left: '24px',
          zIndex: 60
        }}
      >
        <Mic className="w-8 h-8 text-white" />
      </Button>

      {/* Voice Agent Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-2xl shadow-2xl border max-w-md w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
              <div className="flex items-center space-x-3">
                <Mic className="w-5 h-5" />
                <h3 className="font-semibold">KI Sprachagent</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full w-8 h-8 p-0"
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