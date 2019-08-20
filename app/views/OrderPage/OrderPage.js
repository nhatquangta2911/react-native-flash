import React, { Fragment, Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Header } from '../../components';
import { DailyChoices } from '../';

class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { orderPageContainer } = styles;
    return (
      <Fragment>
        <Header headerText={'Lunch Ordering App'} />
        <View style={orderPageContainer}>
          <DailyChoices />
        </View>
      </Fragment>
    );
  }
}

export default OrderPage;
