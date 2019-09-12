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

  // get pagination() {
  //   return (
  //     <Pagination
  //       dotsLength={this.props.items.length}
  //       activeDotIndex={activeSlide}
  //       containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
  //       dotStyle={{
  //         width: 10,
  //         height: 10,
  //         borderRadius: 5,
  //         marginHorizontal: 8,
  //         backgroundColor: 'rgba(255, 255, 255, 0.92)'
  //       }}
  //       inactiveDotStyle={
  //         {
  //           // Define styles for inactive dots here
  //         }
  //       }
  //       inactiveDotOpacity={0.4}
  //       inactiveDotScale={0.6}
  //     />
  //   );
  // }

  render() {
    const { carouselContainer } = styles;
    return (
      <View style={carouselContainer}>
        <Carousel
          data={this.props.items}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({ activeSlide: index })}
          sliderWidth={dimensions.fullWidth}
          itemWidth={(2 * dimensions.fullWidth) / 3 + margin.lg}
          inactiveSlideOpacity={0.4}
        />
      </View>
    );
  }
}
