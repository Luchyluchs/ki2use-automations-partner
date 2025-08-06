import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import ElevenLabsVoiceAssistant from './ElevenLabsVoiceAssistant';

const LazyVoiceAssistant: React.FC = () => {
  return (
    <ErrorBoundary fallback={
      <div className="opacity-0 pointer-events-none">
        {/* Unsichtbarer Platzhalter falls Komponente nicht lädt */}
      </div>
    }>
      <ElevenLabsVoiceAssistant />
    </ErrorBoundary>
  );
};

export default LazyVoiceAssistant;