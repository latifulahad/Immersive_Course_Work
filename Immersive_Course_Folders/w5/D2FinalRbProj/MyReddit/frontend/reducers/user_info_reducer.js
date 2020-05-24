import { BRING_USR_INFO } from '../actions/users_action';

const user_infoReducer = (state = {}, action) => {
    let newState = {};
     
    switch(action.type) {
        case BRING_USR_INFO:
            newState = Object.assign({}, action.usr)
            return newState;
        default:
            return state;
    }
}

export default user_infoReducer;