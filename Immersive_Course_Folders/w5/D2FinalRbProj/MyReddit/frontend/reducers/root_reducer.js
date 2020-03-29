import { combineReducers } from 'redux';
import uiReducer from './ui_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    ui: uiReducer
})

export default rootReducer;
