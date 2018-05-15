import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Orders from '../components/orders/OrdersForm'
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

class OrdersIndex extends Component {
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Link to="/">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Link>
                    <Breadcrumb.Item>Orders</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 450 }}>
                   <Orders /> 
                </div>
            </Content>
        );
    }
}

export default OrdersIndex;