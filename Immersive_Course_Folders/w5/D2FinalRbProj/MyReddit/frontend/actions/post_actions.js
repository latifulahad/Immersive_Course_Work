import { makePost, deletePost } from '../utils/ajax_func'

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST";

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

export const removePost = (id) => ({
    type: REMOVE_POST,
    id
})

export const createPost = (info) => dispatch => (
    makePost(info).then(res => {
        dispatch(receive_post(res.post.detail, res.post.subId));
        return(res);
    })
)

export const deletePst = (id) => dispatch => (
    deletePost(id).then(res => dispatch(removePost(res.id)))
)