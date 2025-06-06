import React from 'react';
import {View} from 'react-native';
import Toast from 'react-native-toast-message';
import {AppContainer, MainButton, Title} from '../../ui';
import {logOut} from '../../api';
import {NAVIGATION_KEYS, ScreenProps} from '../../types';
import {TOAST_MESSAGES} from '../../constants';

export const ProfileScreen: React.FC<ScreenProps> = ({navigation}) => {
  const handleLogOut = async () => {
    const {success, message} = await logOut();

    if (success) {
      Toast.show({
        text1: TOAST_MESSAGES.logOut.success,
        type: 'success',
      });
      navigation.reset({
        index: 0,
        routes: [{name: NAVIGATION_KEYS.LOG_IN}],
      });
    } else {
      Toast.show({
        text1: message,
        type: 'error',
      });
    }
  };

  return (
    <AppContainer>
      <View style={{flex: 1}}>
        <Title>Profile</Title>
      </View>
      <View>
        <MainButton onPress={handleLogOut}>Log out</MainButton>
      </View>
    </AppContainer>
  );
};
