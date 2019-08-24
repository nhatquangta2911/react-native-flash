/* eslint-disable no-unused-vars */
import React, { Fragment, Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Header } from '../../components';
import { DailyChoices } from '../';
import { tokenHandler } from '../../utils/token';

class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }

  async componentDidMount() {
    this.setState({
      token: await tokenHandler.getData('token')
    });
  }

  render() {
    const { orderPageContainer } = styles;
    const { token } = this.state;
    return !token ? (
      <Fragment>
        <Text>Something went wrong!</Text>
      </Fragment>
    ) : (
      <Fragment>
        {/* <Header headerText={'Lunch Ordering Page'} /> */}
        <View style={orderPageContainer}>
          <DailyChoices />
        </View>
      </Fragment>
    );
  }
}

export default OrderPage;
