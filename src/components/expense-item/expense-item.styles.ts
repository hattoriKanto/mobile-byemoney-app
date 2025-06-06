import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  itemContainer: {
    height: 140,
    padding: 10,

    justifyContent: 'space-between',
    flexDirection: 'row',

    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.GREY,
  },

  itemContent: {
    flex: 1,
    justifyContent: 'space-between',
  },

  itemTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  itemTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: COLORS.DARK,
  },

  itemTextBold: {
    fontWeight: 500,
    color: COLORS.DARK,
  },

  itemButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemButton: {
    padding: 10,

    width: 48,
    height: 48,
  },
});

export default styles;
