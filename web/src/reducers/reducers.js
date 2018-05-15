import { combineReducers } from 'redux'

import productsReducer from './productsReducer';
import ordersReducer from'./ordersReducer';

const rootReducer = combineReducers({
    products : productsReducer,
    orders: ordersReducer
})

export default rootReducer;