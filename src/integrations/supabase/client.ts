// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xkkuuckikhoavbkiaogd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhra3V1Y2tpa2hvYXZia2lhb2dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NjUwNzcsImV4cCI6MjA1NjA0MTA3N30.qtkmz0NatTwAjTP6QChqiHaxRtY9Ub4HjtpQGEd3e78";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);