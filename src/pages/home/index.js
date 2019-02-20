import React, { Component } from 'react';

import { View, StatusBar, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import { colors } from 'styles';

import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    TabBarIcon: ({ tintColor }) => <Icon name="car" size={30} color={tintColor} />,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.green} barStyle="light-content" />
        <Text>Home</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Home);
