import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/root_reducer';

const configureStore = (preloadedState = { giphs: [] }) => {
    return createStore(reducer, preloadedState, applyMiddleware(thunk))
}

export default configureStore;