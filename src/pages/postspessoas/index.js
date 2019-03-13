import React, { Component } from 'react';

import { View, StatusBar, Text, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { Creators as PostActions } from 'store/ducks/posts';
import { Creators as CommentActions } from 'store/ducks/comments';

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

  async componentDidMount() {
    await this.props.getPostsPessoas();
  }

  profile = async (data) => {
    this.props.navigation.navigate('Profile', {
      id: data,
    });
  }

  detail = async (data) => {
    alert('detail');
  }

  comment = async (data) => {
    await this.props.setComments(data.comments);
    await this.props.navigation.navigate('Comments');
  }

  information = async (data) => {
    alert('information');
  }

  render() {
    const { loading , posts } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.yellow} barStyle="light-content" />
        {loading && (
          <View>
            <FeedFake />
            <FeedFake />
          </View>
        )
        }
        {
          (!loading && posts.length == 0 ) &&
            <View style={styles.postNull}>
              <Text style={styles.textpostnull}>Nenhuma postagem encontrada :(</Text>
            </View>
        }
        {(!loading && posts.length > 0) 
        && <FlatList
              data={posts}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item})=>
              <PostItemPessoa
                  data={item}
                  nav={this.props.navigation}
                  profile={this.profile}
                  detail={this.detail}
                  information={this.information}
                  comment={this.comment} />
              }
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

const mapDispatchToProps = dispatch => bindActionCreators({ ...PostActions, ...CommentActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsPessoas);
