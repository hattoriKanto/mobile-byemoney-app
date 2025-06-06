import {supabase} from '../libs';
import {ApiResponse} from '../types';

export const getValidUser = async (): Promise<ApiResponse> => {
  const {
    data: {user},
    error,
  } = await supabase.auth.getUser();

  if (!user || error) {
    return {success: false, error, message: error?.message};
  }

  return {success: true, data: user};
};
