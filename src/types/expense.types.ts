export type ExpenseEntity = {
  id: string;
  user_id: string;
  title: string;
  amount: string;
  category: string;
  date: string;
};

export type SortableExpenseColumns = Extract<
  keyof ExpenseEntity,
  'date' | 'amount' | 'title' | 'category'
>;
