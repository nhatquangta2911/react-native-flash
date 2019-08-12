import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const { menuContainer, menuTitle, menuDishes, buttonChooseStyle, buttonChooseContainer } = styles;

const Menu = props => {
  const dishList = props.dishes.map(d => <Text key={d.Id}>{d.Name}</Text>);

  return (
    <View style={menuContainer}>
      <Text style={menuTitle}>{props.name}</Text>
      <View style={menuDishes}>{dishList}</View>
      <TouchableOpacity style={buttonChooseContainer}>
        <Text style={buttonChooseStyle}>Choose</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
