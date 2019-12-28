import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import fetchTodos from './util/todo_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const wntTag = document.getElementById('content');
    const store = configureStore();
    window.store = store;
    window.fetchTodos = fetchTodos;

    ReactDOM.render(<Root store={store}/>, wntTag);
});
