import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';

const uiReducer = combineReducers({
    session: sessionReducer,
    user: usersReducer
})

export default uiReducer;