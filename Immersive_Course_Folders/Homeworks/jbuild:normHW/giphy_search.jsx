import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { bringGifs } from './actions/giphy_actions'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;

    const wntTag = document.getElementById("root");
    ReactDOM.render(<Root store={ store }/>, wntTag)
})