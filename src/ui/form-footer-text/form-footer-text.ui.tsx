import {View, Text} from 'react-native';
import React from 'react';
import {TextButton} from '..';
import styles from './form-footer-text.styles';

type FormFooterTextProps = {
  text: string;
  buttonText: string;
  handler: () => void;
};

export const FormFooterText: React.FC<FormFooterTextProps> = ({
  text,
  buttonText,
  handler,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextButton onPress={handler}>{buttonText}</TextButton>
    </View>
  );
};
