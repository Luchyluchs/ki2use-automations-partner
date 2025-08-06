import React from 'react';

interface VoiceAgentProps {
  className?: string;
  width?: string;
  height?: string;
}

const VoiceAgent: React.FC<VoiceAgentProps> = ({ 
  className = '', 
  width = '100%', 
  height = '600px' 
}) => {
  const agentUrl = 'https://elevenlabs.io/app/talk-to?agent_id=agent_5901k1zj5fqee3fv7fxjaa7vhrv9';

  return (
    <div className={`rounded-xl overflow-hidden border border-card-border shadow-lg ${className}`}>
      <iframe
        src={agentUrl}
        width={width}
        height={height}
        frameBorder="0"
        allow="microphone; camera"
        title="KI Sprachagent"
        className="w-full"
        style={{ minHeight: height }}
      />
    </div>
  );
};

export default VoiceAgent;