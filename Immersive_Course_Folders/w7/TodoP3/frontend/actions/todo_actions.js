import { fetchTodos, addTodo } from '../util/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo
})

export const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos
})

export const removeTodo = (todo) => ({
    type: REMOVE_TODO,
    todo
})

export const bringTodos = () => dispatch => {
    fetchTodos().then((resObj) => { 
        let todos = resObj; 
        dispatch(receiveTodos(todos))
     })
}

export const createTodo = (tdo) => dispatch => (
    addTodo(tdo).then((res) => {
        let todo = res;
        dispatch(receiveTodo(todo))
    })
)
