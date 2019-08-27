/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component, Fragment } from 'react';
import { View, Keyboard } from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { fonts, darkPalette } from '../../styles/base';
import { Modal, SocialButton } from '../../components';
import { tokenHandler } from '../../utils/token';

class LoginPage extends Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: '',
      isLoading: false,
      hidden: true,
      isModalVisible: false
    };
  }

  saveToken = async () => {
    await tokenHandler.storeData('token', this.state.token);
  };

  login() {
    Keyboard.dismiss();
    this.setState({
      isLoading: true
    });
    axios
      .post('https://shawn-movie-rental.herokuapp.com/api/auth', {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        this.setState({
          token: res.data,
          isLoading: false,
          isModalVisible: false
        });
        this.saveToken();
        this.props.navigation.navigate('Home');
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          isModalVisible: true,
          password: ''
        });
        console.log(err);
      });
  }

  handleEyeSlash = () => {
    this.setState({
      hidden: !this.state.hidden
    });
    setTimeout(() => {
      this.setState({
        hidden: !this.state.hidden
      });
    }, 250);
  };

  callbackError = status => {
    this.setState({ isModalVisible: status });
  };

  render() {
    const { email, password, isLoading, hidden, isModalVisible } = this.state;
    const {
      loginContainer,
      textStyle,
      logoContainer,
      contentContainer,
      textLogo,
      buttonLoginStyle,
      titleButtonLoginStyle,
      inputStyle
    } = styles;
    return (
      <Fragment>
        <Modal
          isVisible={isModalVisible}
          title="Oops!"
          content="Email or Password might incorrect"
          sendStatus={this.callbackError}
        />
        <View style={loginContainer}>
          <View style={logoContainer}>
            <Icon name="heartbeat" color={darkPalette.darkCyan} size={fonts.special} />
            <Text style={textLogo}>Senior Project</Text>
          </View>
          <View style={contentContainer}>
            <Input
              placeholder="Email"
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="next"
              keyboardType="email-address"
              type="email"
              defaultValue="shawn@enclave.v"
              inputStyle={inputStyle}
              blurOnSubmit
              containerStyle={{ marginBottom: 2 }}
              leftIconContainerStyle={{ marginRight: 5, width: 20 }}
              leftIcon={<Icon name="envelope" color={darkPalette.darkCyan} size={fonts.md} />}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              placeholder="Password"
              inputStyle={{
                fontFamily: fonts.regular,
                fontSize: fonts.text,
                color: darkPalette.darkCyan
              }}
              defaultValue="mrmms2am"
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
              leftIcon={<Icon name="unlock-alt" color={darkPalette.darkCyan} size={fonts.md} />}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button
              title="LOGIN"
              type="solid"
              loading={isLoading}
              titleStyle={titleButtonLoginStyle}
              buttonStyle={buttonLoginStyle}
              onPress={() => {
                this.login();
              }}
            />
            <Text style={textStyle}>OR</Text>
            <SocialButton type="facebook" />
          </View>
        </View>
      </Fragment>
    );
  }
}

export default withNavigation(LoginPage);
