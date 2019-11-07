/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { Component, Fragment } from "react";
import { Text, View, ScrollView, RefreshControl, Alert } from "react-native";
import { Searchbar, Snackbar } from "react-native-paper";
import Collapsible from "react-native-collapsible";
import { Answer } from "../../components";
import styles from "./styles";
import { answers } from "../../statics/answers";
import AsyncStorage from "@react-native-community/async-storage";
import { AnswerApi } from "../../utils/api";
import handleDateTime from "../../utils/string/handleDateTime";

export class SRecordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerData: [],
      firstQuery: "",
      isVisible: false,
      refreshing: false,
      isCollapsed: false
    };
  }

  async componentDidMount() {
    const id = await AsyncStorage.getItem("id");
    AnswerApi.getMyAnswers(
      id,
      handleDateTime.transferDate(new Date(Date.now()))
    )
      .then(res => {
        this.setState({
          answerData: res.data && res.data.map(d => d.ingredients)
        });
        Alert.alert("Success", res.data.length.toString());
      })
      .catch(err => {
        Alert.alert("Something went wrong", err.message);
      });
  }

  _onRefresh = async () => {
    this.setState({ refreshing: true, answerData: [], isCollapsed: true });
    const id = await AsyncStorage.getItem("id");
    AnswerApi.getMyAnswers(id, "2019-11-07")
      .then(res => {
        this.setState({
          refreshing: false,
          isCollapsed: false,
          answerData: res.data && res.data.map(d => d.ingredients)
        });
      })
      .catch(err => {
        Alert.alert("Something went wrong", err.message);
      });
  };

  render() {
    const { answerData, firstQuery, isVisible, refreshing } = this.state;
    const {
      questionContainer,
      mainContent,
      searchBar,
      titleStyles,
      textStyles,
      scrollContainer,
      dateStyle
    } = styles;
    const answerResult = answerData
      // .filter(a => a[0].includes(firstQuery))
      .map(a => (
        <Answer
          key={answerData.indexOf(a)}
          question={a}
          answer={a && a.map(a => a.name).join(", ")}
          image={a && a[0] && a[0].image}
        />
      ));
    return (
      <Fragment>
        <View style={questionContainer}>
          <View style={mainContent}>
            <Text style={titleStyles}>SRecord</Text>
            <Text style={textStyles}>This is all you need</Text>
          </View>
          <View style={searchBar}>
            <Searchbar
              placeholder="Search"
              onChangeText={query => this.setState({ firstQuery: query })}
              value={firstQuery}
              inputStyle={textStyles}
              style={{ height: 50 }}
              onSubmitEditing={() => this.setState({ isVisible: true })}
            />
          </View>
          <ScrollView>
            <Text
              style={dateStyle}
              onPress={() =>
                this.setState({ isCollapsed: !this.state.isCollapsed })
              }
            >
              {handleDateTime.transferDate(new Date(Date.now()))}
            </Text>
            <Collapsible collapsed={this.state.isCollapsed}>
              <View style={scrollContainer}>
                <ScrollView
                  style={scrollContainer}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={() => this._onRefresh()}
                    />
                  }
                >
                  {answerResult}
                </ScrollView>
              </View>
            </Collapsible>
          </ScrollView>
        </View>
        <Snackbar
          visible={isVisible}
          onDismiss={() => this.setState({ isVisible: false })}
          duration={5000}
          action={{
            label: "OK",
            onPress: () => {
              this.setState({ isVisible: false });
            }
          }}
        >
          {firstQuery}
        </Snackbar>
      </Fragment>
    );
  }
}

export default SRecordPage;
