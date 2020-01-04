import { 
    RECEIVE_TODOS, 
    RECEIVE_TODO,
    REMOVE_TODO } from '../actions/todo_actions';

// const initialSt = {
//     1: {
//         id: 1,
//         title: "wash car",
//         body: "with soap",
//         done: false
//     },
//     2: {
//         id: 2,
//         title: "wash dog",
//         body: "with shampoo",
//         done: true
//     }
// }

const todosReducer = (state = {}, action) => {
    let nextState = {};

    switch(action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach((todo, idx) => { nextState[todo.id] = todo });
            return nextState;
        case RECEIVE_TODO:
            const newEntryObj = {};
            newEntryObj[action.todo.id] = action.todo;
            nextState = Object.assign({}, state, newEntryObj); 
            return nextState;
        case REMOVE_TODO:
            nextState = Object.assign({}, state);
            delete nextState[action.todo.id]
            return nextState;
        default:
            return state;
    }
};

export default todosReducer;