import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { blogContainer, titleStyles, textStyles } = styles;
    return (
      <View style={blogContainer}>
        <Text style={titleStyles}>Blog Page</Text>
        <Text style={textStyles}>Coming soon...</Text>
      </View>
    );
  }
}

export default BlogPage;
