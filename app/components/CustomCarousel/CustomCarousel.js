/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Recipe } from '..';
import { ENTRIES1 } from '../../statics/entries';

export default class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: ENTRIES1
    };
  }

  _renderItem = ({ item, index }) => <Recipe name={item.title} image={item.illustration} />;

  render() {
    return (
      <View>
        <Carousel
          data={this.state.entries}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({ activeSlide: index })}
        />
      </View>
    );
  }
}
