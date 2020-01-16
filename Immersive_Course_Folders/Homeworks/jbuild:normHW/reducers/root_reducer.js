import { combineReducers } from 'redux';
import gifReducer from './giphys_reducer';

const reducer = combineReducers({
    giphs: gifReducer
})

export default reducer;