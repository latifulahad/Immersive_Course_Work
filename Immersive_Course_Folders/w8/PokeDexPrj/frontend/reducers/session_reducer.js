import { RECEIVE_ID, LOG_OUT } from '../actions/sessions_action'

const null_sess = { id: null }

const sessionReducer = (state = null_sess, action) => {
    
    switch(action.type) {
        case RECEIVE_ID:
            const { id } = action.current_user
            return Object.assign({}, { id });
        case LOG_OUT:
            return null_sess;
        default:
            return state;
    }
}

export default sessionReducer;