import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import ElevenLabsDirectVoiceAssistant from './ElevenLabsDirectVoiceAssistant';

const LazyVoiceAssistant: React.FC = () => {
  return (
    <ErrorBoundary fallback={
      <div className="opacity-0 pointer-events-none">
        {/* Unsichtbarer Platzhalter falls Komponente nicht lädt */}
      </div>
    }>
      <ElevenLabsDirectVoiceAssistant />
    </ErrorBoundary>
  );
};

export default LazyVoiceAssistant;