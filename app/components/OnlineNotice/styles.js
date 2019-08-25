import { StyleSheet, Dimensions } from 'react-native';
import { fonts, notification } from '../../styles/base';

export default StyleSheet.create({
  onlineContainer: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    backgroundColor: notification.success
  },
  onlineText: {
    color: notification.white,
    fontFamily: fonts.regular
  }
});
