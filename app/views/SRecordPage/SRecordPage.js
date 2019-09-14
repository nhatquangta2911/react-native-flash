import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
import { Searchbar, Snackbar } from 'react-native-paper';
import styles from './styles';

export class SRecordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstQuery: '',
      isVisible: false
    };
  }
  render() {
    const { firstQuery, isVisible } = this.state;
    const { questionContainer, mainContent, searchBar, titleStyles, textStyles } = styles;
    return (
      <Fragment>
        <View style={questionContainer}>
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
          <View style={mainContent}>
            <Text style={titleStyles}>SRecord</Text>
            <Text style={textStyles}>This is all you need</Text>
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
