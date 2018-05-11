import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Home from '../components/Home'
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

class HomeIndex extends Component {
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Link to="/">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Link>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 450 }}>
                    <Home />
                </div>
            </Content>
        );
    }
}

export default HomeIndex;