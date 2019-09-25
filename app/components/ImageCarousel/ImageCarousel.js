/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { dimensions, margin } from '../../styles/base';
import ParallaxItem from './ParallaxItem';

const { width: screenWidth } = Dimensions.get('window');

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          id: 1,
          title: 'The blood sugar diet',
          image: 'https://www.getthegloss.com/media/image/800-calorie-meal-plan.jpg'
        },
        {
          id: 2,
          title: 'Swimming matters',
          // image: 'https://via.placeholder.com/500?text=Swimming+matters'
          image:
            'http://isanidad.com/wp-content/uploads/2019/03/doctor-cultivo-estetoscopio_23-2147796554.jpg'
        },
        {
          id: 3,
          title: 'Send the report weekly to your private doctor, why not?',
          image:
            'http://isanidad.com/wp-content/uploads/2019/03/doctor-cultivo-estetoscopio_23-2147796554.jpg'
        },
        {
          id: 4,
          title:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ex? Dicta adipisci debitis voluptatem optio delectus consectetur cupiditate commodi assumenda libero eum a impedit repudiandae consequuntur quisquam voluptate, laboriosam itaque.',
          image:
            'http://isanidad.com/wp-content/uploads/2019/03/doctor-cultivo-estetoscopio_23-2147796554.jpg'
        }
      ]
    };
  }

  _renderItem = ({ item, index }) => <ParallaxItem item={item} />;

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={dimensions.containerHeight / 4.5}
          itemWidth={screenWidth - 2 * margin.md}
          data={this.state.entries}
          renderItem={this._renderItem}
          // inactiveSlideOpacity={0.3}
          hasParallaxImages
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

export default ImageCarousel;
