import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';


import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer/reducer'


import {reduxDevTools} from './variables'

const store = createStore(reducer, reduxDevTools);


ReactDOM.render(
    <Provider store = {store}>
    <App/>
    </Provider>  
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
