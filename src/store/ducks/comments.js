export const Types = {
  SET_COMMENTS: 'comments/SET_COMMENTS',
};
const INITIAL_STATE = {
  data: [],
  post_user: [],
  loading: false,
  error: {},
};

export default function comments(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_COMMENTS:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}
export const Creators = {
  setComments: data => ({
    type: Types.SET_COMMENTS,
    payload: {
      data,
    },
  }),
};
