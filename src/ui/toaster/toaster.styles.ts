import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  toast: {
    backgroundColor: COLORS.WHITE,
    borderRightColor: COLORS.YELLOW,
    borderBottomColor: COLORS.YELLOW,
    borderTopColor: COLORS.YELLOW,
    borderWidth: 1,
  },

  toastSuccess: {
    borderLeftColor: COLORS.GREEN,
  },

  toastError: {
    borderLeftColor: COLORS.RED,
  },

  text: {
    fontSize: 16,
    color: COLORS.DARK,
  },
});

export default styles;
