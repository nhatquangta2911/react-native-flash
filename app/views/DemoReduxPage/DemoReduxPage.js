import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Child, Button, TextOutput } from '../../components';
import { buttonColors } from '../../styles/buttons';

class DemoReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
