/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

class RegisterStep1 extends Component {
  static navigationOptions = {
    title: 'Goal',
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
      commonNotChosenButtonStyle,
      commonButtonTextStyle,
      commonHalfButtonStyle,
      commonHalfButtonTextStyle,
      commonChosenHalfButtonStyle,
      commonChosenHalfButtonTextStyle,
      commonThirdButtonStyle,
      commonChosenThirdButtonStyle,
      commonThirdButtonTextStyle,
      commonChosenThirdButtonTextStyle,
      logoutStyle,
      contentContainer,
      row,
      rowButton,
      explain
    } = styles;
    const physicalProfile = this.props.navigation.getParam('physicalProfile', {
      height: 160
    });
    return (
      <View style={registerContainer}>
        <Text style={{ ...textStyles, textAlign: 'center' }}>
          What is your goal,{' '}
          {this.props.navigation.getParam('user', { name: 'buddy' }).name}?
        </Text>
        <View style={contentContainer}>
          <Button
            type="outline"
            title="Lose fat"
            buttonStyle={commonNotChosenButtonStyle}
            titleStyle={commonThirdButtonTextStyle}
            title="Next"
            onPress={() => this.props.navigation.navigate('RegisterStep2')}
          />
          <Button
            type="outline"
            title="Maintain weight"
            buttonStyle={commonNotChosenButtonStyle}
            titleStyle={commonThirdButtonTextStyle}
            title="Next"
            onPress={() => this.props.navigation.navigate('RegisterStep2')}
          />
          <Button
            type="outline"
            title="Build muscle"
            buttonStyle={commonNotChosenButtonStyle}
            titleStyle={commonThirdButtonTextStyle}
            title="Next"
            onPress={() => this.props.navigation.navigate('RegisterStep2')}
          />
        </View>
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
