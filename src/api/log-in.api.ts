import {TOAST_MESSAGES} from '../constants';
import {supabase} from '../libs';
import {ApiResponse} from '../types';
import {LoginSchema} from '../validators';

export const handleUserLogIn = async (
  userData: LoginSchema,
): Promise<ApiResponse> => {
  const response = await supabase.auth.signInWithPassword({...userData});

  if (response.error) {
    return {
      success: false,
      message: response.error.message,
      error: response.error,
    };
  }

  return {success: true, message: TOAST_MESSAGES.logIn.success};
};
