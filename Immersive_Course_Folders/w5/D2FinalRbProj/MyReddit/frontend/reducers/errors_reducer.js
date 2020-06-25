import { RECEIVE_ERROR, RESET } from '../actions/errors_action';

const errorsReducer = (state = [], action) => {
    let newState = [];

    switch(action.type) {
        case RESET:
            return newState = [];
        case RECEIVE_ERROR:
            newState.push(action.res);
            return newState;
        default:
            return state;
    }
}

export default errorsReducer;