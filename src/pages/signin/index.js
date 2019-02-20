import React, { Component } from 'react';

import {
  ActivityIndicator,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from 'store/ducks/auth';

import { NavigationActions, StackActions } from 'react-navigation';

import { colors } from 'styles';

import styles from './styles';

const bg = require('../../assets/bg.png');

class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidUpdate(prevProps) {
    this.verifyStatus(prevProps);
  }

  verifyStatus = async (prevProps) => {
    const { navigation, token } = this.props;

    if (token !== prevProps.token) {
      if (token) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'TabNavigator' })],
        });

        navigation.dispatch(resetAction);
      }
    }
  }

  signin = async () => {
    await this.props.loginRequest(this.props.email, this.props.password);
  }

  signUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <ImageBackground source={bg} style={styles.container}>
        <StatusBar backgroundColor={colors.green} barStyle="light-content" />
        <Text style={styles.logoText}>DEB</Text>
        <TextInput
          value={this.props.email}
          onChangeText={this.props.changeEmail}
          style={styles.textInput}
          placeholder="E-mail"
          placeholderTextColor={colors.white}
          underlineColorAndroid="transparent"
        />
        <TextInput
          value={this.props.password}
          onChangeText={this.props.changePassword}
          style={styles.textInput}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor={colors.white}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity
          onPress={this.signin}
          style={styles.touchable}
        >
          { this.props.loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.textTouchable}>ENTRAR</Text>
          )}

        </TouchableOpacity>

        <TouchableOpacity onPress={this.signUp} style={styles.touchableSignUp}>
          <Text style={styles.textTouchable}>Ainda não tem cadastro? clique aqui.</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  token: state.auth.token,
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
