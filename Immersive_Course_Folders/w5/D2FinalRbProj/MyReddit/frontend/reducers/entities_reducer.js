import { combineReducers } from 'redux';
import threadReducer from './threads_reducer';
import postReducer from './posts_reducer';
import commentsReducer from './comments_reducer';
 
const entitiesReducer = combineReducers({
    threads: threadReducer,
    posts: postReducer,
    comments: commentsReducer
})

export default entitiesReducer;