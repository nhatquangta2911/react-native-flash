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

import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { OfflineNotice } from './app/components';
import store from './app/store';
import { fonts } from './app/styles/base';
import AppNavigator from './AppNavigator';
import PushController from './app/utils/notification/PushController';

const App = () => (
  <StoreProvider store={store}>
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
    <OfflineNotice />
    <PushController />
  </StoreProvider>
);

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

export default App;
