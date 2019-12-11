import { combineReducers } from 'redux';
import reducer from './todos_reducer';

const rootReducer = combineReducers({
    todos: reducer
});

export default rootReducer;