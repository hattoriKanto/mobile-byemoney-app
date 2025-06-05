import {supabase} from '../libs';
import {ApiResponse} from '../types';
import {CreateExpenseSchema} from '../validators';

export const createExpense = async (
  userId: string,
  expense: CreateExpenseSchema,
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
