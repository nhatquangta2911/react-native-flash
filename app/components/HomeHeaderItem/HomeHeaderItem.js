/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Image } from 'react-native-elements';
import styles from './styles';

class HomeHeaderItem extends Component {
  render() {
    const { itemContainer, itemWrapper, textStyle, iconWrapper, textWrapper } = styles;
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
            source={{ uri: '../../assets/icons/reply-all-solid.svg' }}
            style={{ width: 30, height: 30 }}
            PlaceholderContent={<ActivityIndicator />}
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
