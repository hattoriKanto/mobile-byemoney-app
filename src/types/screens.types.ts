import {ExpenseEntity} from './expense.types';

export enum NAVIGATION_KEYS {
  LOG_IN = 'Log In',
  SIGN_UP = 'Sign Up',
  EXPENSES = 'Expenses',
  PROFILE = 'Profile',
  EDIT_EXPENSE = 'Edit Expense',
  BOTTOM_TABS = 'Bottom Tabs',
}

type EditExpenseProps = {
  expense: ExpenseEntity;
};

export type RootStackParamList = {
  [NAVIGATION_KEYS.LOG_IN]: undefined;
  [NAVIGATION_KEYS.SIGN_UP]: undefined;
  [NAVIGATION_KEYS.EXPENSES]: undefined;
  [NAVIGATION_KEYS.PROFILE]: undefined;
  [NAVIGATION_KEYS.EDIT_EXPENSE]: EditExpenseProps | undefined;
  [NAVIGATION_KEYS.BOTTOM_TABS]: undefined;
};
