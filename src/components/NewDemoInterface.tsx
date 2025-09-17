import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DemoChatbot from './DemoChatbot';
import DemoVoiceAgent from './DemoVoiceAgent';
import DemoContactForm from './DemoContactForm';
import DemoROICalculator from './DemoROICalculator';
import { CustomerConfig } from '@/hooks/useCustomerAuth';
import { LogOut, Clock, Shield, Home, Calculator, MessageSquare, Phone, Mail, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
interface NewDemoInterfaceProps {
  customer: CustomerConfig;
  onLogout: () => void;
  remainingTime: number;
}
const NewDemoInterface: React.FC<NewDemoInterfaceProps> = ({
  customer,
  onLogout,
  remainingTime
}) => {
  const [activeTab, setActiveTab] = useState('assistants');
  
  const handleTabChange = (value: string) => {
    // Prevent automatic scrolling when switching tabs
    const currentScrollPosition = window.scrollY;
    setActiveTab(value);
    
    // Restore scroll position after tab change
    requestAnimationFrame(() => {
      window.scrollTo(0, currentScrollPosition);
    });
  };
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  return <div className="min-h-screen bg-gradient-subtle">
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
                {customer.name}
              </Badge>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="hidden sm:inline">Session:</span>
                <span className="font-mono">{formatTime(remainingTime)}</span>
              </div>

              <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
                <Link to="/" className="inline-flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Zur Homepage
                </Link>
              </Button>
              
              <Button onClick={onLogout} variant="outline" size="sm" className="hidden sm:inline-flex">
                <LogOut className="w-4 h-4 mr-2" />
                Ausloggen
              </Button>
              
              {/* Mobile buttons */}
              <Button variant="outline" size="sm" asChild className="sm:hidden">
                <Link to="/">
                  <Home className="w-4 h-4" />
                </Link>
              </Button>
              <Button onClick={onLogout} variant="outline" size="sm" className="sm:hidden">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger value="assistants" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              KI-Assistenten
            </TabsTrigger>
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              ROI-Rechner
            </TabsTrigger>
          </TabsList>

          <TabsContent value="assistants" className="space-y-6">
            {/* Welcome Banner */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-center">
                  Willkommen bei Ihrem personalisierten KI-Demo, {customer.name}!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Testen Sie alle verfügbaren KI-Assistenten mit Ihren individuell konfigurierten Webhooks und Einstellungen.
                </p>
              </CardContent>
            </Card>

            {/* Assistants Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Support Chatbot */}
              <div className="space-y-3">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Support Chatbot</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Text-basierte Kundenbetreuung</p>
                </div>
                <DemoChatbot webhookUrl={customer.chatbotWebhooks.support} title="Support Assistent" description="Beantwortet Kundenanfragen und FAQ" type="support" className="min-h-[380px] h-full" />
              </div>

              {/* Contact Form */}
              <div className="space-y-3">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Mail className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-semibold">Kontaktformular</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Lead-Generierung & Anfragen</p>
                </div>
                <DemoContactForm webhookUrl={customer.contactFormWebhook} customerName={customer.name} className="min-h-[380px] h-full" />
              </div>

              {/* Voice Agent */}
              <div className="space-y-3">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Phone className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl font-semibold">Voice Agent</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Sprachbasierte Kundenbetreuung</p>
                </div>
                <DemoVoiceAgent agentId={customer.voiceAgentIds.support} title="Support Voice Agent" description="Sprechen Sie direkt mit dem KI-Assistenten" type="support" className="min-h-[380px] h-full" />
              </div>
            </div>

            {/* Additional Assistants Row */}
            
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <DemoROICalculator />
          </TabsContent>
        </Tabs>
      </div>
    </div>;
};
export default NewDemoInterface;