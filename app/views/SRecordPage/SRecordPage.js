/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { Component, Fragment } from 'react';
import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  Alert,
  DatePickerAndroid
} from 'react-native';
import { Searchbar, Snackbar, Button } from 'react-native-paper';
import Collapsible from 'react-native-collapsible';
import { withNavigationFocus } from 'react-navigation';
import { Answer } from '../../components';
import styles from './styles';
import { answers } from '../../statics/answers';
import AsyncStorage from '@react-native-community/async-storage';
import { AnswerApi } from '../../utils/api';
import { HandleDateTime } from '../../utils/date';

export class SRecordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      answerData: [],
      firstQuery: '',
      isVisible: false,
      refreshing: false,
      isCollapsed: false,
      isFocused: this.props.isFocused
    };
  }

  async componentDidMount() {
    this.setState({
      dates: HandleDateTime.generateRecentDates(2)
    });
    this.state.dates &&
      this.state.dates.forEach(d => {
        AnswerApi.getMyAnswers(1, d)
          .then(res => {
            this.setState({
              answerData: [...this.state.answerData, { ...res.data, date: d }],
              isCollapsed: true,
              refreshing: false
            });
          })
          .catch(err => {
            Alert.alert('Something went wrong', err.message);
            this.setState({
              refreshing: false
            });
          });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this._onRefresh();
    }
  }

  _onRefresh = async () => {
    if (this.state.isCollapsed) {
      this.setState({ isCollapsed: false });
    } else {
      this.setState({
        refreshing: true,
        answerData: [],
        isCollapsed: false,
        dates: HandleDateTime.generateRecentDates(2)
      });
      this.state.dates &&
        this.state.dates.forEach(d => {
          AnswerApi.getMyAnswers(1, d)
            .then(res => {
              this.setState({
                answerData: [
                  ...this.state.answerData,
                  { ...res.data, date: d }
                ],
                refreshing: false,
                isCollapsed: true
              });
            })
            .catch(err => {
              Alert.alert('Something went wrong', err.message);
            });
        });
    }
  };

  render() {
    const {
      answerData,
      firstQuery,
      isVisible,
      refreshing,
      isFocused
    } = this.state;
    const {
      questionContainer,
      mainContent,
      searchBar,
      titleStyles,
      textStyles,
      scrollContainer,
      dateStyle,
      pickDateTextStyles
    } = styles;
    const answerResult =
      answerData && answerData.length !== 0 ? (
        answerData.map(day => (
          <View key={answerData.indexOf(day)}>
            <Text
              style={dateStyle}
              onPress={() => {
                this._onRefresh();
                this.setState({ isCollapsed: !this.state.isCollapsed });
              }}
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
                        ingredients={answer.ingredients}
                        answer={
                          answer &&
                          answer.ingredients &&
                          answer.ingredients.reduce(
                            (prev, curr) => `${prev}${curr.name}  `,
                            ''
                          )
                        }
                        answerTime={
                          answer &&
                          answer.answerTime &&
                          answer.answerTime.split('T')[1].substring(0, 5)
                          // answer.ingredients &&
                          // answer.ingredients[0].image
                        }
                      />
                    ))}
                </ScrollView>
              </View>
            </Collapsible>
          </View>
        ))
      ) : (
        <View>
          <Text
            style={dateStyle}
            onPress={() => {
              this._onRefresh();
              this.setState({ isCollapsed: !this.state.isCollapsed });
            }}
          >
            {answerData && answerData.date}
          </Text>
          <View style={scrollContainer}>
            <Text style={textStyles}>No Answers</Text>
          </View>
        </View>
      );
    return (
      <View>
        <View style={questionContainer}>
          <View style={mainContent}>
            <Text style={titleStyles}>Collection</Text>
          </View>
          <View style={searchBar}>
            {/* <Searchbar
              placeholder='Search'
              onChangeText={query => this.setState({ firstQuery: query })}
              value={firstQuery}
              inputStyle={textStyles}
              style={{ height: 50 }}
              onSubmitEditing={() => this.setState({ isVisible: true })}
            /> */}
            <Text
              style={pickDateTextStyles}
              onPress={async () => {
                try {
                  const {
                    action,
                    year,
                    month,
                    day
                  } = await DatePickerAndroid.open({ date: new Date() });
                  if (action !== DatePickerAndroid.dismissedAction) {
                    this.setState({
                      refreshing: true,
                      answerData: [],
                      isCollapsed: false
                    });
                    let pickedDate = `${year}-${
                      month >= 9 ? month + 1 : `0${month + 1}`
                    }-${day >= 10 ? day : `0${day}`}`;
                    AnswerApi.getMyAnswers(1, pickedDate)
                      .then(res =>
                        this.setState({
                          answerData: [
                            ...this.state.answerData,
                            { ...res.data, date: pickedDate }
                          ],
                          refreshing: false,
                          isCollapsed: false
                        })
                      )
                      .catch(err => {
                        Alert.alert('Something went wrong', err.message);
                        this.setState({
                          refreshing: false,
                          isCollapsed: false
                        });
                      });
                  } else {
                    return null;
                  }
                } catch (error) {
                  Alert.alert(
                    'Something went wrong. Please try again',
                    error.message
                  );
                  this.setState({
                    refreshing: false,
                    isCollapsed: false
                  });
                }
              }}
            >
              Pick a specific date
            </Text>
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
            label: 'OK',
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

export default withNavigationFocus(SRecordPage);
