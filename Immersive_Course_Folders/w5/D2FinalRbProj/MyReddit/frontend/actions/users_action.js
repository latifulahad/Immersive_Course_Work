import { create_user } from '../utils/ajax_func';
import { receive_id } from './sessions_action';

export const LOG_USER = "LOG_USER";
export const REMOVE_USR = "REMOVE_USR";

export const receive_user = (user) => ({
    type: LOG_USER,
    user
})

export const logOut_user = () => ({
    type: REMOVE_USR  
})

export const makeUser = (inputInfo) => dispatch => (
    create_user(inputInfo).then(res => {
        dispatch(receive_id(res.id));
        dispatch(receive_user(res));
        return(res);
    })
)