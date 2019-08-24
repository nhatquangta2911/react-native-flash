/* eslint-disable quote-props */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { loginAction } from '../../actions';
import styles from './styles';
import { Header } from '../../components';
import { handleToken } from '../../utils/token';
import tokenHandler from '../../utils/token/tokenHandler';

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

  async componentDidMount() {
    tokenHandler.storeData(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjVkM2VlMTY0NDAwNzIxMmI5MDBlZjkwZSIsIk5hbWUiOiJTaGF3biIsIm5iZiI6MTU2NjYxNzk5MCwiZXhwIjoxNTY2ODc3MTkwLCJpYXQiOjE1NjY2MTc5OTB9.7IrV_nEjycZuZ-uiHjv7RXt7oBuEHgmHuQfqkE0kNuw'
    );
    this.setState({
      token: await tokenHandler.getData('token')
    });
  }

  login(e) {
    this.setState({
      isLoading: true
    });
    axios
      .post('https://shawn-movie-rental.herokuapp.com/api/auth', {
        username: this.state.email,
        password: this.state.password
      })
      .then(res => {
        this.props.loginAction(this.state.email, this.state.password);
        this.setState({
          token: res.data,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { loginPageContainer, logo } = styles;
    const { token } = this.state;
    console.log(token);
    return (
      <Fragment>
        <View style={loginPageContainer}>
          <View style={logo}>
            <Text>{token}</Text>
          </View>
        </View>
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
