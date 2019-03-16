export const Types = {
  GET_COMMENTS: 'comments/GET_COMMENTS',
  GET_COMMENTS_ERROR: 'comments/GET_COMMENTS_ERROR',
  GET_COMMENTS_SUCCESS: 'comments/GET_COMMENTS_SUCCESS',
  NEW_COMMENT: 'comments/NEW_COMMENT',
  NEW_COMMENT_SUCCESS: 'comments/NEW_COMMENT_SUCCESS',
  NEW_COMMENT_ERROR: 'comments/NEW_COMMENT_ERROR',
  DELETE_COMMENT: 'comments/DELETE_COMMENT',
  DELETE_COMMENT_SUCCESS: 'comments/DELETE_COMMENT_SUCCESS',
};
const INITIAL_STATE = {
  data: [],
  postId: {},
  loading: false,
  loadingComments: true,
  error: {},
  newCommentData: [],
  newCommentLoading: false,
  newCommentError: {},
};

export default function comments(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_COMMENTS:
      return {
        ...state,
        postId: action.payload.postId,
        loadingComments: true,
      };
    case Types.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loadingComments: false,
      };
    case Types.NEW_COMMENT:
      return {
        ...state,
        newCommentLoading: true,
        newCommentData: action.payload.data,
        newCommentError: {},
      };
    case Types.NEW_COMMENT_ERROR:
      return {
        ...state,
        newCommentLoading: false,
        newCommentError: action.payload.error,
      };
    case Types.NEW_COMMENT_SUCCESS:
      return {
        ...state,
        newCommentLoading: false,
        newCommentError: {},
        data: state.data.concat(action.payload.data),
      };
    case Types.DELETE_COMMENT_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
      };
    }
    default:
      return state;
  }
}
export const Creators = {
  getComments: postId => ({
    type: Types.GET_COMMENTS,
    payload: {
      postId,
    },
  }),
  getCommentsSuccess: data => ({
    type: Types.GET_COMMENTS_SUCCESS,
    payload: {
      data,
    },
  }),
  newComment: (data, postId) => ({
    type: Types.NEW_COMMENT,
    payload: {
      data,
      postId,
    },
  }),
  newCommentSuccess: data => ({
    type: Types.NEW_COMMENT_SUCCESS,
    payload: {
      data,
    },
  }),
  newCommentError: error => ({
    type: Types.NEW_COMMENT_ERROR,
    payload: {
      error,
    },
  }),
  deleteComment: (data, idComment) => ({
    type: Types.DELETE_COMMENT,
    payload: {
      data,
      idComment,
    },
  }),
  deleteCommentSuccess: data => ({
    type: Types.DELETE_COMMENT_SUCCESS,
    payload: {
      data,
    },
  }),
};
