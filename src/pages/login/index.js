import React, { Component } from 'react';

import {
  View, StatusBar, Text, Animated, Easing, TextInput, TouchableOpacity,
} from 'react-native';

import LottieView from 'lottie-react-native';

import { colors } from 'styles';

import styles from './styles';

const local = require('../../lottie/cam.json');

class Login extends Component {
  state = {
    progress: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.green} barStyle="light-content" />

        <View style={styles.containerTitle}>
          <View style={{ width: 170, height: 170 }}>
            <LottieView source={local} progress={this.state.progress} />
          </View>
          <Text style={styles.logoText}>DEB</Text>
        </View>
        <View style={styles.viewButtons}>
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.text}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.text}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
