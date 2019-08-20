import { StyleSheet } from 'react-native';
import { padding, dimensions } from '../../styles/base';

export default StyleSheet.create({
  orderPageContainer: {
    marginHorizontal: padding.md,
    marginVertical: padding.sm,
    height: dimensions.fullHeight - dimensions.headerHeight
  }
});
