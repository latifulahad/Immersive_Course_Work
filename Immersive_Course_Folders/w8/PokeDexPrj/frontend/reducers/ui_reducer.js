import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';

const uiReducer = combineReducers({
    session: sessionReducer
    
})

export default uiReducer;