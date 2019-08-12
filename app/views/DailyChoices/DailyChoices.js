import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Menu } from '../../components/';
import { colors, fonts, padding } from '../../styles/base';

class DailyChoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    const { data } = this.state;
    const { titleStyle, titleContainer } = styles;
    const menuList = data.Menus.map(m => <Menu key={m.Id} name={m.Name} dishes={m.Dishes} />);
    return (
      <View>
        <View style={titleContainer}>
          <Text style={titleStyle}>{data.Name}</Text>
          <Text>{data.dateCreated.split('T')[1].split('.')[0]}</Text>
        </View>
        {menuList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: fonts.md,
    color: colors.textPrimaryColor
  },
  titleContainer: {
    marginVertical: padding.md,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DailyChoices;
