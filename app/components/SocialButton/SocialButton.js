import React from 'react';
import { SocialIcon as SocialMediaIcon } from 'react-native-elements';
import { StringHandler } from '../../utils/string';
import { fonts, sizes } from '../../styles/base';

const SocialIcon = ({ type, isLoading }) => (
  <SocialMediaIcon
    type={type}
    title={`Sign In With ${StringHandler.capitalizeFirstLetter(type)}`}
    fontFamily={fonts.regular}
    fontWeight="200"
    button
    loading={isLoading}
    light
    style={{ height: sizes.buttonHeight }}
  />
);

export default SocialIcon;
