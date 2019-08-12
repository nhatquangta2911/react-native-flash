import React, { Component, Fragment } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Menu } from '../../components';
import { colors, padding, dimensions, fonts } from '../../styles/base';

class DailyChoices extends Component {
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
      })
      .catch(err => console.log(err));
  }

  // eslint-disable-next-line no-undef
  FlatListItemSeparator = () => (
    <View
      style={{
        margin: 0
      }}
    />
  );

  // eslint-disable-next-line no-undef
  renderItem = ({ item }) => <Menu name={item.Name} dishes={item.Dishes} />;

  render() {
    const { isLoading, data } = this.state;
    const { indicatorContainer, dailyChoiceStyle } = styles;
    return (
      <View>
        {isLoading && (
          <View style={indicatorContainer}>
            <ActivityIndicator size="small" color={colors.loadingColor} />
          </View>
        )}
        {!isLoading && (
          <Fragment>
            <Text style={dailyChoiceStyle}>{data.Name}</Text>
            <FlatList
              data={data.Menus}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              renderItem={this.renderItem}
              keyExtractor={item => item.Id.toString()}
            />
          </Fragment>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dailyChoiceStyle: {
    marginVertical: padding.md,
    fontSize: fonts.md
  },
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: dimensions.fullHeight - dimensions.headerHeight
  }
});

export default DailyChoices;
