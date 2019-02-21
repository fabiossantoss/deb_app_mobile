export const Types = {
  GET_POSTS: 'posts/GET_POSTS',
};

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: '',
};

export default function posts(state = INITIAL_STATE, action) {
  return state;
}

export const Creators = {
  getPosts: () => ({
    type: Types.GET_POSTS,
  }),
};
