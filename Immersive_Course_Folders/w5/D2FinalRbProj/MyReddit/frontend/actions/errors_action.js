export const RESET = "RESET";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const clr_state = () => ({ type: RESET })

export const add_error = (res) => ({
    type: RECEIVE_ERROR,
    res
})
