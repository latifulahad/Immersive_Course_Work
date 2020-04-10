import { RECEIVE_COMMENTS } from '../actions/comment_action';

const commentsReducer = (state = [], action) => {
    let newState = [];

    switch(action.type) {
        case RECEIVE_COMMENTS:
            newState = action.comments;
            return newState
        default:
            return state;
    }
}

export default commentsReducer;