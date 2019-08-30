import { StyleSheet } from 'react-native';
import { fonts, darkPalette, dimensions } from '../../styles/base';

export default StyleSheet.create({
  containerStyles: {
    flex: 1,
    width: '100%',
    padding: 14,
    justifyContent: 'center',
    height: dimensions.containerHeight
  },
  textOutputStyles: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonGroupStyles: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  tokenText: {
    fontFamily: fonts.regular,
    fontSize: fonts.sm,
    backgroundColor: darkPalette.darkOrange,
    color: darkPalette.white,
    width: 100,
    textAlign: 'center',
    paddingVertical: 2,
    borderRadius: 5
  }
});
