import React, { Component } from 'react';

import { View, StatusBar, Text, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { Creators as PostActions } from 'store/ducks/posts';

import FeedFake from 'components/postFake';
import PostItemPessoa from 'components/postitempessoa';
 
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import { colors } from 'styles';

import styles from './styles';

class PostsPessoas extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="users" size={20} color={tintColor} />,
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
    console.tron.log('passei no pessoas');
    this.props.getPostsPessoas();
  }

  render() {
    const { loading , posts } = this.props;
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor={colors.green} barStyle="light-content" />
        {loading && (
          <View>
            <FeedFake />
            <FeedFake />
          </View>
        )
        }
        {(!loading && posts.length == 0 ) && 
        <View style={styles.postNull}>
          <Text style={styles.textpostnull}>Nenhuma postagem encontrada :(</Text>
        </View>}

        {(!loading && posts.length > 0 ) &&
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({item})=> <PostItemPessoa data={item} nav={this.props.navigation} />}
            style={styles.posts}
          />
          
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts_pessoas,
  email: state.auth.email,
  loading: state.posts.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(PostActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsPessoas);