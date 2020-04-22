import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_action';

const commentsReducer = (state = [], action) => {
    let newState = [];

    switch(action.type) {
        case RECEIVE_COMMENT:
            
            if(action.comment.p_comment_id) { 
                let wntId = action.comment.p_comment_id;
                newState = [...state];
                newState.forEach(cmt => {
                    if(cmt.id === wntId) { cmt.child_comments.push(action.comment) }
                })   
                return newState
             }

            newState = [...state];
            newState.push(action.comment);
            return newState;
        case RECEIVE_COMMENTS:
            newState = action.comments;
            return newState
        default:
            return state;
    }
}

export default commentsReducer;