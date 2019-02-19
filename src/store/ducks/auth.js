export const Types = {
  CHANGE_USER_NAME: 'auth/CHANGE_USER_NAME',
  CHANGE_EMAIL: 'auth/CHANGE_EMAIL',
  CHANGE_PASSWORD: 'auth/CHANGEPASSWORD',
  CHANGE_ERROR: 'auth/CHANGE_ERROR',
  CHANGE_TOKEN: 'auth/CHANGE_TOKEN',
  CHANGE_LOADING: 'auth/CHANGE_LOADING',
  CHANGE_IMAGE: 'auth/CHANGE_IMAGE',

  SET_LOGIN_REQUEST: 'auth/SET_LOGIN_REQUEST',
  SET_LOGIN_SUCCESS: 'auth/SET_LOGIN_SUCCESS',
  SET_LOGIN_ERROR: 'auth/SET_LOGIN_ERROR',

  SET_NEW_USER: 'newUser/SET_NEW_USER',
  SET_NEW_USER_ERROR: 'newUser/SET_NEW_USER_ERROR',
  SET_NEW_USER_SUCCESS: 'newUser/SET_NEW_USER_SUCCESS',
};

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  error: '',
  loading: false,
  new_user_status: '',
  token: '',
  image: '',
  id: '',
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGE_USER_NAME:
      return { ...state, username: action.payload.username };

    case Types.CHANGE_EMAIL:
      return { ...state, email: action.payload.email };

    case Types.CHANGE_PASSWORD:
      return { ...state, password: action.payload.password };

    case Types.SET_NEW_USER:
      return {
        ...state,
        loading: true,
        error: '',
        new_user_status: 0,
      };

    case Types.SET_NEW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        new_user_status: 1,
      };
    case Types.SET_NEW_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        new_user_status: 2,
      };
    case Types.SET_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        new_user_status: '',
      };
    case Types.SET_LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        token: action.payload.token,
        id: action.payload.id,
        error: '',
        loading: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  changeUsername: username => ({
    type: Types.CHANGE_USER_NAME,
    payload: {
      username,
    },
  }),
  changeEmail: email => ({
    type: Types.CHANGE_EMAIL,
    payload: {
      email,
    },
  }),
  changePassword: password => ({
    type: Types.CHANGE_PASSWORD,
    payload: {
      password,
    },
  }),
  changeToken: token => ({
    type: Types.CHANGE_TOKEN,
    payload: {
      token,
    },
  }),
  changeError: error => ({
    type: Types.CHANGE_ERROR,
    payload: {
      error,
    },
  }),
  changeImage: image => ({
    type: Types.CHANGE_IMAGE,
    payload: {
      image,
    },
  }),
  newUser: (username, email, password) => ({
    type: Types.SET_NEW_USER,
    payload: {
      username,
      email,
      password,
    },
  }),
  newUserSuccess: () => ({
    type: Types.SET_NEW_USER_SUCCESS,
  }),
  newUserError: error => ({
    type: Types.SET_NEW_USER_ERROR,
    payload: {
      error,
    },
  }),
  loginRequest: (email, passowrd) => ({
    type: Types.SET_LOGIN_REQUEST,
    payload: {
      email,
      passowrd,
    },
  }),
  loginSuccess: (username, email, token, id) => ({
    type: Types.SET_LOGIN_SUCCESS,
    payload: {
      username,
      email,
      token,
      id,
    },
  }),
  loginError: error => ({
    type: Types.SET_LOGIN_ERROR,
    payload: {
      error,
    },
  }),
};
