import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },

  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  title: {
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.DARK,
  },

  orderOption: {
    fontSize: 16,
    color: COLORS.DARK,
  },

  sortIconReversed: {
    transform: [{rotate: '180deg'}],
  },

  modalContainer: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    backgroundColor: COLORS.DARK,
    opacity: 0.4,
  },

  modalView: {
    margin: 20,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    padding: 20,
    width: '60%',
    alignItems: 'center',
    shadowColor: COLORS.DARK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 40,
  },

  modalContent: {
    gap: 10,
  },

  modalText: {
    fontWeight: 600,
    fontSize: 18,
    color: COLORS.DARK,
    textAlign: 'center',
  },
});

export default styles;
