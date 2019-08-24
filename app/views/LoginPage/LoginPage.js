/* eslint-disable react/self-closing-comp */
/* eslint-disable quote-props */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { loginAction } from '../../actions';
import styles from './styles';
import { Header } from '../../components';
import { fonts, darkPalette, margin } from '../../styles/base';

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
        this.props.loginAction(this.state.email, this.state.password);
        this.setState({
          token: res.data,
          isLoading: false
        });
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
    return (
      <Fragment>
        <Input
          placeholder="Email"
          autoCompleteType="email"
          type="email"
          inputStyle={{ fontSize: fonts.sm, color: darkPalette.darkPurple }}
          blurOnSubmit
          containerStyle={{ marginBottom: 2 }}
          leftIconContainerStyle={{ marginRight: 5, width: 20 }}
          leftIcon={<Icon name="envelope" color={darkPalette.darkPurple} size={fonts.md} />}
          onChangeText={text => this.setState({ email: text })}
        />
        <Input
          placeholder="Password"
          inputStyle={{ fontSize: fonts.sm, color: darkPalette.darkPurple }}
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
          titleStyle={{ color: '#fff', fontSize: fonts.sm }}
          buttonStyle={{
            margin: margin.md,
            borderColor: darkPalette.darkPurple,
            backgroundColor: darkPalette.darkPurple
          }}
          onPress={() => this.login()}
        />
        <Text style={{ margin: margin.md }}>{token}</Text>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  loginAction: (email, password) => dispatch(loginAction(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
