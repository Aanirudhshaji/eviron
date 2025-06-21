import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pifhdnqcfspdshcwksaf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZmhkbnFjZnNwZHNoY3drc2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNjA3NzgsImV4cCI6MjA2NTgzNjc3OH0.RoA0oBCQGxhBY18FziTiVjILU878ypQH6ApFCO9Qj3k'; // from API settings

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
