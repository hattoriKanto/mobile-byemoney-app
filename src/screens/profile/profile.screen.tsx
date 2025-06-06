import React from 'react';
import {View} from 'react-native';
import {AppContainer, MainButton, Title} from '../../ui';
import {logOut} from '../../api';
import {NAVIGATION_KEYS, ScreenProps} from '../../types';
import {TOAST_MESSAGES} from '../../constants';
import {showToast} from '../../utils';

export const ProfileScreen: React.FC<ScreenProps> = ({navigation}) => {
  const handleLogOut = async () => {
    const {success, error} = await logOut();

    if (!success && error) {
      showToast('error', error.message);
      return;
    }

    showToast('success', TOAST_MESSAGES.logOut.success);
    navigation.reset({
      index: 0,
      routes: [{name: NAVIGATION_KEYS.LOG_IN}],
    });
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
