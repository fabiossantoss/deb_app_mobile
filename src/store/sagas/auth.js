import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import { Creators as LoginActions } from 'store/ducks/auth';
import { AsyncStorage } from 'react-native';

export function* login(action) {
  try {
    const response = yield call(api.post, '/session', {
      email: action.payload.email,
      password: action.payload.password,
    });

    if (response.data.token && response.data.type && response.data.type === 'bearer') {

      let fileUrl = '';
      if (response.data.user.file.length > 0) {
        fileUrl = response.data.user.file[0].url;
      }

      console.tron.log(response.data);
      yield put(
        LoginActions.loginSuccess(
          response.data.user.username,
          response.data.user.email,
          response.data.token,
          response.data.user.id,
          fileUrl,
        ),
      );

      // grava no banco local as informações de login

      yield response.data.user.username && AsyncStorage.setItem('@DebApp:username', response.data.user.username);
      yield response.data.token && AsyncStorage.setItem('@DebApp:token', response.data.token);
      yield response.data.user.email && AsyncStorage.setItem('@DebApp:email', response.data.user.email);
      yield String(response.data.user.id) && AsyncStorage.setItem('@DebApp:id', String(response.data.user.id));
      yield fileUrl && AsyncStorage.setItem('@DebApp:image', fileUrl);
    }
  } catch (error) {
    let messageText = 'Não foi possível se conectar, verifique as informações de entrada, ou se há conexão com a internet!';

    if (error.response !== undefined) {
      if (error.response.data[0].field !== undefined && error.response.data[0].field === 'email') {
        messageText = 'email inválido';
      } else if (
        error.response.data[0].field !== undefined
        && error.response.data[0].field === 'password'
      ) {
        messageText = 'senha inválida';
      }
    }
    alert(messageText);

    yield put(LoginActions.loginError(messageText));
    yield AsyncStorage.removeItem('@DebApp:username');
    yield AsyncStorage.removeItem('@DebApp:token');
    yield AsyncStorage.removeItem('@DebApp:email');
    yield AsyncStorage.removeItem('@DebApp:id');
    yield AsyncStorage.removeItem('@DebApp:image');
  }
}

// export function* forgot(action) {
//   try {
//     const response = yield call(api.post, '/password/forgot', {
//       email: action.payload.email,
//     });

//     if (response.data.result !== undefined && response.data.result) {
//       const messageText = `Código de alteração de senha enviado para o e-mail : ${
//         action.payload.email
//       }`;
//       alert(messageText);
//       // showMessage({
//       //   message: messageText,
//       //   type: 'success',
//       //   duration: 3000,
//       // });
//     }
//   } catch (error) {
//     let messageText = 'Não foi possível se conectar, verifique as informações de entrada, ou se há conexão com a internet!';
//     console.tron.log(error);
//     if (error.response !== undefined) {
//       if (error.response.data.message !== undefined) {
//         messageText = error.response.data.message;
//       }
//     }

//     alert(messageText);

//     // showMessage({
//     //   message: messageText,
//     //   type: 'danger',
//     //   duration: 3000,
//     // });

//     yield AsyncStorage.removeItem('@DebApp:username');
//     yield AsyncStorage.removeItem('@DebApp:token');
//     yield AsyncStorage.removeItem('@DebApp:usertype');
//   }
// }

export function* newUser(action) {
  try {
    const response = yield call(api.post, '/users', {
      username: action.payload.username,
      email: action.payload.email,
      password: action.payload.password,
    });


    if (response.data.token && response.data.type && response.data.type === 'bearer') {

      let fileUrl = '';
      if (response.data.user.file.length > 0) {
        fileUrl = response.data.user.file[0].url;
      }

      console.tron.log(response.data);
      yield put(
        LoginActions.loginSuccess(
          response.data.user.username,
          response.data.user.email,
          response.data.token,
          response.data.user.id,
          fileUrl,
        ),
      );

      // grava no banco local as informações de login

      yield response.data.user.username && AsyncStorage.setItem('@DebApp:username', response.data.user.username);
      yield response.data.token && AsyncStorage.setItem('@DebApp:token', response.data.token);
      yield response.data.user.email && AsyncStorage.setItem('@DebApp:email', response.data.user.email);
      yield String(response.data.user.id) && AsyncStorage.setItem('@DebApp:id', String(response.data.user.id));
      yield fileUrl && AsyncStorage.setItem('@DebApp:image', fileUrl);
    }
  } catch (error) {
    const messageText = 'Error ao cadastrar o usuário!';

    alert(messageText);

    yield put(LoginActions.newUserError(error));
    yield AsyncStorage.removeItem('@DebApp:username');
    yield AsyncStorage.removeItem('@DebApp:email');
    yield AsyncStorage.removeItem('@DebApp:id');
  }
}
