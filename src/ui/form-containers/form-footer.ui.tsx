import React from 'react';
import {View} from 'react-native';
import styles from './form-containers.styles';

type FormFooterProps = {
  children: React.ReactNode;
};

export const FormFooter: React.FC<FormFooterProps> = ({children}) => {
  return <View style={styles.footer}>{children}</View>;
};
