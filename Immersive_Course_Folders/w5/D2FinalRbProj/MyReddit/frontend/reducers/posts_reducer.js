import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from '../actions/post_actions';

const postReducer = (state = {}, action) => {
    let newState = {};

    switch (action.type) {
        case RECEIVE_POST:
            newState = Object.assign({}, state)
            action.post.link = action.num
            newState[action.post.id] = action.post;
            return newState;
        case RECEIVE_POSTS:
            action.posts.forEach((post, id) => {
                post.link = action.num
                newState[post.id] = post
            })
            return newState;
        case REMOVE_POST:
            newState = Object.assign({}, state);
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default postReducer;