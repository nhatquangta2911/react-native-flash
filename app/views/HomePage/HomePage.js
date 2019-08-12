import React, { Fragment, Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Header } from '../../components';
import { dimensions, colors, padding } from '../../styles/base';
import { DailyChoices } from '../../views';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: ''
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    fetch('https://lunch-ordering-api.herokuapp.com/api/DailyChoices/today')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          isLoading: false,
          data: resJson
        });
        console.log(resJson);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { indicatorContainer, homePageContainer } = styles;
    const { isLoading, data } = this.state;

    return (
      <Fragment>
        <Header headerText={'Lunch Ordering App'} />

        {isLoading && (
          <View style={indicatorContainer}>
            <ActivityIndicator size="large" color={colors.loadingColor} />
          </View>
        )}

        {!isLoading && (
          <View style={homePageContainer}>
            <DailyChoices data={data} />
          </View>
        )}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  homePageContainer: {
    marginHorizontal: padding.md,
    marginVertical: padding.sm,
    height: dimensions.fullHeight - dimensions.headerHeight
  },
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: dimensions.fullHeight - dimensions.headerHeight
  }
});

export default HomePage;
