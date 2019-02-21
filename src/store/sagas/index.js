import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from 'store/ducks/auth';
import { Types as PostsTypes } from 'store/ducks/posts';
import { login, forgot, newUser } from './auth';
import { getPosts } from './posts';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.SET_NEW_USER, newUser),
    takeLatest(LoginTypes.SET_LOGIN_REQUEST, login),
    takeLatest(PostsTypes.GET_POSTS, getPosts),
    // takeLatest(LoginTypes.LOGIN_FORGOT_REQUEST, forgot),
  ]);
}
