/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component, Fragment } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Menu } from '../../components';
import styles from './styles';

class DailyChoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: ''
    };
  }

  componentDidMount() {
    fetch('https://lunch-ordering-api.herokuapp.com/api/DailyChoices/5d5109bebc94d400056b40cb')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          isLoading: false,
          data: resJson
        });
      })
      .catch(err => console.log(err));
  }

  FlatListItemSeparator = () => (
    <View
      style={{
        margin: 0
      }}
    />
  );

  renderItem = ({ item }) => <Menu name={item.Name} dishes={item.Dishes} />;

  render() {
    const { isLoading, data } = this.state;
    const { indicatorContainer, dailyChoiceStyle, loadingStyle } = styles;
    return (
      <View>
        {isLoading && (
          <View style={indicatorContainer}>
            <ActivityIndicator size="small" color={loadingStyle.color} />
          </View>
        )}
        {!isLoading && (
          <Fragment>
            {/* <Text style={dailyChoiceStyle}>{data.Name}</Text> */}
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

export default DailyChoices;
