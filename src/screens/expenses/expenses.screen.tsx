import React from 'react';
import {View} from 'react-native';
import {AppContainer, Logo, TextButton} from '../../ui';
import {supabase} from '../../libs';
import {NAVIGATION_KEYS, ScreenProps} from '../../types';
import Toast from 'react-native-toast-message';

export const ExpensesScreen: React.FC<ScreenProps> = ({navigation}) => {
  const handleLogOut = async () => {
    const {error} = await supabase.auth.signOut();
    if (error) {
      console.error(error);
      return;
    }

    Toast.show({
      text1: 'Log Out succeseefully',
      type: 'success',
    });

    navigation.reset({
      index: 0,
      routes: [{name: NAVIGATION_KEYS.LOG_IN}],
    });
  };

  return (
    <AppContainer>
      <View style={{flex: 1}}>
        <Logo />
        <TextButton onPress={handleLogOut}>Log out</TextButton>
      </View>
    </AppContainer>
  );
};
