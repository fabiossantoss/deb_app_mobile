import React, { Component } from 'react';

import { View, FlatList, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import ActionSheet from 'react-native-actionsheet';


import Icon from 'react-native-vector-icons/FontAwesome';
import { Creators as CommentsActions } from 'store/ducks/comments';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CommentItem from 'components/commentsitem';

import styles from './styles';

class Comments extends Component {
  state = {
    comment: '',
  }

  async componentDidMount() {
    const pId = await this.props.navigation.getParam('postId');
    if (pId) {
      console.tron.clear();
      console.tron.log(pId);
      await this.props.getComments(pId);
    }
  }

  newComment = async () => {
    const { comment } = this.state;
    const { postId } = this.props.comments;

    if (comment.length === 0) return;
    await this.props.newComment(comment, postId);
    await this.setState({ comment: '' });
  }

  deleteValidation = async (index) => {
    if (index === 0) {
      await this.props.deleteComment(this.props.comments.data, this.state.comment.id)
    }
  }

  deletecomment = async (item) => {
    await this.setState({ comment: item });
    if (parseInt(item.user_id) === parseInt(this.props.auth.id)) {
      await this.ActionSheet.show();
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        { this.props.comments.loadingComments ? (
          <View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
            <ActivityIndicator size="large" color='#b33' />
          </View>
        ) : (
        <FlatList
            data={this.props.comments.data}
            keyExtractor={item => String(item.id)}
            style={{ flex: 1, marginBottom: 22 }}
            renderItem={({ item }) => <CommentItem deletecomment={this.deletecomment} nav={this.props.navigation} data={item} />}
          />
          )
        }
        <View style={{ height: 60, justifyContent: 'flex-end', flexDirection: 'column' }}>
          <View style={styles.divider} />
          <View style={styles.container}>
            <TextInput
              underlineColorAndroid="transparent"
              onChangeText={(item) => this.setState({ comment: item})}
              value={this.state.comment}
              placeholderTextColor="#000"
              autoCorrect={false}
              multiline
              numberOfLines={4}
              maxLength={1000}
              placeholder="Escreve um comentário..."
              style={styles.input}
            />
            <TouchableOpacity
            onPress={this.newComment}
              style={{
                width: 40,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
              <Icon name="paper-plane" size={20} color="#4169e1" />
            </TouchableOpacity>
          </View>
        </View>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Excluir o comentário?'}
          options={['Excluir', 'Cancelar']}
          cancelButtonIndex={1}
          destructiveButtonIndex={0}
          onPress={async (index) => { this.deleteValidation(index) }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(CommentsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);
