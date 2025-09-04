import { useState, useCallback } from 'react';

export interface CustomerConfig {
  id: string;
  name: string;
  chatbotWebhooks: {
    support: string;
    booking: string;
  };
  voiceAgentIds: {
    support: string;
    booking: string;
  };
  contactFormWebhook: string;
}

const customerConfigs: CustomerConfig[] = [
  {
    id: 'c3-marketing',
    name: 'C3 Marketing Agentur',
    chatbotWebhooks: {
      support: 'https://n8n.srv929188.hstgr.cloud/webhook/295fef3d-10fd-43bb-95a2-de0cbd4512d1',
      booking: 'https://n8n.srv929188.hstgr.cloud/webhook/placeholder-booking-chat'
    },
    voiceAgentIds: {
      support: 'agent_9001k47yszvrfgb8xqy45xyhwcts',
      booking: 'agent_placeholder_booking_voice'
    },
    contactFormWebhook: 'https://n8n.srv929188.hstgr.cloud/webhook/kontaktformular'
  }
];

export const useDemoCustomer = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerConfig>(customerConfigs[0]);

  const selectCustomer = useCallback((customerId: string) => {
    const customer = customerConfigs.find(c => c.id === customerId);
    if (customer) {
      setSelectedCustomer(customer);
    }
  }, []);

  const addCustomer = useCallback((customer: CustomerConfig) => {
    const existingIndex = customerConfigs.findIndex(c => c.id === customer.id);
    if (existingIndex >= 0) {
      customerConfigs[existingIndex] = customer;
    } else {
      customerConfigs.push(customer);
    }
  }, []);

  return {
    customers: customerConfigs,
    selectedCustomer,
    selectCustomer,
    addCustomer
  };
};