import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Brain } from "lucide-react";
import { useState } from "react";
import Chatbot from "./Chatbot";
import MobileBottomNav from "./MobileBottomNav";
import FloatingActionButton from "./FloatingActionButton";
const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Start",
    href: "/"
  }, {
    name: "Standard Assistenten",
    href: "/standard-agenten"
  }, {
    name: "Maßgeschneiderte Assistenten",
    href: "/massgeschneiderte-agenten"
  }, {
    name: "Assistenten-Rechner",
    href: "/agenten-rechner"
  }, {
    name: "Schulungen",
    href: "/ki-schulungen"
  }, {
    name: "Kontakt",
    href: "/kontakt"
  }];
  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div className="text-xl sm:text-2xl font-bold gradient-text">KI2USE</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-8 xl:ml-12">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg min-h-9 flex items-center ${isActive(item.href) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
                  {item.name}
                </Link>)}
              <Button variant="hero" size="sm" asChild className="ml-3 xl:ml-4 min-h-9">
                <Link to="/kontakt">Kostenloses Beratungsgespräch</Link>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 min-h-11 min-w-11 flex items-center justify-center">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="lg:hidden border-t border-border/50 py-4 sm:py-6 bg-background/95 backdrop-blur-xl">
              <nav className="flex flex-col space-y-1 sm:space-y-3">
                {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={`text-sm sm:text-base font-medium transition-all duration-200 px-4 py-3 rounded-lg min-h-11 flex items-center ${isActive(item.href) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
                    {item.name}
                  </Link>)}
                <div className="px-4 pt-2">
                  <Button variant="hero" size="sm" asChild className="w-full min-h-11">
                    <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
                      Kostenloses Beratungsgespräch
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>}
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20 lg:pb-0">{children}</main>

      {/* Footer */}
      <footer className="bg-muted border-t border-card-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">KI2USE</div>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed"><span className="nowrap-ki-assistant">KI-Assistenten</span> & Schulungen für deutsche Unternehmen. Prozesse automatisieren! Ihre effiziente Lösung für mehr Produktivität.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Dienstleistungen</h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li><Link to="/standard-agenten" className="hover:text-foreground transition-smooth block py-1"><span className="nowrap-ki-assistant">Standard-KI-Assistenten</span></Link></li>
                <li><Link to="/massgeschneiderte-agenten" className="hover:text-foreground transition-smooth block py-1">Maßgeschneiderte Assistenten</Link></li>
                <li><Link to="/ki-schulungen" className="hover:text-foreground transition-smooth block py-1">KI-Schulungen</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Demo</h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li><Link to="/demoportal" className="hover:text-foreground transition-smooth block py-1">Demoportal</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Rechtliches</h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li><Link to="/impressum" className="hover:text-foreground transition-smooth block py-1">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:text-foreground transition-smooth block py-1">Datenschutzerklärung</Link></li>
                <li><Link to="/agb" className="hover:text-foreground transition-smooth block py-1">AGB</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-card-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-muted-foreground">
            <p className="text-xs sm:text-sm">&copy; 2024 KI2USE. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
      <Chatbot />
      <MobileBottomNav />
      <FloatingActionButton />
    </div>;
};
export default Layout;
