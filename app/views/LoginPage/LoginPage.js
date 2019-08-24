/* eslint-disable react/self-closing-comp */
/* eslint-disable quote-props */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { Input, Text, Button, Header, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { loginAction } from '../../actions';
import styles from './styles';
import { fonts, darkPalette, margin, sizes } from '../../styles/base';
import { tokenHandler } from '../../utils/token';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      token: ''
    };
  }

  login() {
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
          isLoading: false
        });
        this.props.loginAction(res.data, this.state.email);
        tokenHandler.storeData('token', res.data);
      })
      .catch(err => {
        this.setState({
          isLoading: false
        });
        console.log(err);
      });
  }

  render() {
    const { email, password, token, isLoading } = this.state;
    const { loginContainer, textStyle, logoContainer, contentContainer, textLogo } = styles;
    return (
      <Fragment>
        <Header
          leftComponent={{ icon: 'menu', color: darkPalette.white, size: fonts.lg }}
          centerComponent={{
            text: 'Login Page',
            style: { color: darkPalette.white, fontFamily: fonts.regular, fontSize: fonts.md }
          }}
          backgroundColor={darkPalette.darkPurple}
          containerStyle={{
            marginTop: sizes.offsetTopHeaderAndroid
          }}
        />
        <View style={loginContainer}>
          <View style={logoContainer}>
            <Icon name="heartbeat" color={darkPalette.darkPurple} size={fonts.special} />
            <Text style={textLogo}>Senior Project</Text>
          </View>
          <View style={contentContainer}>
            <Input
              placeholder="Email"
              autoCompleteType="email"
              type="email"
              defaultValue="shawn@enclave.v"
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
              secureTextEntry
              containerStyle={{ marginBottom: 2 }}
              leftIconContainerStyle={{ marginRight: 5, width: 20 }}
              leftIcon={<Icon name="unlock-alt" color={darkPalette.darkPurple} size={fonts.md} />}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button
              title="LOGIN"
              type="solid"
              loading={isLoading}
              titleStyle={{ color: darkPalette.white, fontSize: fonts.sm, fontFamily: fonts.bold }}
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
            <Text style={textStyle}>{token}</Text>
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
