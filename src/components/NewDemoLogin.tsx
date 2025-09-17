import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, User, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewDemoLoginProps {
  onLogin: (username: string, password: string) => boolean;
}

const NewDemoLogin: React.FC<NewDemoLoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    const success = onLogin(username, password);
    
    if (!success) {
      setError('Ungültige Anmeldedaten. Bitte überprüfen Sie Benutzername und Passwort.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4 pb-20 lg:pb-4">
      <div className="w-full max-w-md space-y-6">
        {/* Back to Homepage Link */}
        <div className="text-center">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
            <Link to="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Homepage
            </Link>
          </Button>
        </div>

        <Card className="shadow-elevated border-card-border">
          <CardHeader className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">KI2USE Demoportal</CardTitle>
            <CardDescription>
              Melden Sie sich mit Ihren personalisierten Zugangsdaten an
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Benutzername
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Ihr Benutzername"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Passwort
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Ihr Passwort"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {error && (
                <Alert className="border-destructive/20 bg-destructive/5">
                  <AlertDescription className="text-destructive">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isLoading || !username || !password}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    Anmeldung läuft...
                  </>
                ) : (
                  'Anmelden'
                )}
              </Button>
            </form>

            <div className="text-center pt-4 border-t border-muted">
              <p className="text-sm text-muted-foreground">
                Benötigen Sie Zugang zum Demoportal?{' '}
                <Link to="/kontakt" className="text-primary hover:underline">
                  Kontaktieren Sie uns
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Ihre Session läuft nach 30 Minuten Inaktivität automatisch ab
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewDemoLogin;