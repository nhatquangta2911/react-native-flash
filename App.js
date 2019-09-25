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

import React, { PureComponent } from 'react';
import { Easing, Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { ModalProvider, createModalStack } from 'react-native-modalfy';
import { OfflineNotice, ErrorModal } from './app/components';
import store from './app/store';
import { fonts } from './app/styles/base';
import AppNavigator from './AppNavigator';
import PushController from './app/utils/notification/PushController';

// const modalConfig = {
//   ErrorModal
// };
// const defaultOptions = { backdropOpacity: 0.6 };
// const stack = createModalStack(modalConfig);

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

// const { width } = Dimensions.get('screen');

// const config = { ErrorModal };

// const defaultOptions = {
//   animateInConfig: {
//     easing: Easing.bezier(0.42, -0.03, 0.27, 0.95),
//     duration: 450
//   },
//   animateOutConfig: {
//     easing: Easing.bezier(0.42, -0.03, 0.27, 0.95),
//     duration: 450
//   },
//   transitionOptions: animatedValue => ({
//     opacity: animatedValue.interpolate({
//       inputRange: [0, 1, 2],
//       outputRange: [0, 1, 0.9]
//     }),
//     transform: [
//       { perspective: 2000 },
//       {
//         translateX: animatedValue.interpolate({
//           inputRange: [0, 1, 2],
//           outputRange: [-width / 2, 0, width / 2]
//         })
//       },
//       {
//         rotateY: animatedValue.interpolate({
//           inputRange: [0, 1, 2],
//           outputRange: ['90deg', '0deg', '-90deg']
//         })
//       },
//       {
//         scale: animatedValue.interpolate({
//           inputRange: [0, 1, 2],
//           outputRange: [1.2, 1, 0.9]
//         })
//       }
//     ]
//   })
// };

// const stack = createModalStack(config, defaultOptions);

export default class App extends PureComponent {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <AppNavigator />
          <OfflineNotice />
        </PaperProvider>
        <PushController />
      </StoreProvider>
    );
  }
}
