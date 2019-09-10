import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import styles from './styles';

export class StatusCard extends Component {
  render() {
    const {
      statusCardContainer,
      titleStyles,
      statusCardLeft,
      statusCardCenter,
      statusCardRight,
      statsStyles,
      contentStyles
    } = styles;
    return (
      <View style={statusCardContainer}>
        <View style={statusCardLeft}>
          <Image
            source={{ uri: 'https://png.pngtree.com/svg/20170505/1313036a9c.png' }}
            style={{ width: 55, height: 55 }}
          />
        </View>
        <View style={statusCardCenter}>
          <Text style={titleStyles}>Hi Shawn!</Text>
          <Text style={contentStyles}>How's your day going?</Text>
        </View>
        <View style={statusCardRight}>
          <Text style={statsStyles}>95%</Text>
        </View>
      </View>
    );
  }
}

export default StatusCard;
