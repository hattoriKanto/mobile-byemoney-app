import {supabase} from '../libs';
import {ApiResponse} from '../types';
import {LoginSchema} from '../validators';

export const handleUserLogIn = async (
  userData: LoginSchema,
): Promise<ApiResponse> => {
  const response = await supabase.auth.signInWithPassword({...userData});

  if (response.error) {
    return {success: false, response};
  }

  return {success: true, response};
};
