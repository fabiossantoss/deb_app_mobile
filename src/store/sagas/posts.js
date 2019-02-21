import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import { Creators as PostsActions } from 'store/ducks/posts';

export function* getPosts(action) {
  try {
    const response = yield call(api.get, '/posts');
    yield put(PostsActions.getPostsSuccess(response.data));
  } catch (error) {
    yield put(PostsActions.getPostsError(error.message));
  }
}
