import React from 'react';
import { Button as ButtonRN } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fonts, colors } from '../../styles/base';

const Button = ({ title, onPress, bgColor, textColor }) => (
  <ButtonRN
    icon={<Icon name="plus" size={fonts.md} color={colors.buttonTextColor} />}
    style={{ marginBottom: 10 }}
    backgroundColor={bgColor}
    title={title}
    color={textColor}
    onPress={onPress}
  />
);

export default Button;
