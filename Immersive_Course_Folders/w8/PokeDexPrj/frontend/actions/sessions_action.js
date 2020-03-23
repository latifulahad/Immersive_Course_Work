import { logUserIn } from '../utils/api_util';

export const RECEIVE_ID = "RECEIVE_ID";
export const LOG_OUT = "LOG_OUT";

export const receive_user = (id) => ({
    type: RECEIVE_ID,
    id
})

export const log_out = () => ({
    type: LOG_OUT
})

export const log_in_usr = info => dispatch => (
    logUserIn(info).then(res => {
        dispatch(receive_user(res.id));
        return(res);
    })
)
