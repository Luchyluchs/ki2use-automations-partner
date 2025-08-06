import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import VoiceAssistantFallback from './VoiceAssistantFallback';

const LazyVoiceAssistant: React.FC = () => {
  return (
    <ErrorBoundary fallback={
      <div className="opacity-0 pointer-events-none">
        {/* Unsichtbarer Platzhalter falls Komponente nicht lädt */}
      </div>
    }>
      <VoiceAssistantFallback />
    </ErrorBoundary>
  );
};

export default LazyVoiceAssistant;