/* eslint-disable no-redeclare */
/* eslint-disable no-duplicate-imports */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { ParallaxImage } from 'react-native-snap-carousel';
import {
  dimensions,
  fonts,
  darkPalette,
  shadow,
  margin,
  lightPalette,
  padding
} from '../../styles/base';

const { width: screenWidth } = Dimensions.get('window');

class ParallaxItem extends React.Component {
  render() {
    const { item, parallaxProps, navigation } = this.props;

    return (
      <TouchableOpacity
        style={styles.item}
        id={item.id}
        onPress={() => navigation.push('Tips', { title: item.title, image: item.image })}
        activeOpacity={0.8}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
export default withNavigation(ParallaxItem);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    width: screenWidth - 2 * margin.md,
    height: dimensions.containerHeight / 4.5,
    position: 'relative'
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    height: dimensions.containerHeight / 4.5,
    width: screenWidth - 2 * margin.md,
    borderRadius: 5,
    opacity: 0.5
  },
  title: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray,
    position: 'absolute',
    bottom: 0,
    width: screenWidth - 2 * margin.md,
    backgroundColor: darkPalette.backgroundOpacity,
    paddingHorizontal: padding.lg,
    paddingVertical: padding.sm
  }
});
