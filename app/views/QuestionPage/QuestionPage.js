/* eslint-disable max-len */
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import { Question } from '../../components';
import { questions } from '../../statics/questions';

export class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: questions
    };
  }

  render() {
    const {
      questionContainer,
      titleStyles,
      textStyles,
      scrollContainer,
      titleContainer,
      scroll
    } = styles;
    const { questionList } = this.state;
    const questionResult =
      questionList &&
      questionList.map(q => (
        <Question
          key={q && q.id}
          type={q && q.type}
          content={q && q.content}
          jumpTo={this.props.jumpTo}
        />
      ));
    return (
      <View style={questionContainer}>
        <View style={titleContainer}>
          <Text style={titleStyles}>Thanks for browsing in :) </Text>
          <Text style={textStyles}>
            It would be great if you could answer any of these question
          </Text>
        </View>
        <View style={scrollContainer}>
          <ScrollView style={scroll}>{questionResult}</ScrollView>
        </View>
      </View>
    );
  }
}

export default QuestionPage;
