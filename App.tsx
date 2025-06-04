import React, {useEffect} from 'react';
import 'react-native-url-polyfill/auto';
import {NavigationContainer} from '@react-navigation/native';
import {Linking} from 'react-native';
import Toast from 'react-native-toast-message';
import {navigate, navigationRef, RootStack} from './src/navigation';
import {NAVIGATION_KEYS} from './src/types';
import {supabase} from './src/libs';
import {toastConfig} from './src/ui';

const App = () => {
  useEffect(() => {
    const handleDeepLink = async (event: {url: string}) => {
      const url = event.url;
      const parsed = new URL(url.replace('#', '?'));

      const access_token = parsed.searchParams.get('access_token');
      const refresh_token = parsed.searchParams.get('refresh_token');

      if (access_token && refresh_token) {
        const {data, error} = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (data.session) {
          navigate(NAVIGATION_KEYS.HOME);
        } else {
          console.error('Still no session', error);
        }
      } else {
        console.warn('No tokens found in deep link');
      }
    };

    const sub = Linking.addEventListener('url', handleDeepLink);

    Linking.getInitialURL().then(url => {
      if (url) handleDeepLink({url});
    });

    return () => sub.remove();
  }, []);

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <RootStack />
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  );
};

export default App;
