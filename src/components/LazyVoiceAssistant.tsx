import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import WebSpeechVoiceAssistant from './WebSpeechVoiceAssistant';

const LazyVoiceAssistant: React.FC = () => {
  return (
    <ErrorBoundary fallback={
      <div className="opacity-0 pointer-events-none">
        {/* Unsichtbarer Platzhalter falls Komponente nicht lädt */}
      </div>
    }>
      <WebSpeechVoiceAssistant />
    </ErrorBoundary>
  );
};

export default LazyVoiceAssistant;