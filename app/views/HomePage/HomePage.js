/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import styles from './styles';

export class HomePage extends Component {
  handleLogout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    const { homeContainer, textStyles, titleButtonLoginStyle, buttonLoginStyle } = styles;
    const { navigation } = this.props;
    const token = navigation.getParam('token', 'default-token');
    return (
      <View style={homeContainer}>
        <Text style={textStyles}>Home Page</Text>
        <Text style={textStyles}>1
        </Text>
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
