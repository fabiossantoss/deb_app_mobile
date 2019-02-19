import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from 'store/ducks/auth';
import { login, forgot, newUser } from './auth';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.SET_NEW_USER, newUser),
    takeLatest(LoginTypes.SET_LOGIN_REQUEST, login),
    // takeLatest(LoginTypes.LOGIN_FORGOT_REQUEST, forgot),
  ]);
}
