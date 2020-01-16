import { RECEIVE_SEARCH_GIFS } from '../actions/giphy_actions';

const gifReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_SEARCH_GIFS:
            return action.giphys;
        default:
            return state;
    }
}

export default gifReducer;