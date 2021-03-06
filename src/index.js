import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Component/HomeComponnet/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import allReducers from '../src/Reduccers/CombinedReducers'
import { Provider } from 'react-redux';

const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



ReactDOM.render( 
    <Provider store={store}>
    <Main/>
    </Provider>
    ,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
