import { useEffect, useState } from "react";
import { MessageCircle, Brain, Zap, Users } from "lucide-react";

const AnimatedKIVisual = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const processes = [
    { icon: MessageCircle, label: "Chat-Verarbeitung", color: "from-blue-500 to-purple-600" },
    { icon: Brain, label: "KI-Analyse", color: "from-purple-500 to-pink-600" },
    { icon: Zap, label: "Automatisierung", color: "from-pink-500 to-red-600" },
    { icon: Users, label: "Kundenservice", color: "from-red-500 to-orange-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % processes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto h-80">
      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full shadow-glow animate-pulse flex items-center justify-center">
        <Brain className="w-8 h-8 text-white animate-spin-slow" />
      </div>

      {/* Orbiting Process Circles */}
      {processes.map((process, index) => {
        const Icon = process.icon;
        const angle = (index * 90) - 90; // Start from top, go clockwise
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        const isActive = activeProcess === index;

        return (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              isActive ? 'scale-110' : 'scale-100'
            }`}
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
          >
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-br ${process.color} shadow-lg flex items-center justify-center ${
                isActive ? 'animate-bounce shadow-glow' : ''
              }`}
            >
              <Icon className={`w-6 h-6 text-white ${isActive ? 'animate-pulse' : ''}`} />
            </div>
            
            {/* Process Label */}
            <div className={`mt-2 text-xs text-center font-medium transition-opacity duration-300 ${
              isActive ? 'opacity-100 text-primary' : 'opacity-60 text-muted-foreground'
            }`}>
              {process.label}
            </div>
          </div>
        );
      })}

      {/* Data Flow Lines */}
      {processes.map((_, index) => {
        const isActive = activeProcess === index;
        const nextIndex = (index + 1) % processes.length;
        const angle1 = (index * 90) - 90;
        const angle2 = (nextIndex * 90) - 90;
        
        return (
          <svg
            key={`line-${index}`}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
            style={{ zIndex: -1 }}
          >
            <defs>
              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={isActive ? "0.6" : "0.1"} />
                <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity={isActive ? "0.3" : "0.05"} />
              </linearGradient>
            </defs>
            <line
              x1={`${50 + (Math.cos((angle1 * Math.PI) / 180) * 30)}%`}
              y1={`${50 + (Math.sin((angle1 * Math.PI) / 180) * 30)}%`}
              x2="50%"
              y2="50%"
              stroke={`url(#gradient-${index})`}
              strokeWidth={isActive ? "3" : "1"}
              className={`transition-all duration-500 ${isActive ? 'animate-pulse' : ''}`}
            />
          </svg>
        );
      })}

      {/* Floating Data Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-primary-glow rounded-full animate-float opacity-40"
          style={{
            top: `${20 + (i * 10)}%`,
            left: `${15 + (i * 15)}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + (i * 0.5)}s`
          }}
        />
      ))}

      {/* Performance Stats */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 grid grid-cols-3 gap-4 text-center">
        <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-2">
          <div className="text-lg font-bold text-primary animate-pulse">24/7</div>
          <div className="text-xs text-muted-foreground">Aktiv</div>
        </div>
        <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-2">
          <div className="text-lg font-bold text-primary animate-pulse">95%</div>
          <div className="text-xs text-muted-foreground">Effizienz</div>
        </div>
        <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-2">
          <div className="text-lg font-bold text-primary animate-pulse">{"<1s"}</div>
          <div className="text-xs text-muted-foreground">Reaktion</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedKIVisual;