import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './button.styles';

type TextButtonProps = {
  children: React.ReactNode;
  onPress: (e?: React.BaseSyntheticEvent) => void;
};

export const TextButton: React.FC<TextButtonProps> = ({children, onPress}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}>
      <Text
        style={[styles.textButtonText, isPressed && styles.buttonTextActive]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
