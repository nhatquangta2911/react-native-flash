/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
import { tokenHandler } from '../../utils/token';

class RegisterStep1 extends Component {
  static navigationOptions = {
    title: 'Goal',
    headerTitleStyle: styles.headerStyle
  };

  constructor(props) {
    super(props);
    this.state = {
      goal: null
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
          What is your goal?
        </Text>
        <View style={contentContainer}>
          <Button
            type="outline"
            title="Lose fat"
            buttonStyle={
              this.state.goal === '1'
                ? commonChosenButtonStyle
                : commonNotChosenButtonStyle
            }
            titleStyle={
              this.state.goal === '1'
                ? commonChosenThirdButtonTextStyle
                : commonThirdButtonTextStyle
            }
            onPress={() => this.setState({ goal: '1' })}
          />
          <Button
            type="outline"
            title="Maintain weight"
            buttonStyle={
              this.state.goal === '2'
                ? commonChosenButtonStyle
                : commonNotChosenButtonStyle
            }
            titleStyle={
              this.state.goal === '2'
                ? commonChosenThirdButtonTextStyle
                : commonThirdButtonTextStyle
            }
            onPress={() => this.setState({ goal: '2' })}
          />
          <Button
            type="outline"
            title="Build muscle"
            buttonStyle={
              this.state.goal === '3'
                ? commonChosenButtonStyle
                : commonNotChosenButtonStyle
            }
            titleStyle={
              this.state.goal === '3'
                ? commonChosenThirdButtonTextStyle
                : commonThirdButtonTextStyle
            }
            onPress={() => this.setState({ goal: '3' })}
          />
        </View>
        <Button
          type="solid"
          title="Next Step"
          buttonStyle={commonButtonStyle}
          titleStyle={commonButtonTextStyle}
          title="Next"
          onPress={async () => {
            await tokenHandler.storeData('goal', this.state.goal);
            this.props.navigation.navigate('RegisterStep2');
          }}
        />
      </View>
    );
  }
}

export default RegisterStep1;
