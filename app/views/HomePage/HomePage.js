/* eslint-disable eqeqeq */
/* eslint-disable prefer-template */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from "react";
import { Text, View, Alert, BackHandler } from "react-native";
import { Image } from "react-native-elements";
import { withNavigation } from "react-navigation";
import styles from "./styles";
import { HomeHeader, ImageCarousel } from "../../components";
import { tokenHandler } from "../../utils/token";
import { AnswerApi } from "../../utils/api";
import { HandleDateTime } from "../../utils/date";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      total: 0
    };
  }

  static navigationOptions = {
    headerMode: "none",
    header: null
  };

  _onRefresh = async () => {
    this.setState({
      refreshing: true
    });
    const id = await tokenHandler.getData("id");
    const today = HandleDateTime.generateToday();
    AnswerApi.getMyAnswers(id, today)
      .then(res => {
        this.setState({
          refreshing: false,
          total: res.data.total
        });
      })
      .catch(err => Alert.alert("Error", err.message));
  };

  async componentDidMount() {
    const id = await tokenHandler.getData("id");
    const today = HandleDateTime.generateToday();
    AnswerApi.getMyAnswers(id, today)
      .then(res => {
        this.setState({
          total: res.data.total
        });
      })
      .catch(err => Alert.alert("Error", err.message));
    BackHandler.addEventListener("hardwareBackPress", () => {
      console.log(this.props.navigation.dangerouslyGetParent().state);
      if (this.props.navigation.dangerouslyGetParent().state.index == 0) {
        Alert.alert("Exit App", "Are you sure you want to log out?", [
          {
            text: "No",
            style: "cancel"
          },
          { text: "Yes", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      }
    });
  }

  render() {
    const {
      homeContainer,
      title,
      tipContainer,
      imageStyle,
      oneThird,
      twoThird
    } = styles;
    const { total } = this.state;
    return (
      <View style={homeContainer}>
        <View style={oneThird}>
          <HomeHeader navigation={this.props} answerNumber={total} />
          {/* <ScrollView
            style={scrollContainer}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => this._onRefresh()}
              />
            }
          >
            {/* <Divider /> */}
          {/* </ScrollView> */}
        </View>
        <View style={twoThird}>
          <Image
            source={require("../../assets/banners/instruction.png")}
            style={imageStyle}
          />
        </View>
        <View style={tipContainer}>
          <Text style={title}>Tips & Advice</Text>
          <ImageCarousel />
        </View>
      </View>
    );
  }
}

export default withNavigation(HomePage);
