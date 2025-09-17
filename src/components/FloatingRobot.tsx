import React from 'react';
import RobotWidget from './RobotWidget';

const FloatingRobot: React.FC = () => {
  const handleRobotClick = () => {
    // Optional: Add analytics or custom behavior when robot is clicked
    console.log('Robot mascot clicked - opening chatbot');
  };

  return (
    <RobotWidget 
      targetSelector=".fixed.bottom-6.right-6 button" 
      onRobotClick={handleRobotClick}
    />
  );
};

export default FloatingRobot;