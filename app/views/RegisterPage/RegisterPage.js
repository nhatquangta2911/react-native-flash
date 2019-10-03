/* eslint-disable valid-typeof */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text, BackHandler, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput, HelperText } from 'react-native-paper';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk';
import styles from './styles';
import { darkPalette } from '../../styles/base';

class RegisterPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Physical Profile',
    headerTitleStyle: styles.headerStyle,
    headerLeft: null
  });

  constructor(props) {
    super(props);
    this.state = {
      height: 170,
      isHeightFocus: false,
      isWeightFocus: false,
      isAgeFocus: false,
      weight: 65,
      gender: 'Male',
      age: 22,
      bodyFat: 'Medium'
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      Alert.alert('Are you sure you want to log out?', null, [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Log Out',
          onPress: () => {
            this.handleBackButton();
            this.props.navigation.navigate('Login');
          }
        }
      ]);
      return true;
    });
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
      commonButtonTextStyle,
      logoutStyle,
      contentContainer,
      row
    } = styles;
    const user = this.props.navigation.getParam('user', { name: 'Shawn' });
    return (
      <View style={registerContainer}>
        <Text style={textStyles}>
          Let us know about yourself,{' '}
          {this.props.navigation.getParam('user', { name: 'buddy' }).name}!
        </Text>
        <View style={contentContainer}>
          <View style={row}>
            <TextInput
              label="Height (cm)"
              selectionColor={darkPalette.darkCyan}
              underlineColorAndroid={darkPalette.darkCyan}
              value={this.state.height}
              style={{
                backgroundColor: darkPalette.white
              }}
              selectTextOnFocus
              keyboardType="decimal-pad"
              autoFocus={this.state.isHeightFocus}
              onChangeText={height => this.setState({ height })}
              onSubmitEditing={() =>
                this.setState({
                  isHeightFocus: false,
                  isWeightFocus: true,
                  isAgeFocus: false
                })
              }
            />
            <HelperText
              type="error"
              style={{ color: darkPalette.darkOrange }}
              visible={this.state.height < 0 || this.state.height > 250}
            >
              Height must be a number
            </HelperText>
          </View>
          <View style={row}>
            <TextInput
              label="Weight (kg)"
              style={{ backgroundColor: darkPalette.white }}
              selectionColor={darkPalette.darkCyan}
              underlineColorAndroid={darkPalette.darkCyan}
              value={this.state.weight}
              selectTextOnFocus
              keyboardType="decimal-pad"
              autoFocus={this.state.isWeightFocus}
              onChangeText={weight => this.setState({ weight })}
              onSubmitEditing={() =>
                this.setState({
                  isWeightFocus: false,
                  isAgeFocus: true,
                  isHeightFocus: false
                })
              }
            />
            <HelperText
              type="error"
              style={{ color: darkPalette.darkOrange }}
              visible={this.state.weight < 0}
            >
              Weight must be a number
            </HelperText>
          </View>
          <View style={row}>
            <TextInput
              label="Age"
              selectionColor={darkPalette.darkCyan}
              underlineColorAndroid={darkPalette.darkCyan}
              style={{ backgroundColor: darkPalette.white }}
              value={this.state.age}
              selectTextOnFocus
              keyboardType="number-pad"
              autoFocus={this.state.isAgeFocus}
              onChangeText={age => this.setState({ age })}
              onSubmitEditing={() => {
                this.setState({
                  isWeightFocus: false,
                  isAgeFocus: false,
                  isHeightFocus: false
                });
                Alert.alert('Done.');
              }}
            />
            <HelperText
              type="error"
              style={{ color: darkPalette.darkOrange }}
              visible={this.state.age < 0}
            >
              Age must be a number
            </HelperText>
          </View>
        </View>
        <Text style={secondaryTextStyle}>You can skip these steps</Text>
        <Button
          type="solid"
          title="Next Step"
          buttonStyle={commonButtonStyle}
          titleStyle={commonButtonTextStyle}
          onPress={() =>
            this.props.navigation.navigate('RegisterStep1', {
              physicalProfile: this.state
            })
          }
        />
        <Text style={logoutStyle} onPress={() => this.logout()}>
          Log Into Another Account
        </Text>
      </View>
    );
  }
}

export default RegisterPage;
