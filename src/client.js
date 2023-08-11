import { createClient } from '@supabase/supabase-js';
const URL = 'https://acejsihsqgnijfulnrad.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjZWpzaWhzcWduaWpmdWxucmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2NTQ4MDMsImV4cCI6MjAwNjIzMDgwM30.H9eve53YOiaBfQ_lBD7m8jt-wmIoSF9_ev8rJUJ_UYk';
export const supabase = createClient(URL, API_KEY);