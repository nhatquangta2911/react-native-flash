import React, { Fragment, Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../../components';
import { dimensions, padding } from '../../styles/base';
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

const styles = StyleSheet.create({
  homePageContainer: {
    marginHorizontal: padding.md,
    marginVertical: padding.sm,
    height: dimensions.fullHeight - dimensions.headerHeight
  }
});

export default HomePage;
