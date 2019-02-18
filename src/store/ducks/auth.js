const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false,
  token: '',
  image: '',
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
