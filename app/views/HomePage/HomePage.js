import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header/Header';
import HelloWorld from '../../components/HelloWorld/HelloWorld';
import Test from '../../components/Test/Test';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header />
        <HelloWorld />
        <Test />
      </View>
    );
  }
}

export default HomePage;
