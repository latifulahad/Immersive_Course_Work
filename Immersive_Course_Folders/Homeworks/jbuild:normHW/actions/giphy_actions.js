import getGif from '../util/api_util';

export const RECEIVE_SEARCH_GIFS = "RECEIVE_SEARCH_GIFS";

export const receiveGifs = (giphys) => ({
    type: RECEIVE_SEARCH_GIFS,
    giphys
})

export const bringGifs = (wrd) => dispatch => {
    getGif(wrd).then(res => dispatch(receiveGifs(res.data)))
}
