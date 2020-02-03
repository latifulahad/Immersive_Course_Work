import { RECEIVE_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions'

const pokemonReducer = (state = {}, action) => {
    let newState = {};

    switch(action.type) {
        case RECEIVE_POKEMON:
            newState = Object.assign({}, state, action.pokeList);
            return newState;
        case RECEIVE_POKE:
            newState = Object.assign({}, state);
            newState[action.pokeMn.id] = action.pokeMn;
            return newState;
        default:
            return state;
    }
}

export default pokemonReducer;