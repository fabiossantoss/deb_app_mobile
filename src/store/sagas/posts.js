import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import { Creators as PostsActions } from 'store/ducks/posts';

export function* getPostsPessoas() {
  try {
    const response = yield call(api.get, '/pessoas');
    yield put(PostsActions.getPostsPessoasSuccess(response.data.data));
  } catch (error) {
    yield put(PostsActions.getPostsPessoasError(error.message));
  }
}

export function* getPostsAutomobiles() {
  try {
    const response = yield call(api.get, '/automobiles');
    yield put(PostsActions.getPostsAutomobilesSuccess(response.data.data));
  } catch (error) {
    yield put(PostsActions.getPostsAutomobilesError(error.message));
  }
}
