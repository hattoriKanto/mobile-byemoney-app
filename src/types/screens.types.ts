import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum NAVIGATION_KEYS {
  LOG_IN = 'Log In',
  SIGN_UP = 'Sign Up',
  HOME = 'Home',
  VERIFICATION = 'Verification',
}

type RootStackParamList = {
  [NAVIGATION_KEYS.LOG_IN]: undefined;
  [NAVIGATION_KEYS.SIGN_UP]: undefined;
  [NAVIGATION_KEYS.HOME]: undefined;
  [NAVIGATION_KEYS.VERIFICATION]: undefined;
};

export type ScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};
