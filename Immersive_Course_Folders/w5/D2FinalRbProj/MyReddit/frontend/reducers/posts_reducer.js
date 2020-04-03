import { RECEIVE_POST, RECEIVE_POSTS } from '../actions/post_actions';

const postReducer = (state = {}, action) => {
    let newState = {};

    switch (action.type) {
        case RECEIVE_POST:
            newState = Object.assign({}, state) //needs WORK
            return newState;
        case RECEIVE_POSTS:
            action.posts.forEach((post, id) => {
                post.link = action.num
                newState[id] = post
            })
            return newState;
        default:
            return state;
    }
}

export default postReducer;