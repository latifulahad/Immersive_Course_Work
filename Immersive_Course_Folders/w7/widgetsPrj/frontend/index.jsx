import React from 'react';
import ReactDom from 'react-dom';
import Widget from './widget';
 

document.addEventListener('DOMContentLoaded', () => {
    const wntedTag = document.getElementById('root');
    ReactDom.render(<Widget />, wntedTag);
})