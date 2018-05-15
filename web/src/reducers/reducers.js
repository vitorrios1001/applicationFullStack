import { combineReducers } from 'redux'

import productsReducer from './productsReducer';
import ordersReducer from'./ordersReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    products : productsReducer,
    orders: ordersReducer,
    login: loginReducer
})

export default rootReducer;