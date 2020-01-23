import { RECEIVE_POKEMON } from '../actions/pokemon_actions'

const pokemonReducer = (state = {}, action) => {
    let newState = {};

    switch(action.type) {
        case RECEIVE_POKEMON:
            newState = Object.assign({}, state, action.pokeList);
            return newState;
        default:
            return state;
    }
}

export default pokemonReducer;