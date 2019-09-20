/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Image, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { darkPalette } from '../../styles/base';

class Recipe extends React.Component {
  goToDetails = () => {
    this.props.navigation.navigate('Details');
  };

  render() {
    const {
      recipeContainer,
      recipeHeader,
      recipeContent,
      textStyles,
      buttonContainer,
      title,
      titleStyles
    } = styles;

    const { name, image } = this.props;

    return (
      <View style={recipeContainer}>
        <View style={recipeHeader}>
          <Image
            source={{ uri: image }}
            style={{
              width: 'auto',
              height: '100%',
              borderRadius: 3,
              opacity: 0.8
            }}
          />
        </View>
        <View style={recipeContent}>
          <View style={title}>
            <Text style={titleStyles}>{name}</Text>
          </View>
          <View style={buttonContainer}>
            <Button
              title="Details"
              type="outline"
              titleStyle={textStyles}
              buttonStyle={{ paddingVertical: 4, borderColor: darkPalette.darkGray }}
              onPress={() => this.goToDetails()}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default withNavigation(Recipe);
