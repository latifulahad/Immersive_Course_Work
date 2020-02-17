import { bringUser } from '../utils/api_util'

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const showUser = id => dispatch => {
    bringUser(id).then(res => dispatch(receiveUser(res)))
}
