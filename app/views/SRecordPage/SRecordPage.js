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
import { HandleDateTime } from "../../utils/date";

export class SRecordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      answerData: [],
      firstQuery: "",
      isVisible: false,
      refreshing: false,
      isCollapsed: true
    };
  }

  async componentDidMount() {
    this.setState({
      dates: HandleDateTime.generateRecentDates(3)
    });
    const id = await AsyncStorage.getItem("id");
    this.state.dates &&
      this.state.dates.forEach(d => {
        AnswerApi.getMyAnswers(id, d)
          .then(res => {
            this.setState({
              answerData: [...this.state.answerData, { ...res.data, date: d }]
            });
          })
          .catch(err => {
            Alert.alert("Something went wrong", err.message);
          });
      });
  }

  _onRefresh = async () => {
    this.setState({
      refreshing: true,
      answerData: [],
      isCollapsed: true,
      dates: HandleDateTime.generateRecentDates(3)
    });
    const id = await AsyncStorage.getItem("id");
    this.state.dates &&
      this.state.dates.forEach(d => {
        AnswerApi.getMyAnswers(id, d)
          .then(res => {
            this.setState({
              answerData: [...this.state.answerData, { ...res.data, date: d }],
              refreshing: false,
              isCollapsed: false
            });
          })
          .catch(err => {
            Alert.alert("Something went wrong", err.message);
          });
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
    const answerResult =
      answerData &&
      answerData.map(day => (
        <View key={answerData.indexOf(day)}>
          <Text
            style={dateStyle}
            onPress={() =>
              this.setState({ isCollapsed: !this.state.isCollapsed })
            }
          >
            {day && day.date}
          </Text>
          <Collapsible collapsed={this.state.isCollapsed}>
            <View style={scrollContainer}>
              <ScrollView style={scrollContainer}>
                {day &&
                  day.answers &&
                  day.answers.map(answer => (
                    <Answer
                      key={answer.id}
                      question={answer.id}
                      answer={
                        answer &&
                        answer.ingredients &&
                        answer.ingredients.reduce(
                          (prev, curr) => `${prev}${curr.name}  `,
                          ""
                        )
                      }
                      image={
                        answer &&
                        answer.ingredients &&
                        answer.ingredients[0].image
                      }
                    />
                  ))}
              </ScrollView>
            </View>
          </Collapsible>
        </View>
      ));
    return (
      <View>
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
          <ScrollView
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
      </View>
    );
  }
}

export default SRecordPage;
