import { fetchSteps, addStep } from '../util/step_api_util'

export const RECEIVE_STEP = "RECEIVE_STEP";
export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveStep = (step) => ({
    type: RECEIVE_STEP,
    step
})

export const receiveSteps = (steps) => ({
    type: RECEIVE_STEPS,
    steps
})

export const removeStep = (step) => ({
    type: REMOVE_STEP,
    step
})

export const loadSteps = (td_id) => dispatch => {
    fetchSteps(td_id).then(steps => dispatch(receiveSteps(steps)))
}

export const insStep = (step, todo_id) => dispatch => {
    addStep(step, todo_id).then(step => dispatch(receiveStep(step)))
}
