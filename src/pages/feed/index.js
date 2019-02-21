import React, { Component } from 'react';

import { View, StatusBar, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { Creators as PostActions } from 'store/ducks/posts';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import { colors } from 'styles';

import styles from './styles';

class Feed extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
    title: 'DebApp',
    headerStyle: {
      backgroundColor: colors.secundary,
    },
    headerTitleStyle: {
      color: colors.white,
      flex: 1,
      textAlign: 'center',
    },
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.green} barStyle="light-content" />
        <Text>Feed count : {this.props.posts.length}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  email: state.auth.email,
});

const mapDispatchToProps = dispatch => bindActionCreators(PostActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feed);
