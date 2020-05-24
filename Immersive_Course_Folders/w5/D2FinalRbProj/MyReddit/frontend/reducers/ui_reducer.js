import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import usersReducer from './user_reducer';
import user_infoReducer from './user_info_reducer';

const uiReducer = combineReducers({
    user: usersReducer,
    session: sessionReducer,
    usr_info: user_infoReducer
})

export default uiReducer;