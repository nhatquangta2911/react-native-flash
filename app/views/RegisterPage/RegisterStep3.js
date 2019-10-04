/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

class RegisterStep3 extends Component {
  static navigationOptions = {
    title: 'Diet type',
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
      dietType: null
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
        <View style={contentContainer}>
          <Button
            type="outline"
            title="Anything"
            buttonStyle={
              this.state.dietType === '1'
                ? commonChosenButtonStyle
                : commonNotChosenButtonStyle
            }
            titleStyle={
              this.state.dietType === '1'
                ? commonChosenThirdButtonTextStyle
                : commonThirdButtonTextStyle
            }
            onPress={() => this.setState({ dietType: '1' })}
          />
          <Button
            type="outline"
            title="Vegetarian"
            buttonStyle={
              this.state.dietType === '2'
                ? commonChosenButtonStyle
                : commonNotChosenButtonStyle
            }
            titleStyle={
              this.state.dietType === '2'
                ? commonChosenThirdButtonTextStyle
                : commonThirdButtonTextStyle
            }
            onPress={() => this.setState({ dietType: '2' })}
          />
          <Button
            type="outline"
            title="Mediterranean"
            buttonStyle={
              this.state.dietType === '3'
                ? commonChosenButtonStyle
                : commonNotChosenButtonStyle
            }
            titleStyle={
              this.state.dietType === '3'
                ? commonChosenThirdButtonTextStyle
                : commonThirdButtonTextStyle
            }
            onPress={() => this.setState({ dietType: '3' })}
          />
        </View>
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

export default RegisterStep3;
