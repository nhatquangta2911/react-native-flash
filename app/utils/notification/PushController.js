/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';

export default class PushController extends Component {
  componentDidMount() {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister(token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification(notification) {
        console.log('NOTIFICATION:', notification);

        // process the notification here
      },
      // Android only
      senderID: '116963018082',
      popInitialNotification: true,
      requestPermissions: true
    });
  }

  render() {
    return null;
  }
}
