import React, { useState, useEffect } from 'react';
import { Mic, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VoiceAgent from './VoiceAgent';
import { useLocation } from 'react-router-dom';

const FloatingVoiceAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const location = useLocation();
  
  // Check if chatbot is open by looking for the chatbot window in DOM
  useEffect(() => {
    const checkChatbotState = () => {
      const chatbotWindow = document.querySelector('[data-chatbot-window]');
      setIsChatbotOpen(!!chatbotWindow);
    };

    // Initial check
    checkChatbotState();

    // Set up observer to watch for chatbot changes
    const observer = new MutationObserver(checkChatbotState);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true, 
      attributeFilter: ['data-chatbot-window'] 
    });

    return () => observer.disconnect();
  }, []);

  // Hide in demo environment - AFTER all hooks
  if (location.pathname === '/demoportal') {
    return null;
  }

  return (
    <>
      {/* Floating Button - Positioned above bottom nav on mobile */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-20 left-4 lg:bottom-6 lg:left-6 w-32 lg:w-36 h-10 lg:h-12 rounded-lg lg:rounded-xl bg-gradient-primary text-primary-foreground shadow-primary hover-scale float-element ${
          isChatbotOpen ? 'z-30' : 'z-40'
        }`}
        size="sm"
      >
        <span className="text-xs lg:text-sm font-bold text-primary-foreground text-center">
          Voice Agent testen
        </span>
      </Button>

      {/* Voice Agent Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
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
                  <p className="text-sm opacity-90">Sprechen Sie mit unserem <span className="nowrap-ki-assistant">KI-Assistenten</span></p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-muted/20 rounded-full w-8 h-8 p-0"
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