import { RECEIVE_TODOS } from '../actions/todo_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';

const initialSt = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
}

const reducer = (state = initialSt, action) => {
    switch(action.type) {
        case RECEIVE_TODOS:
            const newTodo = {};
            action.todos.forEach((todo, idx) => { newTodo[idx + 1] = todo });
            return newTodo;
        case RECEIVE_TODO:
            const newEntryI = (Object.keys(state).length + 1);
            const newEntryObj = {};
            newEntryObj[newEntryI] = action.todo;
            return Object.assign(state, newEntryObj); 
        default:
            return state;
    }
};

export default reducer;