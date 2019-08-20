import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Child, Button } from '../../components';
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
        </View>
        <View style={buttonGroupStyles}>
          <Button
            title="Increase"
            textColor={buttonColors.textColor}
            bgColor={buttonColors.success}
            onPress={this.handleIncrease}
          />
          <Button
            title="Decrease"
            textColor={buttonColors.textColor}
            bgColor={buttonColors.danger}
            onPress={this.handleDecrease}
          />
        </View>
      </View>
    );
  }
}

export default DemoReduxPage;
