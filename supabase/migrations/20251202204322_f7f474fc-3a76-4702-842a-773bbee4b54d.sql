-- Add RLS policy for kv_store_050eebdd table (admin only access)
CREATE POLICY "Admin only access" ON public.kv_store_050eebdd
FOR ALL USING (has_role(auth.uid(), 'admin'));