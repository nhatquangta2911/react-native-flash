import React, { Fragment, Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Header } from '../../components';
import { DailyChoices } from '../../views';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { homePageContainer } = styles;
    return (
      <Fragment>
        <Header headerText={'Lunch Ordering App'} />
        <View style={homePageContainer}>
          <DailyChoices />
        </View>
      </Fragment>
    );
  }
}

export default HomePage;
