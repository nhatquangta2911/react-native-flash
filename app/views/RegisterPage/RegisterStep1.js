/* eslint-disable no-unused-vars */
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
    const {
      registerContainer,
      titleStyles,
      textStyles,
      secondaryTextStyle,
      commonButtonStyle,
      commonButtonTextStyle,
      logoutStyle
    } = styles;
    const physicalProfile = this.props.navigation.getParam('physicalProfile', {
      height: 160
    });
    return (
      <View style={registerContainer}>
        <Text style={titleStyles}>Register Step 1</Text>
        <Text style={textStyles}>{physicalProfile.height}</Text>
        <Text style={textStyles}>{physicalProfile.weight}</Text>
        <Text style={textStyles}>{physicalProfile.age}</Text>
        <Text style={textStyles}>{physicalProfile.gender}</Text>
        <Text style={textStyles}>{physicalProfile.bodyFat}</Text>
        <Button
          type="solid"
          title="Next Step"
          buttonStyle={commonButtonStyle}
          titleStyle={commonButtonTextStyle}
          title="Next"
          onPress={() => this.props.navigation.navigate('RegisterStep2')}
        />
      </View>
    );
  }
}

export default RegisterStep1;
