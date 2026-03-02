import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Chatbot from "./Chatbot";
import MobileBottomNav from "./MobileBottomNav";
import Breadcrumbs from "./Breadcrumbs";
import FuturisticBackground from "./FuturisticBackground";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Start", href: "/" },
    { name: "Beratung", href: "/beratung" },
    { name: "KI-Agenten", href: "/standard-agenten" },
    { name: "KI-Rechner", href: "/roi-rechner" },
    { name: "Förderung", href: "/foerderung" },
    { name: "Demo", href: "/demoportal" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && !href.startsWith("/#") && location.pathname.startsWith(href)) return true;
    return false;
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <FuturisticBackground />
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="text-2xl font-light text-white tracking-tight">KI2USE</div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-light transition-all duration-300 px-4 py-2 rounded-full ${isActive(item.href) ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"}`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="default" size="sm" asChild className="ml-6 bg-primary hover:bg-primary-hover text-white font-light rounded-full px-6">
                <Link to="/kontakt">Erstgespräch</Link>
              </Button>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t border-white/5 py-6 bg-background/98 backdrop-blur-md">
              <nav className="flex flex-col space-y-2">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base font-light transition-all duration-300 px-4 py-3 rounded-full ${isActive(item.href) ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4">
                  <Button variant="default" size="sm" asChild className="w-full bg-primary hover:bg-primary-hover text-white font-light rounded-full">
                    <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>Erstgespräch</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <Breadcrumbs />
      <main className="pb-16 lg:pb-0 bg-gradient-hero">{children}</main>

      <footer className="bg-gradient-hero relative overflow-hidden border-t border-white/10">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="text-xl sm:text-2xl font-light text-white mb-3 sm:mb-4">KI2USE</div>
              <p className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed">
                KI-Beratung & Umsetzung für den deutschen Mittelstand. 
                Verständlich, bezahlbar, DSGVO-konform.
              </p>
              <p className="text-xs text-white/40 mt-3">
                Deutschlandweit · Persönlicher Ansprechpartner
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Angebot</h3>
              <ul className="space-y-2 text-white/60 text-sm sm:text-base">
                <li><Link to="/beratung" className="hover:text-white transition-smooth block py-1">KI-Beratung</Link></li>
                <li><Link to="/standard-agenten" className="hover:text-white transition-smooth block py-1">KI-Agenten</Link></li>
                <li><Link to="/foerderung" className="hover:text-white transition-smooth block py-1">Förderung</Link></li>
                <li><Link to="/roi-rechner" className="hover:text-white transition-smooth block py-1">KI-Rechner</Link></li>
                <li><Link to="/demoportal" className="hover:text-white transition-smooth block py-1">Demoportal</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Rechtliches</h3>
              <ul className="space-y-2 text-white/60 text-sm sm:text-base">
                <li><Link to="/impressum" className="hover:text-white transition-smooth block py-1">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:text-white transition-smooth block py-1">Datenschutzerklärung</Link></li>
                <li><Link to="/agb" className="hover:text-white transition-smooth block py-1">AGB</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-white/50">
            <p className="text-xs sm:text-sm">&copy; 2024–2026 KI2USE. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
      <Chatbot />
      <MobileBottomNav />
    </div>
  );
};

export default Layout;
