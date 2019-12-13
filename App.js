/* eslint-disable import/imports-first */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from "react";
import {
  Easing,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert
} from "react-native";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { ModalProvider, createModalStack } from "react-native-modalfy";
import firebase from "react-native-firebase";
import { OfflineNotice, ErrorModal } from "./app/components";
import store from "./app/store";
import { fonts } from "./app/styles/base";
import AppNavigator from "./AppNavigator";
import PushController from "./app/utils/notification/PushController";
import NavigationService from "./NavigationService";
import { createStackNavigator } from "react-navigation";

const theme = {
  ...DefaultTheme,
  roundness: 3,
  fonts: {
    regular: fonts.regular,
    medium: fonts.medium,
    light: fonts.light,
    thin: fonts.thin
  }
};

export default class App extends PureComponent {
  async componentDidMount() {
    const token = await firebase.messaging().getToken();
    console.log(token);
    this.checkPermission();
    this.createNotificationListeners();
    this.messageListener = firebase
      .messaging()
      .onMessage(message => console.log(message));
  }
  async componentWillUnmount() {
    this.messageListener();
    this.notificationListener();
    this.notificationOpenedListener();
  }
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      console.log("User has permission");
    } else {
      try {
        await firebase.messaging().requestPermission();
      } catch (error) {
        console.log("User don't have permission");
      }
    }
  }

  async createNotificationListeners() {
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        const { title, body, data } = notification;
        console.log(NavigationService.getCurrentRoute());
      });
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { title, body } = notificationOpen.notification;
        NavigationService.navigate("Stats");
        this.showAlert(title + "2", body);
      });
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const { title, body, data } = notificationOpen.notification;
      NavigationService.navigate("Stats");

      //TODO: Deep Navigation
      // NavigationService.navigate("Browsing", {
      //   action: NavigationService.navigate("Details")
      // });
    }
    this.messageListener = firebase.messaging().onMessage(message => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }

  showAlert(title, body) {
    Alert.alert(
      title,
      body,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }

  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <AppNavigator
            ref={navigatorRef =>
              NavigationService.setTopLevelNavigator(navigatorRef)
            }
          />
          <OfflineNotice />
        </PaperProvider>
        <PushController />
      </StoreProvider>
    );
  }
}
