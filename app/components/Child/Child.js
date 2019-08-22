import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class Child extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
  }

  render() {
    const { childStyles } = styles;
    return (
      <View>
        <Text style={childStyles}>{this.props.counter}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(
  mapStateToProps,
  null
)(Child);
