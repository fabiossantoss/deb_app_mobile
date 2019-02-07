import React, { Component } from 'react';

import { View, ImageBackground, StatusBar } from 'react-native';

import styles from './styles';

class Login extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#FAD87D" />
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={require('../../imagens/background_login.png')}
        />
      </View>
    );
  }
}

export default Login;
