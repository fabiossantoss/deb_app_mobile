import { combineReducers } from 'redux';

import auth from './auth';
import posts from './posts';
import comments from './comments';

export default combineReducers({
  auth,
  posts,
  comments,
});
