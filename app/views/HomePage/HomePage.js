/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import styles from './styles';

export class HomePage extends Component {
  static navigationOptions = ({ navigation }) => {};

  handleLogout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    const { homeContainer, textStyles, titleButtonLoginStyle, buttonLoginStyle } = styles;
    return (
      <View style={homeContainer}>
        <Text style={textStyles}>Home Page</Text>
        <Button
          title="LOGOUT"
          type="solid"
          titleStyle={titleButtonLoginStyle}
          buttonStyle={buttonLoginStyle}
          onPress={() => {
            this.handleLogout();
          }}
        />
      </View>
    );
  }
}

export default withNavigation(HomePage);
