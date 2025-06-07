import {supabase} from '../libs';
import {ApiResponse} from '../types';
import {EditExpenseSchema} from '../validators';

export const updateExpense = async (
  userId: string,
  expenseId: string,
  newExpenseData: EditExpenseSchema,
): Promise<ApiResponse> => {
  const result = await supabase
    .from('expenses')
    .update(newExpenseData)
    .eq('id', expenseId)
    .eq('user_id', userId);

  if (result.error) {
    return {success: false, error: result.error, message: result.error.message};
  }

  return {success: true};
};
