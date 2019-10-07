/* eslint-disable valid-typeof */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text, BackHandler, Alert, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput, HelperText, TouchableRipple } from 'react-native-paper';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { darkPalette } from '../../styles/base';
import { tokenHandler } from '../../utils/token';

class RegisterPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Physical Profile',
    headerTitleStyle: styles.headerStyle,
    headerLeft: null
  });

  constructor(props) {
    super(props);
    this.state = {
      user: props.navigation.getParam('user', { name: 'Shawnnn' }),
      height: null,
      weight: null,
      gender: null,
      age: null,
      bodyFat: null,
      inputError: false
    };
  }

  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', () => {
  //     Alert.alert('Are you sure you want to log out?', null, [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel'
  //       },
  //       {
  //         text: 'Log Out',
  //         onPress: () => {
  //           this.handleBackButton();
  //           this.props.navigation.navigate('Login');
  //         }
  //       }
  //     ]);
  //     return true;
  //   });
  // }

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
    return (
      <View style={registerContainer}>
        <Text style={textStyles}>
          Let us know about yourself,{' '}
          {this.props.navigation.getParam('user', { name: 'buddy' }).name}!
        </Text>
        <View style={contentContainer}>
          <View style={rowButton}>
            <Button
              title="Male"
              type="outline"
              buttonStyle={
                this.state.gender === 'Male'
                  ? commonChosenHalfButtonStyle
                  : commonHalfButtonStyle
              }
              titleStyle={
                this.state.gender === 'Male'
                  ? commonChosenHalfButtonTextStyle
                  : commonHalfButtonTextStyle
              }
              onPress={() => this.setState({ gender: 'Male' })}
            />
            <Button
              type="outline"
              title="Female"
              buttonStyle={
                this.state.gender === 'Female'
                  ? commonChosenHalfButtonStyle
                  : commonHalfButtonStyle
              }
              titleStyle={
                this.state.gender === 'Female'
                  ? commonChosenHalfButtonTextStyle
                  : commonHalfButtonTextStyle
              }
              onPress={() => this.setState({ gender: 'Female' })}
            />
          </View>

          <View style={row}>
            <TextInput
              label="Height (cm)"
              selectionColor={darkPalette.darkCyan}
              underlineColorAndroid={darkPalette.darkCyan}
              value={this.state.height}
              style={{
                backgroundColor: darkPalette.superLightgray
              }}
              selectTextOnFocus
              keyboardType="decimal-pad"
              autoFocus={this.state.isHeightFocus}
              onChangeText={height => this.setState({ height })}
            />
            <HelperText
              type="error"
              style={{
                color: darkPalette.darkOrange,
                fontSize: 10,
                fontFamily: 'Nunito-ExtraLightItalic'
              }}
              visible={() => {
                this.setState({ inputError: true });
                return (
                  isNaN(this.state.height) ||
                  this.state.height < 0 ||
                  this.state.height > 250
                );
              }}
            >
              Height must be a valid number
            </HelperText>
          </View>
          <View style={row}>
            <TextInput
              label="Weight (kg)"
              style={{ backgroundColor: darkPalette.superLightgray }}
              selectionColor={darkPalette.darkCyan}
              underlineColorAndroid={darkPalette.darkCyan}
              value={this.state.weight}
              selectTextOnFocus
              keyboardType="decimal-pad"
              onChangeText={weight => this.setState({ weight })}
            />
            <HelperText
              type="error"
              style={{
                color: darkPalette.darkOrange,
                fontSize: 10,
                fontFamily: 'Nunito-ExtraLightItalic'
              }}
              visible={
                isNaN(this.state.weight) ||
                this.state.weight < 0 ||
                this.state.weight > 300
              }
            >
              Weight must be a valid number
            </HelperText>
          </View>
          <View style={row}>
            <TextInput
              label="Age"
              selectionColor={darkPalette.darkCyan}
              underlineColorAndroid={darkPalette.darkCyan}
              style={{ backgroundColor: darkPalette.superLightgray }}
              value={this.state.age}
              selectTextOnFocus
              keyboardType="number-pad"
              onChangeText={age => this.setState({ age })}
            />
            <HelperText
              type="error"
              style={{
                color: darkPalette.darkOrange,
                fontSize: 10,
                fontFamily: 'Nunito-ExtraLightItalic'
              }}
              visible={
                isNaN(this.state.age) ||
                this.state.age < 0 ||
                this.state.age > 150
              }
            >
              Age must be a valid number
            </HelperText>
          </View>
          <View style={rowButton}>
            <Text style={secondaryTextStyle}>Bodyfat</Text>
            <Button
              type="outline"
              title="Low"
              buttonStyle={
                this.state.bodyFat === 'Low'
                  ? commonChosenThirdButtonStyle
                  : commonThirdButtonStyle
              }
              titleStyle={
                this.state.bodyFat === 'Low'
                  ? commonChosenThirdButtonTextStyle
                  : commonThirdButtonTextStyle
              }
              onPress={() => this.setState({ bodyFat: 'Low' })}
            />
            <Button
              type="outline"
              title="Medium"
              buttonStyle={
                this.state.bodyFat === 'Medium'
                  ? commonChosenThirdButtonStyle
                  : commonThirdButtonStyle
              }
              titleStyle={
                this.state.bodyFat === 'Medium'
                  ? commonChosenThirdButtonTextStyle
                  : commonThirdButtonTextStyle
              }
              onPress={() => this.setState({ bodyFat: 'Medium' })}
            />
            <Button
              type="outline"
              title="High"
              buttonStyle={
                this.state.bodyFat === 'High'
                  ? commonChosenThirdButtonStyle
                  : commonThirdButtonStyle
              }
              titleStyle={
                this.state.bodyFat === 'High'
                  ? commonChosenThirdButtonTextStyle
                  : commonThirdButtonTextStyle
              }
              onPress={() => this.setState({ bodyFat: 'High' })}
            />
          </View>
          <Text style={explain}>You can skip these steps</Text>
        </View>
        <Button
          type="solid"
          title="Next Step"
          buttonStyle={commonButtonStyle}
          titleStyle={commonButtonTextStyle}
          onPress={() => {
            if (this.state.inputError || false) {
              Alert.alert('Take your time to rectify your profile, buddy!');
            } else {
              this.props.navigation.navigate('RegisterStep1', {
                physicalProfile: this.state,
                name: this.props.navigation.getParam('user', { name: 'buddy' })
                  .name
              });
            }
          }}
        />
        <Button
          type="solid"
          title="SKIP"
          buttonStyle={commonButtonStyle}
          titleStyle={commonButtonTextStyle}
          onPress={() => {
            this.props.navigation.dispatch(
              NavigationActions.navigate({
                routeName: 'App',
                params: { user: this.state.user },
                action: NavigationActions.navigate({
                  routeName: 'Home'
                })
              })
            );
          }}
        />
        <Text
          style={logoutStyle}
          onPress={() => {
            Alert.alert('Are you sure you want to log out?', null, [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              {
                text: 'Log Out',
                onPress: () => {
                  this.logout();
                  this.props.navigation.navigate('Login');
                }
              }
            ]);
          }}
        >
          Log Into Another Account
        </Text>
      </View>
    );
  }
}

export default RegisterPage;
