import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import { ConnectedRouter } from 'react-router-redux'

//import createHistory from 'history/createBrowserHistory'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import Routes from './routes/routes'

import ReduxPromise from 'redux-promise'
import reducers from './reducers/reducers'

// const store = applyMiddleware(promise)(createStore)(reducers)
//const history = createHistory()
//const middlewareHistory = routerMiddleware(history)

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
