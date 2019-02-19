import React, { Component } from 'react';

import { View, StatusBar, Text } from 'react-native';

import { colors } from 'styles';

import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    title: 'Feed',
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.green} barStyle="light-content" />

        <Text>Main</Text>
      </View>
    );
  }
}

export default Home;
