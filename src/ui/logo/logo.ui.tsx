import {Image, View} from 'react-native';
import styles from './logo.styles';

import logo from '../../assets/logo.png';

export const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
    </View>
  );
};
