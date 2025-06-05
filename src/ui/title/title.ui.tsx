import React from 'react';
import {Text} from 'react-native';
import styles from './title.styles';

type TitleProps = {
  children: string;
};

export const Title: React.FC<TitleProps> = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};
