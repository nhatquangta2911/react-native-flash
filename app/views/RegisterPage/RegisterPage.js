/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class RegisterPage extends Component {
  static navigationOptions = {
    title: 'Register',
    headerTitleStyle: styles.headerStyle
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { registerContainer, titleStyles, textStyles } = styles;
    return (
      <View style={registerContainer}>
        <Text style={titleStyles}>Register</Text>
        <Text style={textStyles}>Update soon...</Text>
      </View>
    );
  }
}

export default RegisterPage;
