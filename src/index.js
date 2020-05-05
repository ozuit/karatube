import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import 'babel-polyfill';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

async function asyncTest () {
    let test = await myAsyncfunc();
    console.log(test);
}

async function myAsyncfunc () {
    return new Promise(resolve => {
        setTimeout(resolve("async/await now runs"), 1000);
    })
}

const store = createStore(reducers);

window.onload = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById('app'));
    asyncTest();
};
