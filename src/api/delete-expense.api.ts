import {supabase} from '../libs';
import {ApiResponse} from '../types';

export const deleteExpense = async (
  userId: string,
  expenseId: string,
): Promise<ApiResponse> => {
  const {error} = await supabase
    .from('expenses')
    .delete()
    .match({user_id: userId, id: expenseId});

  if (error) {
    return {
      success: false,
      error,
      message: error.message,
    };
  }

  return {success: true};
};
