import { getPokemon, getPokeInfo, addPoke } from '../utils/api_util';
import { receiveItems } from './items_action';

export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_POKE = "RECEIVE_POKE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receivePokemon = (pokeList) => ({
    type: RECEIVE_POKEMON,
    pokeList
});

export const receivePoke = (pokeMn) => ({
    type: RECEIVE_POKE,
    pokeMn
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const rmErr = () => ({
    type: REMOVE_ERRORS
})

export const bringPoke = () => dispatch => {
    getPokemon().then(res => dispatch(receivePokemon(res)))
};

export const bringPokeData = (PokeId) => dispatch => {
    getPokeInfo(PokeId).then(res => { 
        dispatch(receivePoke(res.pokemon))
        dispatch(receiveItems(res.items))
    })
};

export const makePoke = (pokemon) => dispatch => (
    addPoke(pokemon).then(res => {
        dispatch(receivePoke(res.pokemon));
        return res;
    }).fail(err => dispatch(receiveErrors(err.responseJSON)))
);
