import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import comments from './comments';
import posts from './posts';

// root reducer reduces the other reducers
const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;