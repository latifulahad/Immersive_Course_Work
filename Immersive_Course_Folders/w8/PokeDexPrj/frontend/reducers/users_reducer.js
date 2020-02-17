import { RECEIVE_USER } from '../actions/users_action';

const usersReducer = (state = {}, action) => {
    let newState = {};

    switch(action.type) {
        case RECEIVE_USER:
            newState = Object.assign({}, state, action.user)
            return newState
        default:
            return state;
    }
} 

export default usersReducer;