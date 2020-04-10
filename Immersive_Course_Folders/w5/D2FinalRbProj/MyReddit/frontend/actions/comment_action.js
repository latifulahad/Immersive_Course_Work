import { bringComments } from '../utils/ajax_func';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const receive_comments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const bringCmts = (id) => dispatch => (
    bringComments(id).then(res => dispatch(receive_comments(res)))
)
