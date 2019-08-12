import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { padding, fonts, colors, rates, margin } from '../../styles/base';
import { buttonDimensions, buttonColors } from '../../styles/buttons';
import { shadow } from '../../styles/mixin';

const Menu = props => {
  const dishList = props.dishes && props.dishes.map(d => <Text key={d.Id}>{d.Name}</Text>);
  const { menuContainer, menuTitle, menuDishes, buttonChooseStyle, buttonChooseContainer } = styles;
  console.log(dishList);

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

const styles = StyleSheet.create({
  menuContainer: {
    ...shadow,
    marginVertical: margin.sm,
    borderRadius: rates.borderRadius,
    color: colors.borderLight,
    paddingHorizontal: padding.md,
    paddingVertical: padding.md
  },
  menuTitle: {
    fontSize: fonts.md,
    fontWeight: 'bold',
    color: colors.primary
  },
  menuDishes: {
    paddingVertical: padding.sm,
    justifyContent: 'space-between'
  },
  buttonChooseStyle: {
    paddingVertical: buttonDimensions.buttonPadding,
    paddingHorizontal: buttonDimensions.buttonPadding * 2,
    color: buttonColors.textColor,
    ...shadow,
    borderRadius: rates.borderRadius,
    backgroundColor: buttonColors.primary
  },
  buttonChooseContainer: {
    alignItems: 'flex-end'
  }
});

export default Menu;
