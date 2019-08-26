/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quote-props */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import { View, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { Input, Text, Button, SocialIcon, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { loginAction } from '../../actions';
import styles from './styles';
import { fonts, darkPalette, margin, sizes } from '../../styles/base';
import { tokenHandler } from '../../utils/token';
import { Header } from '../../components';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      token: '',
      hidden: true,
      isModalVisible: false,
      isTokenVisible: false,
      isFocusNextInput: false,
      isWrong: false
    };
  }

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
          isTokenVisible: true,
          isWrong: true
        });
        this.props.loginAction(res.data, this.state.email);
        tokenHandler.storeData('token', res.data);
        this.props.jumpTo('redux');
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
    }, 700);
  };

  render() {
    const {
      email,
      password,
      token,
      isLoading,
      hidden,
      isModalVisible,
      isTokenVisible,
      isWrong
    } = this.state;
    const {
      loginContainer,
      textStyle,
      logoContainer,
      contentContainer,
      textLogo,
      modalContainer,
      modalTitle,
      modalContent
    } = styles;
    return (
      <Fragment>
        <Overlay
          width="90%"
          height="auto"
          isVisible={isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
        >
          <View style={modalContainer}>
            <Text style={modalTitle}>Oop!</Text>
            <Text style={modalContent}>Email or Password might not correct.</Text>
          </View>
        </Overlay>
        <Overlay
          width="90%"
          height="auto"
          isVisible={isTokenVisible}
          onBackdropPress={() => this.setState({ isTokenVisible: !this.state.isTokenVisible })}
        >
          <View style={modalContainer}>
            <Text style={modalTitle}>Token</Text>
            <Text style={modalContent}>{token}</Text>
          </View>
        </Overlay>
        <View style={loginContainer}>
          <View style={logoContainer}>
            <Icon name="heartbeat" color={darkPalette.darkPurple} size={fonts.special} />
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
              inputStyle={{
                fontFamily: fonts.regular,
                fontSize: fonts.text,
                color: darkPalette.darkPurple
              }}
              blurOnSubmit
              containerStyle={{ marginBottom: 2 }}
              leftIconContainerStyle={{ marginRight: 5, width: 20 }}
              leftIcon={<Icon name="envelope" color={darkPalette.darkPurple} size={fonts.md} />}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              placeholder="Password"
              inputStyle={{
                fontFamily: fonts.regular,
                fontSize: fonts.text,
                color: darkPalette.darkPurple
              }}
              secureTextEntry={hidden}
              onSubmitEditing={() => this.login()}
              containerStyle={{ marginBottom: 2 }}
              rightIconContainerStyle={{ marginRight: 20, width: 25 }}
              rightIcon={
                <Icon
                  name={hidden ? 'eye' : 'eye-slash'}
                  color={darkPalette.darkPurple}
                  size={fonts.md}
                  onPress={() => this.handleEyeSlash()}
                />
              }
              value={isWrong ? '' : this.state.password}
              leftIconContainerStyle={{ marginRight: 5, width: 20 }}
              leftIcon={<Icon name="unlock-alt" color={darkPalette.darkPurple} size={fonts.md} />}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button
              title="LOGIN"
              type="solid"
              loading={isLoading}
              titleStyle={{
                color: darkPalette.white,
                fontSize: fonts.sm,
                fontFamily: fonts.bold
              }}
              buttonStyle={{
                margin: margin.md,
                borderColor: darkPalette.darkPurple,
                backgroundColor: darkPalette.darkPurple,
                borderRadius: sizes.roundedButtonRadius,
                height: sizes.buttonHeight
              }}
              onPress={() => {
                this.login();
              }}
            />
            <Text style={textStyle}>OR</Text>
            <SocialIcon
              title="Sign In With Facebook"
              fontFamily={fonts.regular}
              fontWeight="200"
              button
              light
              style={{ height: sizes.buttonHeight }}
              type="facebook"
            />
          </View>
        </View>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  loginAction: (token, email) => dispatch(loginAction(token, email))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
