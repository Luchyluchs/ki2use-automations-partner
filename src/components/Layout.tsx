import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Chatbot from "./Chatbot";
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
    name: "Standard-KI-Agenten",
    href: "/standard-agenten"
  }, {
    name: "Maßgeschneiderte Agenten",
    href: "/massgeschneiderte-agenten"
  }, {
    name: "ROI-Rechner",
    href: "/roi-rechner"
  }, {
    name: "KI-Schulungen",
    href: "/ki-schulungen"
  }, {
    name: "Homepage Erstellung",
    href: "/homepage-erstellung"
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
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="text-2xl font-bold gradient-text">KI2USE</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${isActive(item.href) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
                  {item.name}
                </Link>)}
              <Button variant="hero" size="sm" asChild className="ml-4">
                <Link to="/kontakt">Beratung starten</Link>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="lg:hidden border-t border-border/50 py-6 bg-background/95 backdrop-blur-xl">
              <nav className="flex flex-col space-y-3">
                {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={`text-base font-medium transition-all duration-200 px-4 py-3 rounded-lg ${isActive(item.href) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
                    {item.name}
                  </Link>)}
                <div className="px-4 pt-2">
                  <Button variant="hero" size="sm" asChild className="w-full">
                    <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
                      Beratung starten
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted border-t border-card-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">KI2USE</div>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">KI-Agenten & Schulungen für deutsche Unternehmen. Prozesse automatisieren! Ihre effiziente Lösung für mehr Produktivität.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Dienstleistungen</h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li><Link to="/standard-agenten" className="hover:text-foreground transition-smooth block py-1">Standard-KI-Agenten</Link></li>
                <li><Link to="/massgeschneiderte-agenten" className="hover:text-foreground transition-smooth block py-1">Maßgeschneiderte Agenten</Link></li>
                <li><Link to="/ki-schulungen" className="hover:text-foreground transition-smooth block py-1">KI-Schulungen</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Rechtliches</h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li><Link to="/impressum" className="hover:text-foreground transition-smooth block py-1">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:text-foreground transition-smooth block py-1">Datenschutzerklärung</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-card-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-muted-foreground">
            <p className="text-xs sm:text-sm">&copy; 2024 KI2USE. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>;
};
export default Layout;