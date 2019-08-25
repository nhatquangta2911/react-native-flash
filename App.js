/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Navigator, OfflineNotice, OnlineNotice } from './app/components';
import store from './app/store';

const App = () => (
  <StoreProvider store={store}>
    <PaperProvider settings={{ icon: props => <AwesomeIcon {...props} /> }}>
      <OfflineNotice />
      <Navigator />
      <OnlineNotice />
    </PaperProvider>
  </StoreProvider>
);

export default App;
