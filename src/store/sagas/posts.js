import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import { Creators as PostsActions } from 'store/ducks/posts';

export function* getPosts(action) {
  try {
    const response = yield call(api.get, '/posts');
    console.tron.log(response);
  } catch (error) {
    console.tron.log(error);
  }
}
