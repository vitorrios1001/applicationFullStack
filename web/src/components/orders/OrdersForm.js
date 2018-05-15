import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Modal, Table, Icon, Card } from 'antd';

import fetchOrders from './../../actions/ordersActions';
//import { Link } from 'react-router-dom'


class OrdersForm extends Component {

    componentDidMount() {
        this.props.fetchOrders()
    }

    state = {
        visible: false,
        selectDetails: {},
        items: []
    }

    showModal = (e) => {
        
        this.setState({
            visible: true,
            selectDetails: e,
            items: e.items
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        const columns = [{
            title: 'NumberOrder',
            dataIndex: 'number',
            render: (text, record) =>
                <a
                    key={record._id}
                    onClick={() => this.showModal(record)}>
                    {record.number}
                </a>,
        }, {
            title: 'Status',
            dataIndex: 'status',
        }, {
            title: 'Create Date',
            dataIndex: 'createDate'
        }];

        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        
        const listItems = this.state.items.map(item => {
            return (
                <div>
                    <Card style={{ width: 470 }}>
                        <p>Title: {item.product.title}</p>
                        <p>Description: {item.product.description}</p>
                        <p>Slug: {item.product.slug}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: {item.product.price}</p>
                    </Card>
                </div>
            )
        })

        console.log(this.state.items)

        return (
            <div>
                <Button type="primary" >Add</Button>

                <Button
                    style={{ marginLeft: 20 }}
                    type="primary"
                    onClick={() => this.props.fetchOrders()}>
                    <Icon type="reload" />
                </Button>


                <Modal
                    title="Order Detail"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Number: {this.state.selectDetails.number}</p>
                    <p>Create Date: { this.state.selectDetails.createDate }</p>
                    <p>Status: {this.state.selectDetails.status}</p>
                    <p>Itens: </p>
                    {listItems}

                </Modal>

                <Table
                    style={{ marginTop: 10 }}
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={this.props.orders}
                >

                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    orders: state.orders.allOrders
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchOrders
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(OrdersForm);
