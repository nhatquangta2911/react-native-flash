/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CustomCarousel } from '../../components';
import styles from './styles';
import { recipes } from '../../statics/entries';
import { headerStyle } from '../../styles/base';

export class BrowsingPage extends Component {
  static navigationOptions = {
    title: 'Browsing Screen',
    headerTitleStyle: { ...headerStyle }
  };
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
