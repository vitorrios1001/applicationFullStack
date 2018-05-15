import React, { Component } from 'react';

import ProductsIndex from '../pages/productsIndex';
import ProductNew from '../pages/productNew'
import HomeIndex from '../pages/homeIndex';
import OrdersIndex from '../pages/ordersIndex';
import LoginIndex from '../pages/loginIndex';

import { Route } from 'react-router-dom'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route path='/' exact={true} component={HomeIndex} />
                <Route path='/products' component={ProductsIndex} />
                <Route path='/products-new' component={ProductNew} />
                <Route path='/orders' component={OrdersIndex} />
                <Route path='/login' component={LoginIndex} />
            </div>
        )
    }
}





