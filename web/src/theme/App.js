import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'antd/dist/antd.css';
import './css/index.css';
import { Layout } from 'antd';

import Header from './header';
import Sider from './sider';
import Footer from './footer';
import LoginIndex from '../pages/loginIndex';
//import Body from './body';
// import Routes from '../routes/routes'

import { Route } from 'react-router-dom'
import Login from '../pages/loginIndex'
import HomeIndex from '../pages/homeIndex';
import ProductsIndex from '../pages/productsIndex';
import ProductNew from '../components/products/ProductNew';
import OrdersIndex from '../pages/ordersIndex';

class App extends Component {
  
  render() {

   
      
    

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider />

          <Layout>
            <Header />
            
            <Route path='/' component={HomeIndex}/>
            <Route path='/products' component={ProductsIndex} />
            <Route path='/products-new' component={ProductNew} />
            <Route path='/orders' component={OrdersIndex} />
            {/* <Routes /> */}

            <Footer />
          </Layout>
        </Layout>
      </div>

      // <Login />
    );


  }
}

// const mapStateToProps = state => ({
//   logged: state.login.logged
// })

export default App;
