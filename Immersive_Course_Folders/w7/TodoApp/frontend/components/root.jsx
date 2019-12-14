import { Provider } from 'react-redux';
import React from 'react';
import TodoListContainer from './todos/todo_list_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <TodoListContainer />
    </Provider>
)

export default Root;