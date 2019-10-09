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
          title: 'I Still Have Concussion Symptoms — 3 Years Later',
          image: 'https://miro.medium.com/max/6016/0*-iEYxPmRW5QXaQxN'
        },
        {
          id: 2,
          title: 'Swimming matters',
          image:
            'https://spinalcare.com.au/wp-content/uploads/2019/01/b88824a2-84f7-11e8-bbc3-e5c02a79570e.jpg'
        },
        {
          id: 3,
          title: 'Send the report weekly to your private doctor, why not?',
          image:
            'http://isanidad.com/wp-content/uploads/2019/03/doctor-cultivo-estetoscopio_23-2147796554.jpg'
        },
        {
          id: 4,
          title: 'How to Tell If You Can Trust Online Health Information',
          image:
            'https://miro.medium.com/max/7360/1*m6mqOKBN-2y-aBsJeY6VpQ.jpeg'
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
