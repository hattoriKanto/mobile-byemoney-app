import {create} from 'zustand';
import {ExpenseEntity, SortableExpenseColumns} from '../types';

type ExpensesStore = {
  expenses: ExpenseEntity[];
  orderBy: SortableExpenseColumns;
  isAscending: boolean;
  setExpenses: (newExpenses: ExpenseEntity[]) => void;
  setIsAscending: (flag: boolean) => void;
  setOrderBy: (orderOption: SortableExpenseColumns) => void;
};

export const useExpensesStore = create<ExpensesStore>()(set => ({
  expenses: [],
  orderBy: 'date',
  isAscending: false,

  setExpenses: newExpenses => set({expenses: newExpenses}),
  setIsAscending: flag => set({isAscending: flag}),
  setOrderBy: orderOption => set({orderBy: orderOption}),
}));
