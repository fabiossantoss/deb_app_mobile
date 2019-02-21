import React, { Component } from 'react';

import { View, StatusBar, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import { colors } from 'styles';

import styles from './styles';

class Explore extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="search" size={20} color={tintColor} />,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.green} barStyle="light-content" />

        <Text>Explore</Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Explore);
