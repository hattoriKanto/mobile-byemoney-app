import {View} from 'react-native';
import LoaderKit from 'react-native-loader-kit';
import {COLORS} from '../../constants';
import styles from './loader.styles';

export const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <LoaderKit
        style={styles.loader}
        name="BallZigZagDeflect"
        color={COLORS.ORANGE}
      />
    </View>
  );
};
