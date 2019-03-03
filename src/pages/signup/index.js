import React, { Component } from 'react';

import {
  ActivityIndicator,
  StatusBar, Text, TextInput, TouchableOpacity, ImageBackground,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from 'store/ducks/auth';

import { NavigationActions, StackActions } from 'react-navigation';

import { colors } from 'styles';

import styles from './styles';

const bg = require('../../assets/bg.png');

class SignUp extends Component {
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
          actions: [NavigationActions.navigate({ routeName: 'Home' })],
        });

        navigation.dispatch(resetAction);
      }
    }
  }

  goBack = async () => {
    await this.props.changeLoading(false);
    await this.props.navigation.goBack();
  };

  signUp = async () => {
    await this.props.newUser(
      this.props.username,
      this.props.email,
      this.props.password,
    );
  }

  render() {
    return (
      <ImageBackground source={bg} style={styles.container}>
        <StatusBar backgroundColor={colors.green} barStyle="light-content" />
        <Text style={styles.logoText}>DEB</Text>
        <TextInput
          value={this.props.username}
          onChangeText={this.props.changeUsername}
          style={styles.textInput}
          placeholder="Nome"
          placeholderTextColor={colors.white}
          underlineColorAndroid="transparent"
        />
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
          onPress={this.signUp}
          style={styles.touchable}
        >
          { this.props.loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.textTouchable}>CADASTRAR</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={this.goBack} style={styles.touchableSignUp}>
          <Text style={styles.textTouchable}>Tem cadastro? clique aqui.</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.username,
  email: state.auth.email,
  password: state.auth.password,
  token: state.auth.token,
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
