-- First, get the current authenticated user and insert them as admin
-- This bypasses RLS using a security definer function

CREATE OR REPLACE FUNCTION public.make_first_admin()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  first_user_id uuid;
BEGIN
  -- Get the first user from auth.users
  SELECT id INTO first_user_id
  FROM auth.users
  ORDER BY created_at
  LIMIT 1;
  
  -- Insert admin role if user exists
  IF first_user_id IS NOT NULL THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (first_user_id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
END;
$$;

-- Execute the function to create the first admin
SELECT public.make_first_admin();

-- Drop the function as it's no longer needed
DROP FUNCTION public.make_first_admin();