import { getPokemon, getPokeInfo } from '../utils/api_util';
import { receiveItems } from './items_action';

export const RECEIVE_POKEMON = "RECEIVE_POKEMON"
export const RECEIVE_POKE = "RECEIVE_POKE"

export const receivePokemon = (pokeList) => ({
    type: RECEIVE_POKEMON,
    pokeList
})

export const receivePoke = (pokeMn) => ({
    type: RECEIVE_POKE,
    pokeMn
})

export const bringPoke = () => dispatch => {
    getPokemon().then(res => dispatch(receivePokemon(res)))
}

export const bringPokeData = (PokeId) => dispatch => {
    getPokeInfo(PokeId).then(res => { 
        dispatch(receivePoke(res.pokemon))
        dispatch(receiveItems(res.items))
    })
}
