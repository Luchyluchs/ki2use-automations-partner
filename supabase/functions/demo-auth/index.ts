import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const SESSION_DURATION_MS = 30 * 60 * 1000 // 30 minutes

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('')
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json().catch(() => ({}))
    const action = body?.action

    // -------- LOGIN --------
    if (action === 'login') {
      const username = typeof body.username === 'string' ? body.username.trim() : ''
      const password = typeof body.password === 'string' ? body.password : ''

      if (!username || !password || username.length > 100 || password.length > 200) {
        return jsonResponse({ error: 'invalid_credentials' }, 400)
      }

      // Use pgcrypto's crypt() to verify bcrypt hash
      const { data: matches, error: rpcError } = await supabase
        .from('demo_customers')
        .select('id, config, password_hash, is_active')
        .eq('username', username)
        .eq('is_active', true)
        .limit(1)

      if (rpcError) {
        console.error('lookup error')
        return jsonResponse({ error: 'server_error' }, 500)
      }

      const customer = matches?.[0]
      if (!customer) {
        return jsonResponse({ error: 'invalid_credentials' }, 401)
      }

      // Verify password by calling a tiny SQL: SELECT crypt($1, $2) = $2
      const { data: verifyRows, error: verifyErr } = await supabase.rpc('verify_demo_password', {
        _plain: password,
        _hash: customer.password_hash,
      }).single()

      // Fallback: if RPC not present, do it inline via a SELECT through pg-meta? We require the RPC.
      if (verifyErr || verifyRows !== true) {
        return jsonResponse({ error: 'invalid_credentials' }, 401)
      }

      const token = generateToken()
      const expiresAt = new Date(Date.now() + SESSION_DURATION_MS).toISOString()

      const { error: insertErr } = await supabase.from('demo_sessions').insert({
        token,
        customer_id: customer.id,
        expires_at: expiresAt,
      })
      if (insertErr) {
        console.error('session insert error')
        return jsonResponse({ error: 'server_error' }, 500)
      }

      // Best-effort cleanup of expired sessions
      try { await supabase.rpc('cleanup_expired_demo_sessions'); } catch { /* ignore */ }

      return jsonResponse({ token, customer: customer.config, expiresAt })
    }

    // -------- VERIFY --------
    if (action === 'verify') {
      const token = typeof body.token === 'string' ? body.token : ''
      if (!token || token.length !== 64) {
        return jsonResponse({ error: 'invalid_token' }, 401)
      }

      const { data: session, error } = await supabase
        .from('demo_sessions')
        .select('customer_id, expires_at, demo_customers(config, is_active)')
        .eq('token', token)
        .maybeSingle()

      if (error || !session) {
        return jsonResponse({ error: 'invalid_token' }, 401)
      }
      if (new Date(session.expires_at).getTime() < Date.now()) {
        await supabase.from('demo_sessions').delete().eq('token', token)
        return jsonResponse({ error: 'expired' }, 401)
      }
      const cust = (session as any).demo_customers
      if (!cust?.is_active) {
        return jsonResponse({ error: 'inactive' }, 401)
      }

      return jsonResponse({ customer: cust.config, expiresAt: session.expires_at })
    }

    // -------- LOGOUT --------
    if (action === 'logout') {
      const token = typeof body.token === 'string' ? body.token : ''
      if (token) {
        await supabase.from('demo_sessions').delete().eq('token', token)
      }
      return jsonResponse({ ok: true })
    }

    return jsonResponse({ error: 'unknown_action' }, 400)
  } catch (e) {
    console.error('unexpected', e)
    return jsonResponse({ error: 'server_error' }, 500)
  }
})
