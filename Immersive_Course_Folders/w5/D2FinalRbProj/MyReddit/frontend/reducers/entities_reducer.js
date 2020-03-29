import { combineReducers } from 'redux';
import threadReducer from './threads_reducer';
 
const entitiesReducer = combineReducers({
    threads: threadReducer
})

export default entitiesReducer;