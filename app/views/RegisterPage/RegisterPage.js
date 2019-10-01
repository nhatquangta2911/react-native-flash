/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
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
    const user = this.props.navigation.getParam('user', { name: 'Shawn' });
    return (
      <View style={registerContainer}>
        <Text style={titleStyles}>Register</Text>
        <Text style={textStyles}>Update soon...</Text>
        <Text style={textStyles}>{user && user.name}</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('RegisterStep1')}
        />
      </View>
    );
  }
}

export default RegisterPage;
