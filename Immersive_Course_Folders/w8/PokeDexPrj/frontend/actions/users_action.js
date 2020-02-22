import { bringUser, logOut } from '../utils/api_util'

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
