import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const wntTag = document.getElementById("root")
    const store = configureStore();

    window.st = store;
    ReactDOM.render(<Root store={store}/>, wntTag)
})
