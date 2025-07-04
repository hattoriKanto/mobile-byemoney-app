import {supabase} from '../libs';
import {ApiResponse} from '../types';
import {EditExpenseSchema} from '../validators';

export const createExpense = async (
  userId: string,
  expense: EditExpenseSchema,
): Promise<ApiResponse> => {
  const result = await supabase.from('expenses').insert([
    {
      ...expense,
      user_id: userId,
    },
  ]);

  if (result.error) {
    return {success: false, error: result.error, message: result.error.message};
  }

  return {success: true};
};
