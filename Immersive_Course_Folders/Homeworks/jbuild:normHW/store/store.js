import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/root_reducer';

const configureStore = () => {
    return createStore(reducer)
}

export default configureStore;