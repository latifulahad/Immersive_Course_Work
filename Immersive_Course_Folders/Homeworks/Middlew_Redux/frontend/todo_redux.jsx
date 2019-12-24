import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
    let store = configureStore(preloadedState);

    // store.dispatch = addLoggingToDispatch(store); Phase I
    // store = applyMiddlewares(store, addLoggingToDispatch); // Phase II
  
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// const addLoggingToDispatch = (store) => {
//   let dis = store.dispatch;

//   return (action) => {
//     console.log(store.getState());
//     console.log(action);
//     dis(action);
//     console.log(store.getState());
//   }
// };  //INTERNAL WORKINGS OF A TYPICAL Logging type func......

// const addLoggingToDispatch = store => next => action => {
//   console.log(store.getState());
//   console.log(action);
//   next(action);
//   console.log(store.getState());
// }; //myVersion of redux's logger


// const applyMiddlewares = (store, ...middlewares) => {
//   let dispatch = store.dispatch;

//   middlewares.forEach((midW) => {
//     dispatch = midW(store)(dispatch);
//   });

//   return Object.assign({}, store, { dispatch });
// }; //my version of redux's applyMiddleware(enhancer1, enhancer2, etc);
