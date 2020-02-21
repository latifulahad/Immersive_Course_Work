import { bringUser } from '../utils/api_util'

export const LOG_USER = "LOG_USER";

export const receiveUser = (user) => ({
    type: LOG_USER,
    user
})

export const showUser = id => dispatch => (
    bringUser(id).then(res => dispatch(receiveUser(res)))
)
