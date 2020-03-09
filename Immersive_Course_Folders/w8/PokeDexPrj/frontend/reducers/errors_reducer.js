import { RECEIVE_ERRORS, REMOVE_ERRORS } from '../actions/pokemon_actions';

const errorsReducer = (state = [], action) => {
    let newState = [];

    switch(action.type) {
        case RECEIVE_ERRORS:
            newState = [...action.errors];
            return newState;
        case REMOVE_ERRORS:
            return newState;
        default:
            return state;
    }
}

export default errorsReducer;