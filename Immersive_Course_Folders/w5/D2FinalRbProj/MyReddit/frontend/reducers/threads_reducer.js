import { RECEIVE_THREAD, RECEIVE_THREADS } from '../actions/threads_actions'; 

const threadReducer = (state = [], action) => {
    let newState = [];

    switch(action.type) {
        case RECEIVE_THREAD:
            newState = Array.from(state)
            return newState.push(action.thread)
        case RECEIVE_THREADS:
            newState = Array.from(action.threads)
            return newState;
        default: 
            return state;
    }
}

export default threadReducer;