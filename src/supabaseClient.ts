import { createClient } from '@supabase/supabase-js'

// WILL BE USE .ENV LATER!
const supabaseUrl: string = import.meta.env.VITE_SUPBASE_URL
const supabaseKey: string = import.meta.env.VITE_SUPBASE_KEY

const SUPABASE = createClient(supabaseUrl, supabaseKey)

export default SUPABASE