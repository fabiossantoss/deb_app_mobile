import React, { Component } from 'react';

import { View, StatusBar, Text, FlatList, AsyncStorage } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { bindActionCreators } from 'redux';
import { Creators as PostActions } from 'store/ducks/posts';
import { Creators as AuthActions } from 'store/ducks/auth';
import { Creators as CommentsActions } from 'store/ducks/comments';

import FeedFake from 'components/postFake';
import PostItemPessoa from 'components/postitempessoa';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import { colors } from 'styles';

import styles from './styles';

const actions = [{
  text: 'Pessoa',
  // icon: require('./images/ic_accessibility_white.png'),
  name: 'bt_people',
  position: 1,
}, {
  text: 'Carro',
  // icon: require('./images/ic_language_white.png'),
  name: 'bt_car',
  position: 2,
}];

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

    const token = await AsyncStorage.getItem('@DebApp:token');
    const email = await AsyncStorage.getItem('@DebApp:email');
    const id = await AsyncStorage.getItem('@DebApp:id');
    const username = await AsyncStorage.getItem('@DebApp:username');

    this.props.loginSuccess(username, email, token, id, '');

    await this.props.getPostsPessoas();
  }

  profile = async (data) => {
    this.props.navigation.navigate('Profile', {
      id: data,
    });
  }

  detail = async (data) => {
    console.tron.log(this.props);
  }

  comment = async (postId) => {
    this.props.getCommentsSuccess([]);
    await this.props.navigation.navigate('Comments' , {
      postId,
    });
  }

  information = async (data) => {
    alert('information');
  }

  paginate = async () => {
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
              onEndReachedThreshold={0.5}
              onEndReached={this.paginate}
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
        <FloatingAction
          actions={actions}
          position="right"
          showBackground={true}
          color="#0DD"
          onPressItem={
          (name) => {
            console.log(`selected button: ${name}`);
          }
        }
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts_pessoas,
  email: state.auth.email,
  loading: state.posts.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...PostActions, ...AuthActions, ...CommentsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsPessoas);
