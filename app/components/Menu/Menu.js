import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { padding, fonts } from '../../styles/base';

const Menu = props => {
  const dishList = props.dishes.map(d => <Text key={d.Id}>{d.Name}</Text>);
  const { menuContainer, menuTitle, menuDishes } = styles;

  return (
    <View style={menuContainer}>
      <Text style={menuTitle}>{props.name}</Text>
      <View style={menuDishes}>{dishList}</View>
      <Button title="Choose" />
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    marginVertical: padding.sm
  },
  menuTitle: {
    fontSize: fonts.md
  },
  menuDishes: {
    paddingVertical: padding.sm,
    justifyContent: 'space-between'
  }
});

export default Menu;
