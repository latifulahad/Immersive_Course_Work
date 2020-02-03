import { RECEIVE_ITEMS } from './../actions/items_action';

const itemsReducer = (state = {}, action) => {
    let newState = {}

    switch(action.type) {
        case RECEIVE_ITEMS:
            newState = Object.assign({}, state, action.items)
            return newState
        default:
            return state
    }
}

export default itemsReducer;