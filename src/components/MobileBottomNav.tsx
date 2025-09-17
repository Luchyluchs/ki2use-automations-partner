import { Link, useLocation } from "react-router-dom";
import { Calculator, MessageCircle, Phone, Home, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const MobileBottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    {
      icon: Home,
      label: "Start",
      href: "/",
      primary: false
    },
    {
      icon: Calculator,
      label: "Kosten-Rechner",
      href: "/roi-rechner",
      primary: false
    },
    {
      icon: Phone,
      label: "Beratung",
      href: "/kontakt",
      primary: true
    },
    {
      icon: Zap,
      label: "Agenten",
      href: "/standard-agenten",
      primary: false
    },
    {
      icon: MessageCircle,
      label: "Demo",
      href: "/demoportal",
      primary: false
    }
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border lg:hidden">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center space-y-1 transition-all duration-200",
                active 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground",
                item.primary && !active && "text-accent hover:text-accent-hover"
              )}
            >
              <div className={cn(
                "p-1.5 rounded-lg transition-all duration-200",
                active && "bg-primary/10",
                item.primary && !active && "bg-accent/10"
              )}>
                <Icon size={18} />
              </div>
              <span className="text-xs font-medium leading-none">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;