import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { Cookie, Settings, X } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

const CookieConsentBanner = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const { 
    hasConsent, 
    consentData, 
    acceptAll, 
    acceptSelected, 
    reject,
    showBanner 
  } = useCookieConsent();

  useEffect(() => {
    if (consentData) {
      setAnalyticsConsent(consentData.analytics);
    }
  }, [consentData]);

  if (!showBanner) return null;

  const handleAcceptAll = () => {
    acceptAll();
  };

  const handleReject = () => {
    reject();
  };

  const handleAcceptSelected = () => {
    acceptSelected({ analytics: analyticsConsent });
    setShowSettings(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg">
        <Card className="max-w-4xl mx-auto p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-center gap-3 flex-1">
              <Cookie className="h-6 w-6 text-primary flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Cookie-Einstellungen</h3>
                <p className="text-sm text-muted-foreground">
                  Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
                  Einige sind notwendig für die Funktion der Website, andere helfen uns bei der Analyse und Verbesserung.
                </p>
                <div className="mt-2 text-xs text-muted-foreground">
                  Mehr Informationen in unserer{' '}
                  <Link to="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                Einstellungen
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleReject}
              >
                Ablehnen
              </Button>
              <Button 
                size="sm"
                onClick={handleAcceptAll}
                className="bg-primary hover:bg-primary/90"
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
              <Cookie className="h-5 w-5" />
              Cookie-Einstellungen
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Notwendige Cookies</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>
                <Switch checked={true} disabled />
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Analyse-Cookies</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, 
                    indem sie Informationen anonym sammeln und melden (Google Analytics).
                  </p>
                </div>
                <Switch 
                  checked={analyticsConsent} 
                  onCheckedChange={setAnalyticsConsent}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button 
                variant="outline" 
                onClick={handleReject}
                className="flex-1"
              >
                Alle ablehnen
              </Button>
              <Button 
                onClick={handleAcceptSelected}
                className="flex-1"
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