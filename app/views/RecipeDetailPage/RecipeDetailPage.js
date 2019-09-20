/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class RecipeDetailPage extends Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null
  };
  render() {
    const { recipeDetailContainer, textStyles } = styles;
    return (
      <View style={recipeDetailContainer}>
        <Text style={textStyles}> Recipe Detail Page </Text>
      </View>
    );
  }
}
