export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOG_OUT = "LOG_OUT";

export const receive_user = (id) => ({
    type: RECEIVE_CURRENT_USER,
    current_user: id
})

export const log_out = () => ({
    type: LOG_OUT
})