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
import Routes from '../routes/routes'

import { Route } from 'react-router-dom'
import Login from '../pages/loginIndex'

class App extends Component {

  render() {
    
      return (
        <div>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider />

            <Layout>
              <Header />

              <Routes />

              <Footer />
            </Layout>
          </Layout>
        </div>
      );
   

  }
}

const mapStateToProps = state => ({
  logged: state.login.logged
})

export default App;
