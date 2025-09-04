import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Eye, EyeOff, Shield } from 'lucide-react';

interface DemoLoginProps {
  onLogin: (password: string) => boolean;
  error?: string;
}

const DemoLogin: React.FC<DemoLoginProps> = ({ onLogin, error }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    // Small delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 500));

    const success = onLogin(password);
    if (!success) {
      setLoginError('Falsches Passwort. Bitte versuchen Sie es erneut.');
      setPassword('');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-elevated border-card-border">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">KI2USE Demoportal</CardTitle>
              <CardDescription className="mt-2">
                Passwort-geschützter Bereich für Kundenpräsentationen
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Demo-Passwort
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Passwort eingeben..."
                    className="pr-10 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {(loginError || error) && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                  <p className="text-sm text-destructive font-medium">
                    {loginError || error}
                  </p>
                </div>
              )}

              <Button 
                type="submit" 
                disabled={isLoading || !password.trim()}
                className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                {isLoading ? (
                  <>
                    <Lock className="w-4 h-4 mr-2 animate-pulse" />
                    Authentifizierung...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 mr-2" />
                    Demo starten
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-3">
              <div className="bg-accent/10 rounded-lg p-4">
                <p className="text-sm text-accent font-medium mb-2">
                  🎯 Demo-Funktionen
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Live Chatbot & Voice Agent Tests</p>
                  <p>• Kundenspezifische Konfigurationen</p>
                  <p>• Support & Terminbuchungs-Assistenten</p>
                  <p>• Integriertes Kontaktformular</p>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground">
                Sicherer Zugang für autorisierte Präsentationen
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DemoLogin;