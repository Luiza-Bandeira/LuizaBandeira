// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wneyebotzmljfjgromqw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduZXllYm90em1samZqZ3JvbXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNDg0NTEsImV4cCI6MjA2MjcyNDQ1MX0.6HhmDioF9SP4SRr-UYgptTgUAsrLguNXUQCOnOVL0rI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);