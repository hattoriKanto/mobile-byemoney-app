import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 20,
    flex: 1,
  },

  listContainer: {
    gap: 15,
  },

  notFoundText: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.DARK,
  },
});

export default styles;
