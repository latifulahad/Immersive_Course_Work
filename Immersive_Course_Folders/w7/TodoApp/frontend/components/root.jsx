import { Provider } from 'react-redux';
import React from 'react';
import Todo from './todos/todo_redux';
import TodoList from './todos/todo_list_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

export default Root;