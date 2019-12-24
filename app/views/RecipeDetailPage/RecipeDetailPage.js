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
      is2Collapsed: true
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
    const nutrientsFromCarousel = this.props.nutrients;
    const nutrientsFromNavigate = navigation.getParam('nutrients', {
      cal: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
      fiber: 0,
      sugar: 0,
      description: 'update soon...'
    });
    const nutrient = nutrientsFromNavigate || nutrientsFromCarousel;
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
              <Text style={textStyles}>{nutrient.description || ''}</Text>
            </View>
          </Collapsible>
          <Text
            style={headerText}
            onPress={() => {
              this.setState({ is2Collapsed: !this.state.is2Collapsed });
            }}
          >
            Nutrients / 100g (100ml)
          </Text>
          <Collapsible collapsed={this.state.is2Collapsed}>
            <View style={nutrientContainer}>
              <CustomText.ColorText color={nutrientColor.cal} bold>
                {nutrient.cal || 0} Calories
              </CustomText.ColorText>
              <CustomText.ColorText color={nutrientColor.carbs}>
                {nutrient.carbs || 0}g Carbs
              </CustomText.ColorText>
              <CustomText.ColorText color={nutrientColor.fat}>
                {nutrient.fat || 0}g Fat
              </CustomText.ColorText>
              <CustomText.ColorText color={nutrientColor.protein}>
                {nutrient.protein || 0}g Protein
              </CustomText.ColorText>
              <CustomText.ColorText color={nutrientColor.fiber}>
                {nutrient.fiber || 0}g Fiber
              </CustomText.ColorText>
              <CustomText.ColorText color={nutrientColor.sugar}>
                {nutrient.sugar || 0}g Sugar
              </CustomText.ColorText>
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(RecipeDetailPage);
