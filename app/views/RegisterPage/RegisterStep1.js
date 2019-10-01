/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

class RegisterStep1 extends Component {
  static navigationOptions = {
    title: 'Step 1',
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
        <Text style={titleStyles}>Register Step 1</Text>
        <Text style={textStyles}>Update soon...</Text>
        <Button title="Next" onPress={() => this.props.navigation.navigate('RegisterStep2')} />
      </View>
    );
  }
}

export default RegisterStep1;
