import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
//import { BrowserRouter, Switch } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Main from './main';

import Routes from './routes/routes';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import ReduxPromise from 'redux-promise'
import reducers from './reducers/reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        {/* <BrowserRouter>
            <Switch>
                <Routes />
            </Switch>
        </BrowserRouter> */}

        <Main />




    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
