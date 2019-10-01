import React, { Component, Fragment } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Searchbar, Snackbar } from 'react-native-paper';
import { Answer } from '../../components';
import styles from './styles';
import { answers } from '../../statics/answers';

export class SRecordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerData: answers,
      firstQuery: '',
      isVisible: false
    };
  }
  render() {
    const { answerData, firstQuery, isVisible } = this.state;
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
      .filter(a => a.answer.includes(firstQuery))
      .map(a => <Answer key={a && a.id} answer={a && a.answer} />);
    return (
      <Fragment>
        <View style={questionContainer}>
          <View style={mainContent}>
            <Text style={titleStyles}>SRecord</Text>
            <Text style={textStyles}>This is all you need</Text>
          </View>
          <Text style={dateStyle}>26th September 2019</Text>
          <View style={searchBar}>
            <Searchbar
              //TODO: Dropdown later
              placeholder="Search"
              onChangeText={query => this.setState({ firstQuery: query })}
              value={firstQuery}
              inputStyle={textStyles}
              style={{ height: 50 }}
              onSubmitEditing={() => this.setState({ isVisible: true })}
            />
          </View>
          <View style={scrollContainer}>
            <ScrollView style={scrollContainer}>{answerResult}</ScrollView>
          </View>
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
      </Fragment>
    );
  }
}

export default SRecordPage;
