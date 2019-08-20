import React from 'react';
import { Button as ButtonRN } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fonts, colors } from '../../styles/base';
import styles from './styles';

const { buttonRNStyles, iconStyles } = styles;

const Button = ({ title, onPress, iconName, backgroundColor }) => (
  <ButtonRN
    icon={
      <Icon style={iconStyles} name={iconName} size={fonts.sm} color={colors.buttonTextColor} />
    }
    buttonStyle={{ ...buttonRNStyles, backgroundColor }}
    title={title}
    onPress={onPress}
  />
);

export default Button;
