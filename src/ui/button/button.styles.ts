import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  button: {
    padding: 12,
    width: '100%',

    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.ORANGE,
    backgroundColor: COLORS.ORANGE,
  },

  buttonActive: {
    backgroundColor: 'transparent',
    opacity: 1,
  },

  buttonText: {
    color: COLORS.WHITE,
    fontWeight: 600,
    fontSize: 16,
  },

  textButtonText: {
    color: COLORS.ORANGE,
    fontWeight: 800,
    fontSize: 16,
  },

  buttonTextActive: {
    color: COLORS.DARK,
  },
});

export default styles;
