import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { Cookie, Settings, Shield } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

const CookieConsentBanner = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const { 
    consentData, 
    acceptAll, 
    acceptSelected, 
    reject,
    showBanner 
  } = useCookieConsent();

  useEffect(() => {
    if (consentData) {
      setAnalyticsConsent(consentData.analytics);
      setMarketingConsent(consentData.marketing || false);
    }
  }, [consentData]);

  if (!showBanner) return null;

  const handleAcceptSelected = () => {
    acceptSelected({ analytics: analyticsConsent, marketing: marketingConsent });
    setShowSettings(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[70] p-4 animate-in slide-in-from-bottom duration-500">
        <Card className="max-w-4xl mx-auto p-6 bg-card/95 backdrop-blur-md border-primary/20 shadow-elevated">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-1">Ihre Privatsphäre ist uns wichtig</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wir nutzen Cookies für die Website-Funktion und optional zur Analyse. 
                  Sie entscheiden, welche Sie zulassen.{' '}
                  <Link to="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </Link>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={reject}
                className="text-muted-foreground hover:text-foreground"
              >
                Ablehnen
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2"
              >
                <Settings className="h-3.5 w-3.5" />
                Anpassen
              </Button>
              <Button 
                size="sm"
                onClick={acceptAll}
                variant="cta"
              >
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-primary" />
              Cookie-Einstellungen
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Notwendige Cookies</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Erforderlich für die Grundfunktionen der Website.
                  </p>
                </div>
                <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">Immer aktiv</span>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <Label className="text-base font-medium">Analyse-Cookies</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Helfen uns zu verstehen, wie Besucher mit der Website interagieren (Google Analytics). Alle Daten werden anonymisiert.
                  </p>
                </div>
                <Switch 
                  checked={analyticsConsent} 
                  onCheckedChange={setAnalyticsConsent}
                />
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <Label className="text-base font-medium">Marketing-Cookies</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Werden verwendet, um Ihnen relevante Inhalte und Angebote anzuzeigen.
                  </p>
                </div>
                <Switch 
                  checked={marketingConsent} 
                  onCheckedChange={setMarketingConsent}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t">
              <Button 
                variant="outline" 
                onClick={reject}
                className="flex-1"
              >
                Nur notwendige
              </Button>
              <Button 
                onClick={handleAcceptSelected}
                className="flex-1"
                variant="cta"
              >
                Auswahl speichern
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsentBanner;
