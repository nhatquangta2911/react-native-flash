/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { Button } from 'react-native-elements';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk';
import styles from './styles';

class RegisterPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Let us know about yourself, ${
      navigation.getParam('user', { name: 'buddy' }).name
    }!`,
    headerTitleStyle: styles.headerStyle
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () =>
      this.handleBackButton()
    );
  }

  handleBackButton = () => {
    this.logout();
  };

  logout = () => {
    const logout = new GraphRequest(
      '/me/permissions/',
      { httpMethod: 'DELETE' },
      (error, result) => {
        console.log(result);
        if (error) {
          console.log('Error fetching data: ' + error.toString());
        } else {
          LoginManager.logOut();
          this.props.navigation.navigate('Login');
        }
      }
    );
    new GraphRequestManager().addRequest(logout).start();
  };

  render() {
    const {
      registerContainer,
      titleStyles,
      textStyles,
      secondaryTextStyle,
      commonButtonStyle,
      commonButtonTextStyle
    } = styles;
    const user = this.props.navigation.getParam('user', { name: 'Shawn' });
    return (
      <View style={registerContainer}>
        <Button
          title="Next"
          buttonStyle={commonButtonStyle}
          textStyle={commonButtonTextStyle}
          onPress={() => this.props.navigation.navigate('RegisterStep1')}
        />
        <Text style={secondaryTextStyle}>You can skip these steps</Text>
        <Text onPress={() => this.logout()}>Logout</Text>
      </View>
    );
  }
}

export default RegisterPage;
