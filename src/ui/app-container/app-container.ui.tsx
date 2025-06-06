import React from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './app-container.styles';

type AppContainerProps = {
  children: React.ReactNode;
  hasKeyboard?: boolean;
};

export const AppContainer: React.FC<AppContainerProps> = ({
  children,
  hasKeyboard,
}) => {
  return (
    <>
      {!hasKeyboard ? (
        <View style={styles.appContainer}>{children}</View>
      ) : (
        <KeyboardAwareScrollView
          contentContainerStyle={styles.appContainer}
          alwaysBounceVertical={false}
          bounces={false}
          overScrollMode="never">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      )}
    </>
  );
};
