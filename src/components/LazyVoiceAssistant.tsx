import React, { Suspense, lazy } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { Loader2 } from 'lucide-react';

// Lazy load der VoiceAssistant Komponente
const VoiceAssistant = lazy(() => import('./VoiceAssistant'));

const LazyVoiceAssistant: React.FC = () => {
  return (
    <ErrorBoundary fallback={
      <div className="opacity-0 pointer-events-none">
        {/* Unsichtbarer Platzhalter falls VoiceAssistant nicht lädt */}
      </div>
    }>
      <Suspense fallback={
        <div className="flex items-center justify-center w-10 h-10">
          <Loader2 className="w-4 h-4 animate-spin text-primary" />
        </div>
      }>
        <VoiceAssistant />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyVoiceAssistant;