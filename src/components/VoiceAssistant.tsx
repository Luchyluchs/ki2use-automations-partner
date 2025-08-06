import React from 'react';

const VoiceAssistant: React.FC = () => {
  const handleVoiceClick = () => {
    window.open('https://elevenlabs.io/app/talk-to?agent_id=agent_9201k1xfxkxrepj9q3zqrekwfkvs', '_blank');
  };

  return (
    <div className="voice-assistant-container">
      <style>
        {`
          #voice-agent-button {
            cursor: pointer;
            padding: 12px 20px;
            border: 1px solid #ccc;
            border-radius: 20px;
            font-size: 16px;
            transition: all 0.2s ease;
            background-color: white;
            color: #333;
          }
          #voice-agent-button.connected {
            background-color: #e60000;
            color: white;
            border-color: #e60000;
          }
          #voice-agent-button.speaking {
            background-color: #00a000;
            color: white;
            border-color: #00a000;
            animation: pulse 1.5s infinite;
          }
          #voice-agent-button:hover {
            opacity: 0.9;
          }
          #voice-agent-button:disabled {
            cursor: not-allowed;
            opacity: 0.6;
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
      
      <button
        id="voice-agent-button"
        onClick={handleVoiceClick}
      >
        Mit Assistent sprechen
      </button>
    </div>
  );
};

export default VoiceAssistant;