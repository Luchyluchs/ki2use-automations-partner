import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
    name: "KI-Schulungen",
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
      <header className="sticky top-0 z-50 w-full border-b border-card-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">KI2USE</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-smooth ${isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  {item.name}
                </Link>)}
              <Button variant="cta" size="sm" asChild>
                <Link to="/kontakt">Beratungsgespräch</Link>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-smooth">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden border-t border-card-border py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium transition-smooth ${isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                    {item.name}
                  </Link>)}
                <Button variant="cta" size="sm" asChild className="self-start">
                  <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
                    Beratungsgespräch
                  </Link>
                </Button>
              </nav>
            </div>}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted border-t border-card-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-primary mb-4">KI2USE</div>
              <p className="text-muted-foreground max-w-md">KI-Agenten & Schulungen für deutsche Unternehmen. Prozesse automatisieren! Ihre effiziente Lösung für mehr Produktivität.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Dienstleistungen</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/standard-agenten" className="hover:text-foreground transition-smooth">Standard-KI-Agenten</Link></li>
                <li><Link to="/massgeschneiderte-agenten" className="hover:text-foreground transition-smooth">Maßgeschneiderte Agenten</Link></li>
                <li><Link to="/ki-schulungen" className="hover:text-foreground transition-smooth">KI-Schulungen</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Rechtliches</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/impressum" className="hover:text-foreground transition-smooth">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:text-foreground transition-smooth">Datenschutzerklärung</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-card-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 KI2USE. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Layout;