import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const configureStore = (preloadedState = { ui: { session: 3 }}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
)

export default configureStore;