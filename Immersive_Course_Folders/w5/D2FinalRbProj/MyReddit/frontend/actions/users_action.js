export const LOG_USER = "LOG_USER";
export const REMOVE_USR = "REMOVE_USR";

export const receive_user = (user) => ({
    type: LOG_USER,
    user
})

export const log_out_user = () => ({
    type: REMOVE_USR  
})

