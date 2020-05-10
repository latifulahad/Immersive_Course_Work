import { bringComments, makeComt } from '../utils/ajax_func';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const receive_comment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

export const receive_comments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const bringCmts = (id) => dispatch => (
    bringComments(id).then(res => dispatch(receive_comments(res)))
)

export const makeComment = (info) => dispatch => (
    makeComt(info).then(res => {
        dispatch(receive_comment(res));
        return(res);
    })
)
