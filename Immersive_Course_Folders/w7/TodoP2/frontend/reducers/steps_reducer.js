import {
    RECEIVE_STEP,
    RECEIVE_STEPS,
    REMOVE_STEP
} from '../actions/step_actions';

const initialStore = {
    1: {
        title: "get 2 buckets",
        done: false,
        todo_id: 1
    },
    2: {
        title: "prep p_washer",
        done: false,
        todo_id: 1
    }
}

const stepsReducer = (state = initialStore, action) => {
    Object.freeze(state);
    let newState = {};

    switch (action.type) {
        case RECEIVE_STEP:
            let bool = false;
            newState = Object.assign({}, state);
            for (let ky in newState) {
                if (newState[ky].title === action.step.title) {
                    newState[ky] = action.step;
                    bool = true;
                }
            }
            if (bool === false) {
                let newKy = Object.keys(newState).length + 1;
                newState[newKy] = action.step
            }
            return newState;
        case RECEIVE_STEPS:
            newState = Object.assign({}, state, action.steps);
            return newState;
        case REMOVE_STEP:
            newState = Object.assign({}, state);
            for (let obj in newState) {
                if (newState[obj].todo_id === action.step.todo_id && newState[obj].title === action.step.title) {
                    delete newState[obj];
                }
            }
            return newState;
        default:
            return state;
    }

}

export default stepsReducer;