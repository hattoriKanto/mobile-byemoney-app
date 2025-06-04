import {useEffect, useState} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {HomeScreen, LoadingScreen, LogInScreen, SighUpScreen} from '../screens';
import {NAVIGATION_KEYS} from '../types';
import {supabase} from '../libs';

const Stack = createNativeStackNavigator();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

export const RootStack = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

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
    ? NAVIGATION_KEYS.HOME
    : NAVIGATION_KEYS.LOG_IN;

  if (isAuth === null) {
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
        name={NAVIGATION_KEYS.HOME}
        component={HomeScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};
