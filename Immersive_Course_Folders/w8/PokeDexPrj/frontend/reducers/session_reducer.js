import { RECEIVE_ID, LOG_OUT } from '../actions/sessions_action'
const null_sess = { id: null }

const sessionReducer = (state = null_sess, action) => {
    switch(action.type) {
        case RECEIVE_ID:
            return { id: action.id };
        case LOG_OUT:
            return null_sess;
        default:
            return state;
    }
}

export default sessionReducer;
