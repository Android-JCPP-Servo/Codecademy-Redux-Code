/* Note to learners: 
Normally, you would import redux like this:

import { createStore } from 'redux';

Due to Codecademy's technical limitations 
for testing this exercise, we are using 
`require()`.
*/
import { createStore } from 'redux';
// const { createStore } = require('redux');

// Action Creators
function increment() { 
    return {type: 'increment'}
}

function decrement() { 
    return {type: 'decrement'}
}

// Reducer / Store
const initialState = 0;
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment': return state + 1; 
        case 'decrement': return state - 1; 
        default: return state;
    }
};  
const store = createStore(countReducer);

// HTML Elements
const counterElement = document.getElementById('counter');
const incrementer = document.getElementById('incrementer');
const decrementer = document.getElementById('decrementer');

// Store State Change Listener
const render = () => {
    counterElement.innerHTML = store.getState();
}
render();
store.subscribe(render);
// DOM Event Handlers
const incrementerClicked = () => {
    store.dispatch(increment());
}
incrementer.addEventListener('click', incrementerClicked);

const decrementerClicked = () => {
    store.dispatch(decrement());
}
decrementer.addEventListener('click', decrementerClicked);