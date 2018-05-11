import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/index.css';
import { Layout } from 'antd';

import Header from './header';
import Sider from './sider';
import Footer from './footer';
//import Body from './body';
import Routes from '../routes/routes'

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


export default App;
