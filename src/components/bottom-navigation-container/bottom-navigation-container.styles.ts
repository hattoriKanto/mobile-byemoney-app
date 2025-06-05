import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  contentContainer: {
    height: 80,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 20,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: COLORS.WHITE,
  },

  tabContainer: {
    padding: 10,
    width: 48,
    height: 48,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  activeTabContainer: {
    backgroundColor: 'transparent',
  },

  activeCreateTabContainer: {
    opacity: 0,
    userSelect: 'none',
  },

  createTabContainer: {
    transform: 'scale(1.3)',
    borderRadius: '100%',
    backgroundColor: COLORS.ORANGE,
  },

  svg: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
