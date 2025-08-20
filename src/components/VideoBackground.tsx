import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

interface VideoBackgroundProps {
  videoSrc?: string;
  fallbackGradient?: string;
  overlay?: boolean;
  controls?: boolean;
}

const VideoBackground = ({ 
  videoSrc = "/ki-demo-video.mp4", // Placeholder für zukünftiges Video
  fallbackGradient = "bg-gradient-to-br from-primary via-primary-glow to-accent",
  overlay = true,
  controls = true 
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if video can be loaded
    const handleCanPlay = () => {
      setHasVideo(true);
      if (isPlaying) {
        video.play().catch(() => {
          // If autoplay fails, that's okay
          setIsPlaying(false);
        });
      }
    };

    const handleError = () => {
      setHasVideo(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(() => {
        // Handle play failure
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      {/* Video Element */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          hasVideo ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Fallback Animated Background */}
      <div className={`absolute inset-0 ${fallbackGradient} ${hasVideo ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        {/* Animated Elements for Fallback */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Central Hub */}
            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full animate-pulse-glow flex items-center justify-center">
              <div className="w-16 h-16 bg-white/30 rounded-full animate-spin-slow flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>
            
            {/* Orbiting Elements */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-white/40 rounded-full animate-float"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-80px)`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20"></div>
      )}

      {/* Video Controls */}
      {controls && hasVideo && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={togglePlay}
            className="bg-background/80 backdrop-blur-sm border-white/20 text-foreground hover:bg-background/90"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMute}
            className="bg-background/80 backdrop-blur-sm border-white/20 text-foreground hover:bg-background/90"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
        </div>
      )}

      {/* Performance Stats Overlay */}
      <div className="absolute bottom-4 left-4 grid grid-cols-2 gap-2 text-center">
        <div className="bg-background/80 backdrop-blur-sm border border-white/20 rounded-lg p-2 shadow-soft">
          <div className="text-sm font-bold text-primary">8+</div>
          <div className="text-xs text-muted-foreground">KI-Services</div>
        </div>
        <div className="bg-background/80 backdrop-blur-sm border border-white/20 rounded-lg p-2 shadow-soft">
          <div className="text-sm font-bold text-primary">24/7</div>
          <div className="text-xs text-muted-foreground">Verfügbar</div>
        </div>
      </div>

      {/* Video Info Badge */}
      {!hasVideo && (
        <div className="absolute top-4 left-4">
          <div className="bg-background/90 backdrop-blur-sm border border-border/30 rounded-full px-3 py-1 text-xs text-muted-foreground">
            KI-Animation (Video wird geladen...)
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;