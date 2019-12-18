/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CustomCarousel } from '../../components';
import styles from './styles';
import { recipes } from '../../statics/entries';
import { headerStyle, dimensions } from '../../styles/base';
import IngredientApi from '../../utils/api/IngredientApi';

export class BrowsingPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Browsing Screen',
    headerTitleStyle: { ...headerStyle, marginLeft: -4 },
    headerLeft: (
      <Icon
        name={'arrow-left'}
        size={18}
        style={{ paddingLeft: 20 }}
        color='#555'
        onPress={() => navigation.pop()}
      />
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      isLoading: true
    };
  }

  componentDidMount() {
    IngredientApi.getAll().then(res => {
      this.setState({
        isLoading: false,
        recipes: res.data
      });
    });
  }

  render() {
    const { browsingContainer, textStyles, titleStyles } = styles;
    return (
      <View>
        {this.state.isLoading ? (
          <View
            style={{
              height: dimensions.containerHeight,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <ActivityIndicator size='large' />
            <Text style={textStyles}>Loading</Text>
          </View>
        ) : (
          <View style={browsingContainer}>
            <Text style={titleStyles}>
              Browsing basic ingredients and activities
            </Text>
            <CustomCarousel items={this.state.recipes} />
            <Text style={textStyles}>
              An ingredient is a substance that forms part of a mixture (in a
              general sense). For example, in cooking, recipes specify which
              ingredients are used to prepare a specific dish. Many commercial
              products contain secret ingredients that are purported to make
              them better than competing products. In the pharmaceutical
              industry, an active ingredient is that part of a formulation that
              yields the effect expected by the customer.
            </Text>
            <Text style={textStyles}>
              Take a quick look at any items. It would be perfectly useful for
              you to apply a balanced diet.
            </Text>
          </View>
        )}
      </View>
    );
  }
}

export default BrowsingPage;
