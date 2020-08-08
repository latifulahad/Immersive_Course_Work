import { create_user, brgUsrInfo, updateUsr } from '../utils/ajax_func';
import { receive_id } from './sessions_action';
import { add_error } from './errors_action';

export const LOG_USER = "LOG_USER";
export const REMOVE_USR = "REMOVE_USR";
export const BRING_USR_INFO = "BRING_USR_INFO";

export const receive_user = (user) => ({
    type: LOG_USER,
    user
})

export const logOut_user = () => ({
    type: REMOVE_USR  
})

export const receive_usr_info = (user) => ({
    type: BRING_USR_INFO,
    user
})


export const makeUser = (inputInfo) => dispatch => (
    create_user(inputInfo).then(res => {
        if(res.error) {
            dispatch(add_error(res.error));
            return(res)
        } else {
            dispatch(receive_id(res.id));
            dispatch(receive_user(res));
            return(res);
        }
    })
)

export const bringUsrInfo = (inputInfo) => dispatch => (
    brgUsrInfo(inputInfo).then(res => {
        dispatch(receive_usr_info(res));
        return(res);
    })
)

export const updateUsrInfo = (id, inputInfo) => dispatch => (
    updateUsr(id, inputInfo).then(res => {
        dispatch(receive_user(res));
        return(res);  
    })
)