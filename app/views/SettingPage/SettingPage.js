import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { settingContainer, textStyles, titleButtonLoginStyle, buttonBackStyle } = styles;
    return (
      <View style={settingContainer}>
        <Text style={textStyles}>Setting Page</Text>
        <Button
          title="BACK"
          type="solid"
          titleStyle={titleButtonLoginStyle}
          buttonStyle={buttonBackStyle}
          onPress={() => this.props.jumpTo('Home')}
        />
      </View>
    );
  }
}

export default withNavigation(SettingPage);
