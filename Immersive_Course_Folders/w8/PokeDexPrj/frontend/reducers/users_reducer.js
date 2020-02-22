import { LOG_USER, REMOVE_USR } from '../actions/users_action';

const usersReducer = (state = {}, action) => {
    let newState = {};

    switch(action.type) {
        case LOG_USER:
            newState = Object.assign({}, state, action.user)
            return newState;
        case REMOVE_USR:
            return newState;
        default:
            return state;
    }
} 

export default usersReducer;