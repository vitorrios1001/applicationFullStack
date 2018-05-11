import React, { Component } from 'react';

//import { Router, Route, Redirect } from 'react-router'

import ProductsForm from '../components/ProductsForm';
import Home from '../components/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

//import { createBrowserHistory } from 'history';

//const history = createBrowserHistory();

//import createHistory from 'history/createBrowserHistory'
//const history = createHistory()

export default class Routes extends Component {
    render() {
        //const { router, params, location, routes } = this.props

        return (
            <BrowserRouter>
                <Switch>

                    <Route path='/' exact={true} component={Home} />
                    <Route path='/product' component={ProductsForm} />


                </Switch>
            </BrowserRouter>
        )
    }
}





