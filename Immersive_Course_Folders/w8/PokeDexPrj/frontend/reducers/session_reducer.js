import { RECEIVE_CURRENT_USER, LOG_OUT } from '../actions/sessions_action'


const null_sess = { id: null }

const sessionReducer = (state = null_sess, action) => {
    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.current_user});
        case LOG_OUT:
            return null_sess;
        default:
            return state;
    }
}

export default sessionReducer;