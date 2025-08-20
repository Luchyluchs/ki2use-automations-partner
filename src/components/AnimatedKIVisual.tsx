import { useEffect, useState } from "react";
import { 
  Mic, 
  Mail, 
  Calendar, 
  TrendingUp, 
  Share2, 
  FileText, 
  Brain,
  Phone
} from "lucide-react";

const AnimatedKIVisual = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const processes = [
    { icon: Mic, label: "Voice AI", color: "from-blue-500 to-cyan-500", description: "Sprachassistenten" },
    { icon: Mail, label: "E-Mail AI", color: "from-cyan-500 to-teal-500", description: "Automatisierung" },
    { icon: Calendar, label: "Termin AI", color: "from-teal-500 to-green-500", description: "Buchungssystem" },
    { icon: TrendingUp, label: "Sales AI", color: "from-green-500 to-yellow-500", description: "Vertriebsunterstützung" },
    { icon: Share2, label: "Social AI", color: "from-yellow-500 to-orange-500", description: "Social Media" },
    { icon: FileText, label: "Content AI", color: "from-orange-500 to-red-500", description: "Newsletter & Content" },
    { icon: Phone, label: "Support AI", color: "from-red-500 to-pink-500", description: "Kundenservice" },
    { icon: Brain, label: "Analytics AI", color: "from-pink-500 to-purple-500", description: "Datenanalyse" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % processes.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto h-96">
      {/* Central KI Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full shadow-glow animate-pulse-glow flex items-center justify-center border-4 border-background">
        <Brain className="w-10 h-10 text-white animate-spin-slow" />
      </div>

      {/* Orbiting AI Services */}
      {processes.map((process, index) => {
        const Icon = process.icon;
        const angle = (index * 45) - 90; // 8 services = 360/8 = 45 degrees each
        const radius = 140;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        const isActive = activeProcess === index;

        return (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
              isActive ? 'scale-125 z-10' : 'scale-100 z-0'
            }`}
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
          >
            <div
              className={`w-14 h-14 rounded-full bg-gradient-to-br ${process.color} shadow-lg flex items-center justify-center border-2 border-background transition-all duration-500 ${
                isActive ? 'shadow-glow animate-bounce-soft' : 'hover:scale-110'
              }`}
            >
              <Icon className={`w-5 h-5 text-white ${isActive ? 'animate-pulse' : ''}`} />
            </div>
            
            {/* Service Label & Description */}
            <div className={`mt-2 text-center transition-all duration-500 ${
              isActive ? 'opacity-100 transform scale-110' : 'opacity-60'
            }`}>
              <div className={`text-xs font-semibold ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {process.label}
              </div>
              <div className={`text-xs mt-1 transition-opacity duration-300 ${
                isActive ? 'opacity-100 text-foreground' : 'opacity-0'
              }`}>
                {process.description}
              </div>
            </div>
          </div>
        );
      })}

      {/* Data Flow Network */}
      <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full" style={{ zIndex: -1 }}>
        <defs>
          <radialGradient id="networkGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        
        {/* Connection Lines to Center */}
        {processes.map((_, index) => {
          const isActive = activeProcess === index;
          const angle = (index * 45) - 90;
          const radius = 35; // Percentage of container
          const x1 = 50 + (Math.cos((angle * Math.PI) / 180) * radius);
          const y1 = 50 + (Math.sin((angle * Math.PI) / 180) * radius);
          
          return (
            <line
              key={`connection-${index}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2="50%"
              y2="50%"
              stroke="hsl(var(--primary))"
              strokeWidth={isActive ? "2" : "1"}
              strokeOpacity={isActive ? "0.8" : "0.2"}
              className={`transition-all duration-500 ${isActive ? 'animate-pulse' : ''}`}
            />
          );
        })}
        
        {/* Network Circle */}
        <circle
          cx="50%"
          cy="50%"
          r="35%"
          fill="none"
          stroke="url(#networkGradient)"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-spin-slow opacity-30"
        />
      </svg>

      {/* Floating Data Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 bg-primary-glow rounded-full animate-float opacity-60"
          style={{
            top: `${15 + (i * 6)}%`,
            left: `${10 + (i * 8)}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + (i * 0.2)}s`
          }}
        />
      ))}
      
      {/* Active Service Highlight */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
        <div className="bg-background/90 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 shadow-soft">
          <div className="text-sm font-semibold text-primary">
            {processes[activeProcess]?.label}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {processes[activeProcess]?.description}
          </div>
        </div>
      </div>

      {/* KI Performance Metrics */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 grid grid-cols-4 gap-3 text-center">
        <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-2 shadow-soft">
          <div className="text-sm font-bold text-primary animate-pulse">8+</div>
          <div className="text-xs text-muted-foreground">Services</div>
        </div>
        <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-2 shadow-soft">
          <div className="text-sm font-bold text-primary animate-pulse">24/7</div>
          <div className="text-xs text-muted-foreground">Verfügbar</div>
        </div>
        <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-2 shadow-soft">
          <div className="text-sm font-bold text-primary animate-pulse">90%+</div>
          <div className="text-xs text-muted-foreground">Effizienz</div>
        </div>
        <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-2 shadow-soft">
          <div className="text-sm font-bold text-primary animate-pulse">{"<2s"}</div>
          <div className="text-xs text-muted-foreground">Antwort</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedKIVisual;