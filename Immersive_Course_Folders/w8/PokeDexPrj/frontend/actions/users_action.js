import { bringUser, logOut, updateUsr } from '../utils/api_util'
import { receiveErrors } from './pokemon_actions';

export const LOG_USER = "LOG_USER";
export const REMOVE_USR = "REMOVE_USR";

export const receiveUser = (user) => ({
    type: LOG_USER,
    user
})

export const removeUser = () => ({
    type: REMOVE_USR
})

export const showUser = id => dispatch => (
    bringUser(id).then(res => dispatch(receiveUser(res)))
)

export const loggOut = () => dispatch => {
    logOut().then(res => dispatch(removeUser()))
}

export const updateUser = data => dispatch => {
    updateUsr(data).then(res => dispatch(receiveUser(res))).fail(er => dispatch(receiveErrors(er.responseJSON)))
}
