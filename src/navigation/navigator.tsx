import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  HomeScreen,
  LogInScreen,
  SighUpScreen,
  VerificationScreen,
} from '../screens';
import {NAVIGATION_KEYS} from '../types';

const Stack = createNativeStackNavigator();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION_KEYS.LOG_IN}>
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
        name={NAVIGATION_KEYS.VERIFICATION}
        component={VerificationScreen}
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
