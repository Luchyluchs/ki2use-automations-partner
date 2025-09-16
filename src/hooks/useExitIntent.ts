import { useEffect, useState } from 'react';

export const useExitIntent = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const alreadyShown = sessionStorage.getItem('exitPopupShown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if cursor leaves from top of viewport and hasn't been shown yet
      if (e.clientY <= 10 && !hasShown && !showExitPopup) {
        setShowExitPopup(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, showExitPopup]);

  const closePopup = () => setShowExitPopup(false);

  return { showExitPopup, closePopup };
};