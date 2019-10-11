/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Avatar } from '../';
import styles from './styles';

export class StatusCard extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

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
          <Avatar isOnline={this.props.isOnline} uri={this.props.uri} />
        </View>
        <View style={statusCardCenter}>
          <Text style={titleStyles}>{this.props.title || 'Shawn'}</Text>
          <Text style={contentStyles}>{this.props.content || 'Content'}</Text>
        </View>
        <View style={statusCardRight}>
          <Text style={statsStyles}>{this.props.percent || '0'}%</Text>
        </View>
      </View>
    );
  }
}

export default StatusCard;
