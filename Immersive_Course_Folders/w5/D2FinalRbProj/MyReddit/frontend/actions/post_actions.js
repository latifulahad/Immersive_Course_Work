import { makePost } from '../utils/ajax_func'

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receive_post = (post, num) => ({
    type: RECEIVE_POST,
    post,
    num
})

export const receive_posts = (posts, num) => ({
    type: RECEIVE_POSTS,
    posts,
    num
})

export const createPost = (info) => dispatch => (
    makePost(info).then(res => {
        dispatch(receive_post(res.post.detail, res.post.subId));
        return(res);
    })
)