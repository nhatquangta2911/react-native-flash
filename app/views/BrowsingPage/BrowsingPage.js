import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CustomCarousel } from '../../components';
import styles from './styles';
import { recipes } from '../../statics/entries';

export class BrowsingPage extends Component {
  render() {
    const { browsingContainer, textStyles, titleStyles } = styles;
    return (
      <View style={browsingContainer}>
        <Text style={titleStyles}>Browsing Page</Text>
        <Text style={textStyles}>Coming soon...</Text>
        <CustomCarousel items={recipes} />
      </View>
    );
  }
}

export default BrowsingPage;
