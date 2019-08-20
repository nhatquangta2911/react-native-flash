/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Header } from '../../components';

export default class LoginPage extends Component {
  render() {
    const { loginPageContainer, logo } = styles;
    return (
      <Fragment>
        <View style={loginPageContainer}>
          <View style={logo}>
            <Text> SRecord </Text>
          </View>
        </View>
      </Fragment>
    );
  }
}
