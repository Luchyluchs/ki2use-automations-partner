import React, { useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { Loader2, Mic } from 'lucide-react';
import robotHeadIcon from '@/assets/robot-head-icon.jpg';

const LazyVoiceAssistant: React.FC = () => {
  const [VoiceAssistant, setVoiceAssistant] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadVoiceAssistant = async () => {
      try {
        // Prüfe ob @11labs/react verfügbar ist
        await import('@11labs/react');
        
        if (mounted) {
          const { default: VoiceAssistantComponent } = await import('./VoiceAssistant');
          setVoiceAssistant(() => VoiceAssistantComponent);
          setLoading(false);
        }
      } catch (err) {
        console.error('VoiceAssistant konnte nicht geladen werden:', err);
        if (mounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    loadVoiceAssistant();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="relative">
        <div className="relative bg-white/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl px-4 py-3 shadow-card opacity-90">
          <div className="absolute -bottom-2 left-6 w-4 h-4 rotate-45 bg-white border-r-2 border-b-2 border-primary/20" />
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={robotHeadIcon} 
                alt="AI Robot" 
                className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/30"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                <Loader2 className="w-2.5 h-2.5 text-white animate-spin" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">
                Lade Assistent...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !VoiceAssistant) {
    return (
      <div className="relative">
        <div className="relative bg-white/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl px-4 py-3 shadow-card opacity-60">
          <div className="absolute -bottom-2 left-6 w-4 h-4 rotate-45 bg-white border-r-2 border-b-2 border-primary/20" />
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={robotHeadIcon} 
                alt="AI Robot" 
                className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/30 grayscale"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-muted flex items-center justify-center">
                <Mic className="w-2.5 h-2.5 text-muted-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-muted-foreground">
                Assistent nicht verfügbar
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary fallback={
      <div className="opacity-0 pointer-events-none">
        {/* Unsichtbarer Platzhalter falls VoiceAssistant nicht lädt */}
      </div>
    }>
      <VoiceAssistant />
    </ErrorBoundary>
  );
};

export default LazyVoiceAssistant;