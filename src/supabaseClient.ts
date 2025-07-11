// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jciuscvxrmxxjnxultnn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjaXVzY3Z4cm14eGpueHVsdG5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1Nzc1NTksImV4cCI6MjA2NzE1MzU1OX0.QB5BsKKFafSF_a9IsBa-aiydNSSkthhroWM7WL_J77U'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
