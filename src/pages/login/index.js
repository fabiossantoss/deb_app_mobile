import React, { Component } from 'react';

import {
  View,
  StatusBar,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { colors } from 'styles';

import styles from './styles';

const bg = require('../../assets/bg.png');

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    loading: false,
  };

  signUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <ImageBackground source={bg} style={styles.container}>
        <StatusBar backgroundColor={colors.green} barStyle="light-content" />
        <Text style={styles.logoText}>DEB</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Usuário"
          placeholderTextColor={colors.white}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor={colors.white}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity
          onPress={() => this.setState({ loading: true, loop: true })}
          style={styles.touchable}
        >
          <Text style={styles.textTouchable}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.signUp} style={styles.touchableSignUp}>
          <Text style={styles.textTouchable}>Ainda não tem cadastro? clique aqui.</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

export default Login;
