import React, { Component } from 'react';

import { View, FlatList } from 'react-native';

import { Creators as CommentsActions } from 'store/ducks/comments';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CommentItem from 'components/commentsitem';
import CommentsArea from 'components/commentsarea';

class Comments extends Component {
  render() {
    console.tron.clear();
    console.tron.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.comments}
          keyExtractor={item => item.id}
          style={{ flex: 1 }}
          renderItem={({ item }) => <CommentItem nav={this.props.navigation} data={item} />}
        />
        <CommentsArea />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(CommentsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);
