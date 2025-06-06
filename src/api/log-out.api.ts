import {supabase} from '../libs';
import {ApiResponse} from '../types';

export const logOut = async (): Promise<ApiResponse> => {
  const {error} = await supabase.auth.signOut();

  if (error) {
    return {success: false, error, message: error.message};
  }

  return {success: true};
};
