import {TOAST_MESSAGES} from '../constants';
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

  if (response.data && response.data.user) {
    if (
      response.data.user.identities &&
      response.data.user.identities.length > 0
    ) {
      return {success: true, message: TOAST_MESSAGES.signUp.success};
    } else {
      const signInResponse = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInResponse.error) {
        return {
          success: false,
          message: signInResponse.error.message,
          error: signInResponse.error,
        };
      } else {
        return {success: true, message: TOAST_MESSAGES.signIn.success};
      }
    }
  }

  return {
    success: false,
    message: response.error?.message,
    error: response.error,
  };
};
