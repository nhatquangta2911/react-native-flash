import { StyleSheet } from 'react-native';
import { fonts, darkPalette, margin } from '../../styles/base';

export default StyleSheet.create({
  greetingContainer: {
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: margin.xl,
    marginBottom: margin.special
  },
  greetingText: {
    fontFamily: fonts.thin,
    fontSize: fonts.outputText,
    color: darkPalette.cyan
  },
  contentText: {
    fontFamily: fonts.thin,
    fontSize: fonts.md,
    marginBottom: margin.special
  }
});
