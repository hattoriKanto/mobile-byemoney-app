import React from 'react';
import {FieldError} from 'react-hook-form';
import {Text, View} from 'react-native';

import styles from './input.styles';

type InputErrorProps = {
  error?: FieldError;
};

export const InputError: React.FC<InputErrorProps> = ({error}) => {
  return (
    <View>
      <Text style={styles.errorText}>{error?.message || ' '}</Text>
    </View>
  );
};
