import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import usersReducer from './user_reducer';

const uiReducer = combineReducers({
    user: usersReducer,
    session: sessionReducer
})

export default uiReducer;