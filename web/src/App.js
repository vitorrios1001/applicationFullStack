import React, { Component } from 'react';
import './App.css';
// import LoginForm from './components/Login';
// import RegisterForm from './components/RegisterForm';
// import ProductsForm from './components/ProductsForm';

import Routes from './routes/routes';

// import { applyMiddleware, createStore } from 'redux'
// import { Provider } from 'react-redux'

// import ReduxPromise from 'redux-promise'
// import reducers from './reducers/reducers'

// const store = applyMiddleware(promise)(createStore)(reducers)

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// const store = createStoreWithMiddleware(reducers);

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <ProductsForm />
      // </Provider>
      <div>

        <Routes />
      </div>

    );
  }
}

export default App;
