import {PostgrestSingleResponse} from '@supabase/supabase-js';
import {supabase} from '../libs';
import {ExpenseEntity, SortableExpenseColumns} from '../types';

export const getExpensesByUserId = async (
  userId: string,
  column: SortableExpenseColumns = 'date',
  isAscending = false,
): Promise<PostgrestSingleResponse<ExpenseEntity[]>> => {
  const result = await supabase
    .from('expenses')
    .select('id, user_id, title, amount, category, date')
    .eq('user_id', userId)
    .order(column, {ascending: isAscending});
  return result;
};
