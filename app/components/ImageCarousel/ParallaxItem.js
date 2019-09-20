/* eslint-disable no-redeclare */
/* eslint-disable no-duplicate-imports */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ParallaxImage } from 'react-native-snap-carousel';
import { dimensions, fonts, darkPalette, shadow, margin } from '../../styles/base';

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
        <ParallaxImage
          source={{
            uri: item.image
          }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.6}
          {...parallaxProps}
        />
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
    height: dimensions.containerHeight / 4.5
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    ...shadow
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover'
  },
  title: {
    fontFamily: fonts.thin,
    fontSize: fonts.sm,
    color: darkPalette.darkGray
  }
});
