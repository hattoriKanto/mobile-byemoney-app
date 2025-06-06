import {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CreateExpenseScreen,
  ExpensesScreen,
  LoadingScreen,
  LogInScreen,
  ProfileScreen,
  SighUpScreen,
} from '../screens';
import {NAVIGATION_KEYS} from '../types';
import {supabase} from '../libs';
import {BottomNavigationContainer} from '../components';
import {useAuthStore} from '../stores';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const options = {
  headerShown: false,
};

const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION_KEYS.EXPENSES}
      tabBar={props => <BottomNavigationContainer {...props} />}>
      <Tab.Screen
        name={NAVIGATION_KEYS.EXPENSES}
        component={ExpensesScreen}
        options={options}
      />
      <Tab.Screen
        name={NAVIGATION_KEYS.CREATE_EXPENSE}
        component={CreateExpenseScreen}
        options={options}
      />
      <Tab.Screen
        name={NAVIGATION_KEYS.PROFILE}
        component={ProfileScreen}
        options={options}
      />
    </Tab.Navigator>
  );
};

export const RootStack = () => {
  const {isAuth, setIsAuth} = useAuthStore();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: {session},
      } = await supabase.auth.getSession();
      setIsAuth(!!session);
    };

    checkSession();
  }, []);

  const initialRouteName = isAuth
    ? NAVIGATION_KEYS.BOTTOM_TABS
    : NAVIGATION_KEYS.LOG_IN;

  if (!isAuth) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name={NAVIGATION_KEYS.LOG_IN}
        component={LogInScreen}
        options={options}
      />
      <Stack.Screen
        name={NAVIGATION_KEYS.SIGN_UP}
        component={SighUpScreen}
        options={options}
      />
      <Stack.Screen
        name={NAVIGATION_KEYS.BOTTOM_TABS}
        component={BottomStack}
        options={options}
      />
    </Stack.Navigator>
  );
};
