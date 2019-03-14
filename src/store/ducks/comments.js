export const Types = {
  SET_COMMENTS: 'comments/SET_COMMENTS',
  NEW_COMMENT_REQUEST: 'comments/NEW_COMMENT_REQUEST',
  NEW_COMMENT_SUCCESS: 'comments/NEW_COMMENT_SUCCESS',
  NEW_COMMENT_ERROR: 'comments/NEW_COMMENT_ERROR',
};
const INITIAL_STATE = {
  data: [],
  postId: {},
  loading: false,
  error: {},
};

export default function comments(state = INITIAL_STATE, action) {
  console.tron.log(action);
  switch (action.type) {
    case Types.SET_COMMENTS:
      return { ...state, data: action.payload.data, postId: action.payload.postId };
    case Types.NEW_COMMENT_SUCCESS:
      return { ...state, data: state.comments.concat(action.payload.data) };
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
  newCommentRequest: () => ({
    type: Types.NEW_COMMENT_REQUEST,
  }),
  newComment: data => ({
    type: Types.NEW_COMMENT_SUCCESS,
    payload: {
      data,
    },
  }),
};
