-- pgcrypto for bcrypt-style password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Demo customers table (server-only access; service role bypasses RLS)
CREATE TABLE public.demo_customers (
  id text PRIMARY KEY,
  username text NOT NULL UNIQUE,
  password_hash text NOT NULL,
  config jsonb NOT NULL,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.demo_customers ENABLE ROW LEVEL SECURITY;
-- No policies: only the service role (edge function) can read/write.

-- Demo sessions table (server-issued opaque tokens)
CREATE TABLE public.demo_sessions (
  token text PRIMARY KEY,
  customer_id text NOT NULL REFERENCES public.demo_customers(id) ON DELETE CASCADE,
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.demo_sessions ENABLE ROW LEVEL SECURITY;
-- No policies: only the service role manages sessions.

CREATE INDEX idx_demo_sessions_customer ON public.demo_sessions(customer_id);
CREATE INDEX idx_demo_sessions_expires ON public.demo_sessions(expires_at);

-- Seed the two existing customers with bcrypt-hashed passwords
INSERT INTO public.demo_customers (id, username, password_hash, config) VALUES
(
  'c3-marketing',
  'C3',
  crypt('KI2USE2026', gen_salt('bf', 10)),
  jsonb_build_object(
    'id', 'c3-marketing',
    'name', 'C3 Marketing Agentur',
    'chatbotWebhooks', jsonb_build_object(
      'support', 'https://n8n.srv929188.hstgr.cloud/webhook/295fef3d-10fd-43bb-95a2-de0cbd4512d1',
      'booking', 'https://n8n.srv929188.hstgr.cloud/webhook/placeholder-booking-chat'
    ),
    'voiceAgentIds', jsonb_build_object(
      'support', 'agent_9001k47yszvrfgb8xqy45xyhwcts',
      'booking', 'agent_placeholder_booking_voice'
    ),
    'contactFormWebhook', 'https://n8n.srv929188.hstgr.cloud/webhook/kontaktformular'
  )
),
(
  'surma-marketing',
  'Surma',
  crypt('KI2USE2026', gen_salt('bf', 10)),
  jsonb_build_object(
    'id', 'surma-marketing',
    'name', 'Surma Marketing Agentur',
    'chatbotWebhooks', jsonb_build_object(
      'support', 'https://n8n.srv929188.hstgr.cloud/webhook/00a1f4c2-eed6-4952-aee8-8fbeb90e8f17',
      'booking', 'https://n8n.srv929188.hstgr.cloud/webhook/placeholder-booking-chat'
    ),
    'voiceAgentIds', jsonb_build_object(
      'support', 'agent_7401k4mzx0nwfn3add3acghzk5wc',
      'booking', 'agent_placeholder_booking_voice'
    ),
    'contactFormWebhook', 'https://n8n.srv929188.hstgr.cloud/webhook/kontaktformular'
  )
);

-- Cleanup function for expired sessions
CREATE OR REPLACE FUNCTION public.cleanup_expired_demo_sessions()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  DELETE FROM public.demo_sessions WHERE expires_at < now();
$$;