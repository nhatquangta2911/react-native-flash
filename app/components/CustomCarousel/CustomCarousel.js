/* eslint-disable react/sort-comp */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Recipe } from '../';
import { dimensions, margin } from '../../styles/base';
import styles from './styles';

export default class CustomCarousel extends Component {
  _renderItem({ item, index }) {
    return <Recipe name={item.name} image={item.image} />;
  }

  render() {
    const { carouselContainer } = styles;
    return (
      <View style={carouselContainer}>
        <Carousel
          data={this.props.items}
          renderItem={this._renderItem}
          sliderWidth={dimensions.fullWidth}
          sliderHeight={dimensions.containerHeight / 2}
          itemWidth={(2.1 * dimensions.fullWidth) / 3 + margin.lg}
          inactiveSlideOpacity={0.4}
          autoplay
          lockScrollWhileSnapping
          autoplayDelay={800}
          autoplayInterval={2500}
          loop
        />
      </View>
    );
  }
}
