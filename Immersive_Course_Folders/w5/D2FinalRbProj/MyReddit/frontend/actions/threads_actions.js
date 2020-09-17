import { threadsInx, threadShow } from '../utils/ajax_func'
import { receive_posts } from './post_actions';

export const RECEIVE_THREAD = "RECEIVE_THREAD";
export const RECEIVE_THREADS = "RECEIVE_THREADS";

export const receiveThread = (thread) => ({
    type: RECEIVE_THREAD,
    thread
})

export const receiveThreads = (threads) => ({
    type: RECEIVE_THREADS,
    threads
})

export const bringThread = (id) => dispatch => {
    threadShow(id).then(res => {
        dispatch(receive_posts(res.thread.posts, res.thread.id))
        dispatch(receiveThread(res.thread));   
    })
}

export const bringThreads = () => dispatch => {
    threadsInx().then(res => dispatch(receiveThreads(res)))
}
