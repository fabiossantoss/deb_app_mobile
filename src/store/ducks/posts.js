export const Types = {
  GET_POSTS: 'posts/GET_POSTS',
  GET_POSTS_SUCCESS: 'posts/GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'posts/GET_POSTS_ERROR',
};

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: '',
};

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_POSTS:
      return { ...state, loading: true };
    case Types.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: state.posts.concat(action.payload.posts),
        error: '',
        loading: false,
      };
    case Types.GET_POSTS_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getPosts: () => ({
    type: Types.GET_POSTS,
  }),
  getPostsSuccess: data => ({
    type: Types.GET_POSTS_SUCCESS,
    payload: {
      posts: data,
    },
  }),
  getPostsError: error => ({
    type: Types.GET_POSTS_ERROR,
    payload: {
      error,
    },
  }),
};
