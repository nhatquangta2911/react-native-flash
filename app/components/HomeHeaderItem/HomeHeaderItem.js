/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Image } from 'react-native-elements';
import styles from './styles';

class HomeHeaderItem extends Component {
  render() {
    const { itemContainer, itemWrapper, textStyle, iconWrapper, textWrapper, iconStyle } = styles;
    const { title, icon, linkTo, navigation } = this.props;
    return (
      <TouchableOpacity
        style={itemContainer}
        onPress={() => {
          if (!this.props.outside) this.props.jumpTo.jumpTo(linkTo);
          else this.props.jumpTo.navigation.navigate(linkTo);
        }}
      >
        <View style={iconWrapper}>
          <Image
            source={icon}
            style={iconStyle}
            // PlaceholderContent={<ActivityIndicators />}
          />
        </View>
        <View style={textWrapper}>
          <Text style={textStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(HomeHeaderItem);
