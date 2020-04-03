export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receive_posts = (posts, num) => ({
    type: RECEIVE_POSTS,
    posts,
    num
})
