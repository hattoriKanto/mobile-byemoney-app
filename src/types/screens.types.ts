import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum NAVIGATION_KEYS {
  LOG_IN = 'Log In',
  SIGN_UP = 'Sign Up',
  EXPENSES = 'Expenses',
  PROFILE = 'Profile',
  CREATE_EXPENSE = 'Create Expense',
  BOTTOM_TABS = 'Bottom Tabs',
}

export type RootStackParamList = {
  [NAVIGATION_KEYS.LOG_IN]: undefined;
  [NAVIGATION_KEYS.SIGN_UP]: undefined;
  [NAVIGATION_KEYS.EXPENSES]: undefined;
  [NAVIGATION_KEYS.PROFILE]: undefined;
  [NAVIGATION_KEYS.CREATE_EXPENSE]: undefined;
  [NAVIGATION_KEYS.BOTTOM_TABS]: undefined;
};

export type ScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};
