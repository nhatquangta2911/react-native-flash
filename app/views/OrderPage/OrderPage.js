/* eslint-disable no-unused-vars */
import React, { Fragment, Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Header } from '../../components';
import { DailyChoices } from '../';

class OrderPage extends Component {
  render() {
    const { orderPageContainer } = styles;
    return (
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
