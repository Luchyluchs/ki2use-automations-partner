import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import VoiceAssistant from './VoiceAssistant';

const LazyVoiceAssistant: React.FC = () => {
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