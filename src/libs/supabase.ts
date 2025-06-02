import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
import {AppState} from 'react-native';
import {createClient, SupabaseClientOptions} from '@supabase/supabase-js';

const supabaseUrl = Config.SUPABASE_URL || '';
const supabaseKey = Config.SUPABASE_PUBLIC_KEY || '';

const options: SupabaseClientOptions<'public'> | undefined = {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
};

export const supabase = createClient(supabaseUrl, supabaseKey, options);

AppState.addEventListener('change', state => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
