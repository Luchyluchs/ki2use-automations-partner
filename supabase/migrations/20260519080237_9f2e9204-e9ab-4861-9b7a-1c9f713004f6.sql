CREATE OR REPLACE FUNCTION public.verify_demo_password(_plain text, _hash text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, extensions
AS $$
  SELECT crypt(_plain, _hash) = _hash;
$$;

REVOKE EXECUTE ON FUNCTION public.verify_demo_password(text, text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.verify_demo_password(text, text) TO service_role;