import { combineReducers } from 'redux';
import threadReducer from './threads_reducer';
import postReducer from './posts_reducer';
 
const entitiesReducer = combineReducers({
    threads: threadReducer,
    posts: postReducer
})

export default entitiesReducer;