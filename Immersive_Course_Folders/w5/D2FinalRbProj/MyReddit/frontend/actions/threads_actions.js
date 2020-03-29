import { threadsInx } from '../utils/ajax_func'

export const RECEIVE_THREAD = "RECEIVE_THREAD";

export const receiveThreads = (threads) => ({
    type: RECEIVE_THREAD,
    threads
})

export const bringThreads = () => dispatch => {
    threadsInx().then(res => dispatch(receiveThreads(res)))
}