/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles/base';

export default StyleSheet.create({
  item: {
    width: dimensions.fullWidth - 60,
    height: dimensions.fullWidth - 60
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover'
  }
});
