import {supabase} from '../libs';
import {ApiResponse} from '../types';
import {SignUpSchema} from '../validators';

export const handleUserSignUp = async ({
  email,
  password,
}: SignUpSchema): Promise<ApiResponse> => {
  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: 'byemoney://login-callback',
    },
  });

  if (response.error) {
    return {success: false, response};
  }

  return {success: true, response};
};
