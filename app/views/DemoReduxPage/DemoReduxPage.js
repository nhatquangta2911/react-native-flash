/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import styles from './styles';
import { Child, Button, TextOutput } from '../../components';
import { buttonColors } from '../../styles/buttons';
import * as actions from '../../actions';

const DemoReduxPage = () => {
  const dispatch = useDispatch();
  const { containerStyles, textOutputStyles, buttonGroupStyles } = styles;
  return (
    <View style={containerStyles}>
      <View style={textOutputStyles}>
        <Child />
      </View>
      <View style={buttonGroupStyles}>
        <Button
          title="Increase"
          iconName="plus"
          backgroundColor={buttonColors.info}
          onPress={() => dispatch(actions.counterIncrease())}
        />
        <Button
          title="Double Increase"
          iconName="plus"
          doubleIcon="true"
          backgroundColor={buttonColors.success}
          onPress={() => dispatch(actions.counterDoubleIncrease())}
        />
        <Button
          title="Decrease"
          iconName="minus"
          backgroundColor={buttonColors.warning}
          onPress={() => dispatch(actions.counterDecrease())}
        />
      </View>
    </View>
  );
};

export default DemoReduxPage;
