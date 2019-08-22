/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Child, Button, TextOutput } from '../../components';
import { buttonColors } from '../../styles/buttons';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class DemoReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleIncrease = () => {
    this.props.counterIncrease();
  };

  handleDecrease = () => {
    this.props.counterDecrease();
  };

  render() {
    const { containerStyles, textOutputStyles, buttonGroupStyles } = styles;
    return (
      <View style={containerStyles}>
        <View style={textOutputStyles}>
          <Child />
          <TextOutput />
        </View>
        <View style={buttonGroupStyles}>
          <Button
            title="Increase"
            iconName="plus"
            backgroundColor={buttonColors.info}
            onPress={this.handleIncrease}
          />
          d
          <Button
            title="Decrease"
            iconName="minus"
            backgroundColor={buttonColors.warning}
            onPress={this.handleDecrease}
          />
        </View>
      </View>
    );
  }
}

export default DemoReduxPage;
