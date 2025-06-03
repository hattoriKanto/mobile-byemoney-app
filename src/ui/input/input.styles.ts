import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  errorText: {
    color: COLORS.RED,
    fontWeight: 500,
  },

  svg: {
    width: 12,
    height: 12,
    color: COLORS.ORANGE,
  },

  inputLabel: {
    marginBottom: 10,

    fontSize: 18,
    fontWeight: 700,
    color: COLORS.DARK,
  },

  passwordContainer: {
    height: 56,
    width: '100%',
    paddingRight: 10,
    marginBottom: 6,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.GREY,
  },

  passwordInput: {
    padding: 10,
    flex: 1,
    height: '100%',

    fontSize: 16,
  },

  input: {
    padding: 10,
    marginBottom: 6,
    height: 56,
    width: '100%',

    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.GREY,

    fontSize: 16,
  },

  inputActive: {
    borderColor: COLORS.YELLOW,
  },

  errorInput: {
    borderColor: COLORS.RED,
  },
});

export default styles;
