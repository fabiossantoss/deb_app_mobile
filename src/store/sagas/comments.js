import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import { Creators as CommentActions } from 'store/ducks/comments';

export function* getComments(action) {
  try {
    const response = yield call(api.get, `/comments/${action.payload.postId}`);
     yield put(CommentActions.getCommentsSuccess(response.data));
  } catch (error) {
    yield put(CommentActions.getCommentsError(error.message));
  }
}

export function* newComment(action) {
  try {
    const response = yield call(api.post, '/comments' , {
      post_id: action.payload.postId,
      comment: action.payload.data,
    });
     yield put(CommentActions.newCommentSuccess(response.data));
  } catch (error) {
    yield put(CommentActions.newCommentError(error.message));
  }
}

export function* deleteComment(action) {
  try {
    const response = yield call(api.delete, '/comments/' + action.payload.idComment)

    const data = action.payload.data;
   if (response.status === 204) {
    data = data.filter(item => item.id !== action.payload.idComment)
   }
      yield put(CommentActions.deleteCommentSuccess(data));
  }catch(error) {

  }
}