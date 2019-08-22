import React from 'react';
import { View } from 'react-native';
import { Button as ButtonRN } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fonts, colors } from '../../styles/base';
import styles from './styles';

const { buttonRNStyles, iconStyles, doubleIconStyles } = styles;

const Button = ({ title, onPress, iconName, backgroundColor, doubleIcon }) => (
  <ButtonRN
    icon={
      doubleIcon ? (
        <View style={doubleIconStyles}>
          <Icon name={iconName} size={fonts.sm} color={colors.buttonTextColor} />
          <Icon name={iconName} size={fonts.sm} color={colors.buttonTextColor} />
        </View>
      ) : (
        <Icon style={iconStyles} name={iconName} size={fonts.sm} color={colors.buttonTextColor} />
      )
    }
    buttonStyle={{ ...buttonRNStyles, backgroundColor }}
    title={title}
    onPress={onPress}
  />
);

export default Button;
