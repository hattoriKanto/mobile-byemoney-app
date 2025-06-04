import {AuthError} from '@supabase/supabase-js';

export type ApiResponse = {
  success: boolean;
  message?: string;
  error?: AuthError | null;
};
