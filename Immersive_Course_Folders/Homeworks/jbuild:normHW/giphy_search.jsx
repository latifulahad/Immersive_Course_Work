import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import getGif from './util/api_util'
import { receiveGifs } from './actions/giphy_actions'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    window.getG = getGif;
    window.receiveG = receiveGifs;
})