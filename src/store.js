import {createStore} from 'redux';

// import root reducers
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  posts,
  comments
};

export const store = createStore(rootReducer, defaultState);

export default store;