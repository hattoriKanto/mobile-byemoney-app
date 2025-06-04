import {AuthResponse, AuthTokenResponsePassword} from '@supabase/supabase-js';

export type ApiResponse = {
  success: boolean;
  response: AuthTokenResponsePassword | AuthResponse;
};
