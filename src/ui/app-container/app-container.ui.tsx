import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './app-container.styles';

type AppContainerProps = {
  children: React.ReactNode;
};

export const AppContainer: React.FC<AppContainerProps> = ({children}) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.appContainer}
      alwaysBounceVertical={false}
      bounces={false}
      overScrollMode="never">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};
