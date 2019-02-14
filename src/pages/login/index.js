import React, { Component } from 'react';

import {
  View,
  StatusBar,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import LottieView from 'lottie-react-native';

import { colors } from 'styles';

import styles from './styles';

const local = require('../../lottie/loading.json');

class Login extends Component {
  state = {
    loading: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.green} barStyle="light-content" />

        <View style={styles.containerTitle}>
          {!this.state.loading && <Text style={styles.logoText}>DEB</Text>}
        </View>

        {!this.state.loading && (
          <View style={styles.form}>
            <TextInput
              style={styles.textInput}
              placeholder="Usuário"
              placeholderTextColor={colors.green}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Senha"
              secureTextEntry
              placeholderTextColor={colors.green}
            />
          </View>
        )}
        <View style={{ flex: 1 }}>
          {this.state.loading ? (
            <ActivityIndicator size="large" color={colors.green} />
          ) : (
            <View style={styles.viewButtons}>
              <TouchableOpacity
                onPress={() => this.setState({ loading: true, loop: true })}
                style={styles.touchable}
              >
                <Text style={styles.text}>ENTRAR</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default Login;
