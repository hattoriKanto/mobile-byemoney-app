import {createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList, NAVIGATION_KEYS} from '../types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: NAVIGATION_KEYS, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
