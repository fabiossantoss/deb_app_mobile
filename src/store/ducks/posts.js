export const Types = {
  GET_POSTS_PESSOAS: 'posts/GET_POSTS_PESSOAS',
  GET_POSTS_PESSOAS_SUCCESS: 'posts/GET_POSTS_PESSOAS_SUCCESS',
  GET_POSTS_PESSOAS_ERROR: 'posts/GET_POSTS_PESSOAS_ERROR',

  GET_POSTS_AUTOMOBILES: 'posts/GET_POSTS_AUTOMOBILES',
  GET_POSTS_AUTOMOBILES_SUCCESS: 'posts/GET_POSTS_AUTOMOBILES_SUCCESS',
  GET_POSTS_AUTOMOBILES_ERROR: 'posts/GET_POSTS_AUTOMOBILES_ERROR',
};

const INITIAL_STATE = {
  posts_pessoas: [],
  posts_automobiles: [],
  loading: false,
  error: '',
};

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_POSTS_PESSOAS:
      return { ...state, loading: true };
    case Types.GET_POSTS_PESSOAS_SUCCESS:
      return {
        ...state,
        posts_pessoas: state.posts_pessoas.concat(action.payload.posts),
        error: '',
        loading: false,
      };
    case Types.GET_POSTS_PESSOAS_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    case Types.GET_POSTS_AUTOMOBILES:
      return { ...state, loading: true };
    case Types.GET_POSTS_AUTOMOBILES_SUCCESS:
      return {
        ...state,
        posts_automobiles: state.posts_automobiles.concat(action.payload.posts),
        error: '',
        loading: false,
      };
    case Types.GET_POSTS_AUTOMOBILES_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getPostsPessoas: () => ({
    type: Types.GET_POSTS_PESSOAS,
  }),

  getPostsPessoasSuccess: data => ({
    type: Types.GET_POSTS_PESSOAS_SUCCESS,
    payload: {
      posts: data,
    },
  }),
  getPostsPessoasError: error => ({
    type: Types.GET_POSTS_PESSOAS_ERROR,
    payload: {
      error,
    },
  }),
  getPostsAutomobiles: () => ({
    type: Types.GET_POSTS_AUTOMOBILES,
  }),

  getPostsAutomobilesSuccess: data => ({
    type: Types.GET_POSTS_AUTOMOBILES_SUCCESS,
    payload: {
      posts: data,
    },
  }),
  getPostsAutomobilesError: error => ({
    type: Types.GET_POSTS_AUTOMOBILES_ERROR,
    payload: {
      error,
    },
  }),
};
