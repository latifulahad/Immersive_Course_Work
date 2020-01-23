import { getPokemon } from '../utils/api_util';

export const RECEIVE_POKEMON = "RECEIVE_POKEMON"

export const receivePokemon = (pokeList) => ({
    type: RECEIVE_POKEMON,
    pokeList
})

export const bringPoke = () => dispatch => {
    getPokemon().then(res => dispatch(receivePokemon(res)))
}
