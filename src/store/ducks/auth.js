const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: '',
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AuthReducer;
