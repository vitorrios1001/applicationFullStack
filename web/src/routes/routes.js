import React, { Component } from 'react';

import ProductsIndex from '../pages/productsIndex';
import HomeIndex from '../pages/homeIndex';

import { Route } from 'react-router-dom'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route path='/' exact={true} component={HomeIndex} />
                <Route path='/products' component={ProductsIndex} />
            </div>
        )
    }
}





