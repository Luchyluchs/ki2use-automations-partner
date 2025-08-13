import React, { useState } from 'react';
import { Mic, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingVoiceAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Debug: Log that component is rendering
  console.log('FloatingVoiceAgent is rendering!');

  return (
    <>
      {/* DEBUG: Super visible button with inline styles */}
      <div
        onClick={() => {
          console.log('Button clicked!');
          setIsOpen(true);
        }}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          width: '60px',
          height: '60px',
          backgroundColor: '#ff0000',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9999,
          boxShadow: '0 4px 20px rgba(255, 0, 0, 0.5)',
          border: '3px solid #ffffff'
        }}
      >
        <Mic style={{ color: 'white', width: '24px', height: '24px' }} />
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}
          onClick={() => setIsOpen(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              maxWidth: '400px',
              width: '90%'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3>KI Sprachagent (DEBUG)</h3>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>
            <p>DEBUG: Der Button funktioniert! Das Problem war mit der ursprünglichen Implementierung.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingVoiceAgent;