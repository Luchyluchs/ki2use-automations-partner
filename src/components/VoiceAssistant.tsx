import React from 'react';

const VoiceAssistant: React.FC = () => {
  const handleVoiceClick = () => {
    window.open('https://elevenlabs.io/app/talk-to?agent_id=agent_9201k1xfxkxrepj9q3zqrekwfkvs', '_blank');
  };

  return (
    <div className="voice-assistant-container">
      
      <button
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors"
        onClick={handleVoiceClick}
      >
        Mit Assistent sprechen
      </button>
    </div>
  );
};

export default VoiceAssistant;