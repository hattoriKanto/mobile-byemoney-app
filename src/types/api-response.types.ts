import {AuthError, PostgrestError} from '@supabase/supabase-js';

export type ApiResponse = {
  success: boolean;
  message?: string;
  error?: AuthError | PostgrestError | null;
};
