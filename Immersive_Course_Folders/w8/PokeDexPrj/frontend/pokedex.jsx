import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { getPokemon } from './utils/api_util'
import { bringPoke } from './actions/pokemon_actions'
import chgPokeState from './reducers/selector'

document.addEventListener('DOMContentLoaded', () => {
    const wntTag = document.getElementById("root");
    const store = configureStore();
    
    window.store = store;
    
    ReactDOM.render(<Root store={store}/>, wntTag);
})
