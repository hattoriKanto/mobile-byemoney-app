import React from 'react';
import {View} from 'react-native';
import styles from './form-containers.styles';

type FormHeaderProps = {
  children: React.ReactNode;
};

export const FormHeader: React.FC<FormHeaderProps> = ({children}) => {
  return <View style={styles.header}>{children}</View>;
};
