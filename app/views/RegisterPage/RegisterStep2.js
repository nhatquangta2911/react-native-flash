/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

class RegisterStep2 extends Component {
  static navigationOptions = {
    title: 'Step 2',
    headerTitleStyle: styles.headerStyle
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      registerContainer,
      titleStyles,
      textStyles,
      secondaryTextStyle,
      commonButtonStyle,
      commonButtonTextStyle,
      logoutStyle
    } = styles;
    return (
      <View style={registerContainer}>
        <Text style={titleStyles}>Register Step 2</Text>
        <Text style={textStyles}>Update soon...</Text>
        <Button
          type="solid"
          title="Next Step"
          buttonStyle={commonButtonStyle}
          titleStyle={commonButtonTextStyle}
          title="Next"
          onPress={() => this.props.navigation.navigate('RegisterStep3')}
        />
      </View>
    );
  }
}

export default RegisterStep2;
