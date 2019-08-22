/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { LoginPage, OrderPage, DemoReduxPage } from './app/views';
import { Provider } from 'react-redux';
import store from './app/store';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <DemoReduxPage />
    </Fragment>
  </Provider>
);

export default App;
