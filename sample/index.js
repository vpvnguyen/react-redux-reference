import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

// action - describes what you want to do // function that will return an object
const increment = () => {
    return {
        type: 'increment',
    }
}

const decrement = () => {
    return {
        type: 'decrement',
    }
}

// reducer - describes how actions transform from one state to the next state
const counter = (state = 0, action) => {
    // increment or decrement based on type of action
    switch(action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
    }
};

// create a STORE to hold global state
// let store = createStore(reducer)
let store = createStore(counter);

// display it in the counter
store.subscribe(() => {
    console.log(store.getState())
})

// dispatch - send action from action to reducer
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
