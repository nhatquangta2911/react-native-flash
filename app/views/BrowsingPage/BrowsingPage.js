/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { CustomCarousel } from "../../components";
import styles from "./styles";
import { recipes } from "../../statics/entries";
import { headerStyle } from "../../styles/base";
import IngredientApi from "../../utils/api/IngredientApi";

export class BrowsingPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Browsing Screen",
    headerTitleStyle: { ...headerStyle, marginLeft: -4 },
    headerLeft: (
      <Icon
        name={"arrow-left"}
        size={18}
        style={{ paddingLeft: 20 }}
        color="#555"
        onPress={() => navigation.pop()}
      />
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    IngredientApi.getAll().then(res => {
      this.setState({
        recipes: res.data
      });
    });
  }

  render() {
    const { browsingContainer, textStyles, titleStyles } = styles;
    return (
      <View style={browsingContainer}>
        <Text style={titleStyles}>Browsing basic ingredients</Text>
        <CustomCarousel items={this.state.recipes} />
        <Text style={textStyles}>
          A person's body cannot produce everything that it needs to function.
          There are six essential nutrients that people need to consume through
          dietary sources to maintain optimal health
        </Text>
        <Text style={textStyles}>
          The World Health Organization (WHO)Trusted Source note that essential
          nutrients are crucial in supporting a person's reproduction, good
          health, and growth. The WHO divide these essential nutrients into two
          categories: micronutrients and macronutrients.
        </Text>
        <Text style={textStyles}>
          Micronutrients are nutrients that a person needs in small doses.
          Micronutrients consist of vitamins and minerals. Although the body
          only needs small amounts of them, a deficiency can cause ill health.
        </Text>
      </View>
    );
  }
}

export default BrowsingPage;
