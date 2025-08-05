import React, { useState, useRef, useCallback } from 'react';

const VoiceAssistant: React.FC = () => {
  const [buttonText, setButtonText] = useState('Mit Assistent sprechen');
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Backend-Endpunkt - n8n Webhook URL
  const BACKEND_URL = 'https://n8n.srv929188.hstgr.cloud/webhook-test/8e2e75fc-67cd-4eda-9588-f6bb753d6aa4';

  const handleButtonClick = useCallback(async () => {
    if (isProcessing) return;

    if (!isListening) {
      // Erster Klick - Aufnahme starten
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = async () => {
          setIsProcessing(true);
          setButtonText('Analysiere...');
          
          // Audio-Blob erstellen
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
          
          // FormData für Backend-Request erstellen
          const formData = new FormData();
          formData.append('file', audioBlob);

          try {
            // Backend-Request senden
            const response = await fetch(BACKEND_URL, {
              method: 'POST',
              body: formData,
            });

            if (!response.ok) {
              throw new Error(`Server Error: ${response.status}`);
            }

            // Audio-Antwort verarbeiten
            const audioResponseBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioResponseBlob);
            
            // Audio abspielen
            if (audioPlayerRef.current) {
              audioPlayerRef.current.src = audioUrl;
              audioPlayerRef.current.play();
            }

          } catch (error) {
            console.error('Fehler bei Backend-Kommunikation:', error);
            alert('Fehler bei der Kommunikation mit dem Server. Bitte versuchen Sie es erneut.');
          } finally {
            // Button zurücksetzen
            setIsProcessing(false);
            setButtonText('Mit Assistent sprechen');
            
            // Stream cleanup
            stream.getTracks().forEach(track => track.stop());
          }
        };

        // Aufnahme starten
        mediaRecorder.start();
        setIsListening(true);
        setButtonText('Höre zu... (Erneut klicken zum Stoppen)');

      } catch (error) {
        console.error('Mikrofonzugriff verweigert:', error);
        alert('Mikrofonzugriff wurde verweigert. Bitte erlauben Sie den Zugriff in Ihren Browser-Einstellungen.');
      }
    } else {
      // Zweiter Klick - Aufnahme stoppen
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
        setIsListening(false);
      }
    }
  }, [isListening, isProcessing]);

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
          #voice-agent-button.listening {
            background-color: #e60000;
            color: white;
            border-color: #e60000;
          }
          #voice-agent-button:hover {
            opacity: 0.9;
          }
          #voice-agent-button:disabled {
            cursor: not-allowed;
            opacity: 0.6;
          }
        `}
      </style>
      
      <button
        id="voice-agent-button"
        className={isListening ? 'listening' : ''}
        onClick={handleButtonClick}
        disabled={isProcessing}
      >
        {buttonText}
      </button>
      
      <audio
        id="voice-agent-player"
        ref={audioPlayerRef}
        style={{ display: 'none' }}
        controls={false}
      />
    </div>
  );
};

export default VoiceAssistant;