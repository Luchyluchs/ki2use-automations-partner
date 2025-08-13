import React, { useState } from 'react';
import { Mic, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// SUPER SIMPLE TEST COMPONENT
const FloatingVoiceAgent: React.FC = () => {
  // Log immediately when file is loaded
  console.log('FloatingVoiceAgent file loaded!');
  
  // Log when component function is called
  console.log('FloatingVoiceAgent function called!');
  
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        width: '100px',
        height: '100px',
        backgroundColor: '#ff00ff',
        zIndex: 999999,
        fontSize: '12px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '5px solid #00ff00',
        borderRadius: '10px',
        boxShadow: '0 0 50px #ff00ff'
      }}
    >
      TEST BUTTON
    </div>
  );
};

export default FloatingVoiceAgent;