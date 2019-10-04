/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

class RegisterStep4 extends Component {
  static navigationOptions = {
    title: 'Allergy',
    headerTitleStyle: styles.headerStyle
  };

  constructor(props) {
    super(props);
    this.state = {
      physicalProfile: this.props.navigation.getParam('physicalProfile', {
        name: 'Default'
      }),
      goal: this.props.navigation.getParam('activityLevel', 'Default'),
      activityLevel: this.props.navigation.getParam('activityLevel', 'Default'),
      dietType: this.props.navigation.getParam('dietType', 'Default')
    };
  }

  render() {
    const {
      registerContainer,
      textStyles,
      commonButtonStyle,
      commonNotChosenButtonStyle,
      commonButtonTextStyle,
      commonThirdButtonStyle,
      commonChosenThirdButtonTextStyle,
      commonThirdButtonTextStyle,
      contentContainer,
      commonChosenButtonStyle
    } = styles;
    return (
      <View style={registerContainer}>
        <Text style={{ ...textStyles, textAlign: 'center' }}>
          Do you want to follow a specific type of diet?
        </Text>
        <Button
          type="solid"
          title="Next Step"
          buttonStyle={commonButtonStyle}
          titleStyle={commonButtonTextStyle}
          title="Next"
          onPress={() =>
            this.props.navigation.navigate('RegisterStep4', {
              physicalProfile: this.state.physicalProfile,
              goal: this.state.goal,
              activityLevel: this.state.activityLevel,
              dietType: this.state.dietType
            })
          }
        />
      </View>
    );
  }
}

export default RegisterStep4;
