import { log_user } from '../utils/ajax_func';
import { receive_user } from './users_action';

export const RECEIVE_ID = "RECEIVE_ID";
export const LOG_OUT = "LOG_OUT";

export const receive_id = (id) => ({
    type: RECEIVE_ID,
    id
});

export const log_out = () => ({
    type: LOG_OUT
})

export const login_user = (inputData) => dispatch => (
    log_user(inputData).then(res => {
        dispatch(receive_id(res.id));
        dispatch(receive_user(res));
        return res;
    })
)
