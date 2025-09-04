import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DemoChatbot from './DemoChatbot';
import DemoVoiceAgent from './DemoVoiceAgent';
import DemoContactForm from './DemoContactForm';
import { useDemoCustomer, CustomerConfig } from '@/hooks/useDemoCustomer';
import { LogOut, Users, Clock, Shield } from 'lucide-react';

interface DemoInterfaceProps {
  onLogout: () => void;
  remainingTime: number;
}

const DemoInterface: React.FC<DemoInterfaceProps> = ({ onLogout, remainingTime }) => {
  const { customers, selectedCustomer, selectCustomer } = useDemoCustomer();

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-card border-b border-card-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold">KI2USE Demoportal</h1>
              </div>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                Live Demo
              </Badge>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="hidden sm:inline">Session:</span>
                <span className="font-mono">{formatTime(remainingTime)}</span>
              </div>
              
              <Select value={selectedCustomer.id} onValueChange={selectCustomer}>
                <SelectTrigger className="w-48">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span className="truncate">{selectedCustomer.name}</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {customers.map((customer) => (
                    <SelectItem key={customer.id} value={customer.id}>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {customer.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Ausloggen
              </Button>
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                className="sm:hidden"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Customer Info Banner */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Demo-Konfiguration: {selectedCustomer.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium mb-1">Support Chatbot</p>
                <p className="text-muted-foreground font-mono text-xs">
                  {selectedCustomer.chatbotWebhooks.support.slice(-12)}...
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">Support Voice Agent</p>
                <p className="text-muted-foreground font-mono text-xs">
                  {selectedCustomer.voiceAgentIds.support.slice(-12)}...
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">Kontaktformular</p>
                <p className="text-muted-foreground font-mono text-xs">
                  {selectedCustomer.contactFormWebhook.slice(-12)}...
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-280px)] min-h-[600px]">
          {/* Support Assistants */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-2">Support Assistenten</h2>
              <p className="text-muted-foreground text-sm">Kundenservice & FAQ-Bearbeitung</p>
            </div>
            
            <div className="space-y-4 h-full">
              <div className="h-1/2">
                <DemoChatbot
                  webhookUrl={selectedCustomer.chatbotWebhooks.support}
                  title="Support Chatbot"
                  description="Text-basierte Kundenbetreuung"
                  type="support"
                  className="h-full"
                />
              </div>
              
              <div className="h-1/2">
                <DemoVoiceAgent
                  agentId={selectedCustomer.voiceAgentIds.support}
                  title="Support Voice Agent"
                  description="Sprach-basierte Kundenbetreuung"
                  type="support"
                  className="h-full"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-accent mb-2">Lead-Generierung</h2>
              <p className="text-muted-foreground text-sm">Kontaktaufnahme & Anfragen</p>
            </div>
            
            <DemoContactForm
              webhookUrl={selectedCustomer.contactFormWebhook}
              customerName={selectedCustomer.name}
              className="h-full"
            />
          </div>

          {/* Booking Assistants */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-secondary mb-2">Terminbuchungs Assistenten</h2>
              <p className="text-muted-foreground text-sm">Kalenderverwaltung & Buchungen</p>
            </div>
            
            <div className="space-y-4 h-full">
              <div className="h-1/2">
                <DemoChatbot
                  webhookUrl={selectedCustomer.chatbotWebhooks.booking}
                  title="Terminbuchungs Chatbot"
                  description="Text-basierte Terminverwaltung"
                  type="booking"
                  className="h-full"
                />
              </div>
              
              <div className="h-1/2">
                <DemoVoiceAgent
                  agentId={selectedCustomer.voiceAgentIds.booking}
                  title="Terminbuchungs Voice Agent"
                  description="Sprach-basierte Terminverwaltung"
                  type="booking"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <Card className="inline-block shadow-card">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">
                🎯 <strong>Live-Demo für Kundenpräsentationen</strong> | 
                Alle Assistenten nutzen echte Webhooks und können kundenspezifisch konfiguriert werden
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DemoInterface;