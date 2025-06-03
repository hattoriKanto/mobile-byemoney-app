import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './button.styles';

type MainButtonProps = {
  children: React.ReactNode;
  onPress: (e?: React.BaseSyntheticEvent) => Promise<void>;
};

export const MainButton: React.FC<MainButtonProps> = ({children, onPress}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={[styles.button, isPressed && styles.buttonActive]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}>
      <Text style={[styles.buttonText, isPressed && styles.buttonTextActive]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
