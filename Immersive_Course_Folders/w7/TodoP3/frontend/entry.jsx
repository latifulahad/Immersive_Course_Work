import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const wntTag = document.getElementById('content');
    const store = configureStore();
    
    window.store = store;
    
    ReactDOM.render(<Root store={store}/>, wntTag);
});
