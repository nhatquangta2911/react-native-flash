/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Text, View } from 'react-native';

export class GreetingPage extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Text> Welcome </Text>
        <Button onPress={() => this.props.navigation.navigate('Login')}>Login</Button>
      </View>
    );
  }
}

export default GreetingPage;
