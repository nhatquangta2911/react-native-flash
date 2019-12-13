/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Alert } from "react-native";
import { withNavigation } from "react-navigation";
import PushNotification from "react-native-push-notification";

class PushController extends Component {
  componentDidMount() {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister(token) {
        console.log("TOKEN:", token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification(notification) {
        Alert.alert(notification.salute);
      },
      // Android only
      senderID: "116963018082",
      popInitialNotification: true,
      requestPermissions: true
    });
  }

  //   PushNotification.localNotification({
  //     /* Android Only Properties */
  //     id: "0",
  //     ticker: "My Notification Ticker", // (optional)
  //     autoCancel: true, // (optional) default: true
  //     largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
  //     smallIcon: "ic_notification",
  //     bigText: "My big text that will be shown when notification is expanded",
  //     subText: "This is a subText", // (optional) default: none
  //     color: "red", // (optional) default: system default
  //     vibrate: true, // (optional) default: true
  //     vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
  //     tag: "some_tag", // (optional) add tag to message
  //     group: "group", // (optional) add group to message
  //     ongoing: false, // (optional) set whether this is an "ongoing" notification
  //     priority: "high", // (optional) set notification priority, default: high
  //     visibility: "private", // (optional) set notification visibility, default: private
  //     importance: "high" // (optional) set notification importance, default: high
  //   });

  //   PushNotification.localNotificationSchedule({
  //     message: "Recuring",
  //     largeIcon:
  //       "https://developers.google.com/site-assets/developers_64dp_72.png",

  //     // eslint-disable-next-line no-mixed-operators
  //     date: new Date(Date.now() + 5 * 1000),
  //     color: "yellow",
  //     bigText: "Sucks!",
  //     subText: "Life sucks!",
  //     ticker: "https://developers.google.com/site-assets/developers_64dp_72.png"
  //   });
  // }

  render() {
    return null;
  }
}

export default PushController;
