import { RECEIVE_THREAD } from '../actions/threads_actions'; 

const threadReducer = (state = [], action) => {
    let newState = [];

    switch(action.type) {
        case RECEIVE_THREAD:
            newState = Array.from(action.threads)
            return newState;
        default: 
            return state;
    }
}

export default threadReducer;