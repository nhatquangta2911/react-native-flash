/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable prefer-template */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import { View, Keyboard, Alert, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  LoginButton,
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk';
import axios from 'axios';
import { Input, Text, Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { fonts, darkPalette } from '../../styles/base';
import { Modal, SocialButton } from '../../components';
import { tokenHandler } from '../../utils/token';
import { ApiCaller, AuthApi } from '../../utils/api';

class LoginPage extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: '',
      isLoading: false,
      isFBLoading: false,
      hidden: true,
      isModalVisible: false,
      user: '',
      id: ''
    };
  }

  saveToken = async () => {
    await tokenHandler.storeData('token', this.state.token);
  };

  saveId = async () => {
    await tokenHandler.storeData('id', this.state.id);
  };

  // login() {
  //   Keyboard.dismiss();
  //   this.setState({
  //     isLoading: true
  //   });
  //   axios
  //     .post('https://shawn-movie-rental.herokuapp.com/api/auth', {
  //       email: this.state.email,
  //       password: this.state.password
  //     })
  //     .then(res => {
  //       this.setState({
  //         token: res.data,
  //         isLoading: false,
  //         isModalVisible: false
  //       });
  //       this.saveToken();
  //       this.props.navigation.navigate('Home', {
  //         token: this.state.token
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         isLoading: false,
  //         isModalVisible: true,
  //         password: ''
  //       });
  //       console.log(err);
  //     });
  // }

  // handleEyeSlash = () => {
  //   this.setState({
  //     hidden: !this.state.hidden
  //   });
  //   setTimeout(() => {
  //     this.setState({
  //       hidden: !this.state.hidden
  //     });
  //   }, 250);
  // };

  // callbackError = status => {
  //   this.setState({ isModalVisible: status });
  // };

  saveInfo = async () => {
    await tokenHandler.storeData('user', this.state.user);
  };

  _responseInfoCallback = async (error, result) => {
    if (error) {
      Alert.alert('Error fetching data', error.toString());
      this.setState({
        isFBLoading: false
      });
    } else {
      this.setState({
        user: result,
        isFBLoading: false
      });
      const user = this.state.user;
      AuthApi.register({
        email: user.email,
        name: user.name,
        picture: user.picture.data.url
      })
        .then(async res => {
          await tokenHandler.storeData('id', res.data.id.toString());
          await tokenHandler.storeData(
            'status',
            res.data && res.data.status.toString()
          );
          if (res.status === 201) {
            if (res.data && res.data.status.toString() === '1') {
              this.props.navigation.navigate('Home');
            } else {
              Alert.alert(
                'Your account has been blocking. Please come back later.'
              );
            }
          } else {
            this.props.navigation.navigate('Register');
          }
        })
        .catch(err => Alert.alert(err.message));
    }
  };

  handleFacebookLogin = async () => {
    this.setState({ isFBLoading: true });
    try {
      const result = await LoginManager.logInWithPermissions(['email']);
      if (result.isCancelled) {
        Alert.alert('Login was cancelled.');
        this.setState({
          isFBLoading: false
        });
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          this.setState({
            token: data.accessToken.toString()
          });
          const infoRequest = new GraphRequest(
            '/me',
            {
              accessToken: data.accessToken.toString(),
              parameters: {
                fields: {
                  string: 'id,name,email,last_name,birthday,picture.type(large)'
                }
              }
            },
            this._responseInfoCallback
          );
          new GraphRequestManager().addRequest(infoRequest).start();
          this.saveToken();
        });
      }
    } catch (error) {
      Alert.alert('Login fail with error', error.toString());
      this.setState({
        isFBLoading: false
      });
    }
  };

  render() {
    const {
      email,
      password,
      isLoading,
      isFBLoading,
      hidden,
      isModalVisible
    } = this.state;
    const {
      loginContainer,
      textStyle,
      logoContainer,
      contentContainer,
      textLogo,
      buttonLoginStyle,
      titleButtonLoginStyle,
      inputStyle,
      buttonLoginFBStyle,
      banner
    } = styles;
    return (
      <Fragment>
        {/* <Modal
          isVisible={isModalVisible}
          title='Oops!'
          content='Email or Password might incorrect'
          sendStatus={this.callbackError}
        /> */}
        <View style={loginContainer}>
          <View style={banner}>
            <Image
              source={require('../../assets/banners/banner5.jpg')}
              style={{
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height
              }}
            />
          </View>
          <View style={logoContainer}>
            <Icon name='heartbeat' color={darkPalette.darkCyan} size={55} />
            <Text style={textLogo}>SRecord</Text>
          </View>
          <View style={contentContainer}>
            <Button
              title='Login with Facebook'
              loading={isFBLoading}
              titleStyle={titleButtonLoginStyle}
              buttonStyle={buttonLoginFBStyle}
              onPress={() => {
                this.handleFacebookLogin();
              }}
            />
          </View>
          {/* <View style={contentContainer}>
            <Input
              placeholder='Email'
              autoCapitalize='none'
              autoCompleteType='email'
              returnKeyType='next'
              keyboardType='email-address'
              type='email'
              inputStyle={inputStyle}
              blurOnSubmit
              containerStyle={{ marginBottom: 2 }}
              leftIconContainerStyle={{ marginRight: 5, width: 20 }}
              leftIcon={
                <Icon
                  name='envelope'
                  color={darkPalette.darkCyan}
                  size={fonts.md}
                />
              }
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              placeholder='Password'
              inputStyle={{
                fontFamily: fonts.regular,
                fontSize: fonts.text,
                color: darkPalette.darkCyan
              }}
              secureTextEntry={hidden}
              onSubmitEditing={() => this.login()}
              containerStyle={{ marginBottom: 2 }}
              rightIconContainerStyle={{ marginRight: 20, width: 25 }}
              rightIcon={
                <Icon
                  name={hidden ? 'eye' : 'eye-slash'}
                  color={darkPalette.darkCyan}
                  size={fonts.md}
                  onPress={() => this.handleEyeSlash()}
                />
              }
              leftIconContainerStyle={{ marginRight: 5, width: 20 }}
              leftIcon={
                <Icon
                  name='unlock-alt'
                  color={darkPalette.darkCyan}
                  size={fonts.md}
                />
              }
              onChangeText={text => this.setState({ password: text })}
            />
            <Button
              title='Log In'
              type='solid'
              loading={isLoading}
              titleStyle={titleButtonLoginStyle}
              buttonStyle={buttonLoginStyle}
              onPress={() => {
                this.login();
              }}
            />
            <Text style={textStyle}>OR</Text>
            <Button
              title='Register'
              type='solid'
              titleStyle={titleButtonLoginStyle}
              buttonStyle={buttonLoginStyle}
              onPress={() => {
                this.props.navigation.navigate('Register');
              }}
            />
            <Button
              title='Login with Facebook'
              type='solid'
              loading={isFBLoading}
              titleStyle={titleButtonLoginStyle}
              buttonStyle={buttonLoginFBStyle}
              onPress={() => {
                this.handleFacebookLogin();
              }}
            />
            {/* <LoginButton
              onLoginFinished={(error, result) => {
                if (error) {
                  console.log('Login has error: ' + result.error);
                } else if (result.isCancelled) {
                  console.log('Login is cancelled.');
                } else {
                  AccessToken.getCurrentAccessToken().then(data => {
                    console.log(data.accessToken.toString());
                  });
                }
              }}
              onLogoutFinished={() => console.log('Logout.')}
            /> 
          </View> */}
        </View>
      </Fragment>
    );
  }
}

export default withNavigation(LoginPage);
