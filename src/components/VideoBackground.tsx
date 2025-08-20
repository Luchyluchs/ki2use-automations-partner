import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import kiHeroBackground from "../assets/ki-hero-background.jpg";

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

      {/* AI-Generated Hero Background */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
          hasVideo ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url(${kiHeroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.05)',
          animation: 'slowZoom 20s ease-in-out infinite alternate'
        }}
      >
        {/* Animated Overlay Elements */}
        <div className="absolute inset-0">
          {/* Floating Data Particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Pulsing Network Nodes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`node-${i}`}
              className="absolute w-3 h-3 bg-purple-400/40 rounded-full animate-pulse"
              style={{
                top: `${15 + (i * 10)}%`,
                left: `${20 + (i * 8)}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
          
          {/* Enhanced Animation Effects */}
          <div className="absolute inset-0 animate-gradient-shift">
            {/* Moving Data Streams */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-slide-progress"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-slide-progress" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-slide-progress" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
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
          <div className="bg-background/90 backdrop-blur-sm border border-border/30 rounded-full px-3 py-1 text-xs text-foreground/70">
            ✨ KI-generierter Hintergrund
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;