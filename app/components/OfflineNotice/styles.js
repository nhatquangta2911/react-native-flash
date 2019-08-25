import { StyleSheet, Dimensions } from 'react-native';
import { fonts, notification } from '../../styles/base';

export default StyleSheet.create({
  offlineContainer: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    backgroundColor: notification.danger
  },
  offlineText: {
    color: notification.white,
    fontFamily: fonts.regular
  }
});
