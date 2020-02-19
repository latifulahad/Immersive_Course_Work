import { logUserIn } from '../utils/api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOG_OUT = "LOG_OUT";

export const receive_user = ({ id }) => ({
    type: RECEIVE_CURRENT_USER,
    current_user: id
})

export const log_out = () => ({
    type: LOG_OUT
})

export const log_in_usr = info => dispatch => {
    logUserIn(info).then(res => { 
        dispatch(receive_user(res))
    }).then(res => dispatch(showUser(res.id)))
}

//make sure to setup for error handling w/.fail(err => corresActionCreator)