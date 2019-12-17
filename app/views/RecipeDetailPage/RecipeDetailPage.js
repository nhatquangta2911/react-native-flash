/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import Collapsible from 'react-native-collapsible';
import { Image } from 'react-native-elements';
import { Text as CustomText } from '../../components';
import styles from './styles';
import { headerStyle, nutrientColor } from '../../styles/base';

class RecipeDetailPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name', 'Recipe Detail'),
    headerTitleStyle: { ...headerStyle, marginLeft: -4 }
  });

  constructor(props) {
    super(props);
    this.state = {
      is1Collapsed: false,
      is2Collapsed: false
    };
  }

  render() {
    const {
      recipeDetailContainer,
      scrollContainer,
      textStyles,
      nutrientStyle,
      headerText,
      imageStyle,
      nutrientContainer
    } = styles;
    const { navigation } = this.props;
    const nutrients = navigation.getParam('nutrients', {
      cal: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
      fiber: 0,
      sugar: 0,
      description: 'update soon...'
    });
    return (
      <View style={recipeDetailContainer}>
        <Image
          source={{
            uri: navigation.getParam(
              'image',
              'https://wpes.org.uk/wp-content/uploads/2018/02/default-banner.jpg'
            )
          }}
          style={imageStyle}
        />
        <ScrollView style={scrollContainer}>
          <Text
            style={headerText}
            onPress={() => {
              this.setState({ is1Collapsed: !this.state.is1Collapsed });
            }}
          >
            Serving Information
          </Text>
          <Collapsible collapsed={this.state.is1Collapsed}>
            <View style={nutrientStyle}>
              <Text style={textStyles}>{nutrients.description}</Text>
            </View>
          </Collapsible>
          <Text
            style={headerText}
            onPress={() => {
              this.setState({ is2Collapsed: !this.state.is2Collapsed });
            }}
          >
            Nutrients
          </Text>
          <Collapsible collapsed={this.state.is2Collapsed}>
            <View style={nutrientContainer}>
              <CustomText.ColorText color={nutrientColor.cal} bold>
                {nutrients.cal} Calories
              </CustomText.ColorText>
              <CustomText.ColorText color={nutrientColor.carbs}>
                {nutrients.carbs}g Carbs
              </CustomText.ColorText>
              <CustomText.ColorText color={nutrientColor.fat}>
                {nutrients.fat}g Fat
              </CustomText.ColorText>
              <CustomText.ColorText color={nutrientColor.protein}>
                {nutrients.protein}g Protein
              </CustomText.ColorText>
              <CustomText.ColorText color={nutrientColor.fiber}>
                {nutrients.fiber}g Fiber
              </CustomText.ColorText>
              <CustomText.ColorText color={nutrientColor.sugar}>
                {nutrients.sugar}g Sugar
              </CustomText.ColorText>
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(RecipeDetailPage);
