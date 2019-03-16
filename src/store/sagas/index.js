import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from 'store/ducks/auth';
import { Types as PostsTypes } from 'store/ducks/posts';
import { Types as CommentsTypes } from 'store/ducks/comments';

import { login, newUser } from './auth';
import { getPostsPessoas, getPostsAutomobiles } from './posts';
import { newComment, deleteComment, getComments } from './comments';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.SET_NEW_USER, newUser),
    takeLatest(LoginTypes.SET_LOGIN_REQUEST, login),

    takeLatest(PostsTypes.GET_POSTS_PESSOAS, getPostsPessoas),
    takeLatest(PostsTypes.GET_POSTS_AUTOMOBILES, getPostsAutomobiles),
    takeLatest(CommentsTypes.GET_COMMENTS, getComments),
    takeLatest(CommentsTypes.NEW_COMMENT, newComment),
    takeLatest(CommentsTypes.DELETE_COMMENT, deleteComment),
  ]);
}
