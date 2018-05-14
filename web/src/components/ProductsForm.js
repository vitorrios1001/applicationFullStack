import React, { Component } from 'react';
//import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductItem from './ProductItem';
import ProductNew from './ProductNew';
import ProductDetails from './ProductDetails';

import fetchProducts from '../actions/productsActions';
import { Table, Button, Icon, Modal } from 'antd';

class ProductsForm extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
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
            title: 'Title',
            dataIndex: 'title',
            render: text => <a onClick={this.showModal}>{text}</a>,
        }, {
            title: 'Price',
            dataIndex: 'price',
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


        if (!this.props.products) {
            console.log('Primeiro if')

            return (<h3>Loading...</h3>)
        }

        const Products = this.props.products.map(produto => {
            return <ProductItem key={produto._id} item={produto} />
        });

        console.log(this.props.products)

        return (
            <div>
                <Button type="primary" onClick={ProductNew}>Add</Button>

                <Button
                    style={{ marginLeft: 20 }}
                    type="primary"
                    onClick={() => this.props.fetchProducts()}>
                    <Icon type="reload" />
                </Button>

                <ProductDetails />

                <Table
                    style={{ marginTop: 10 }}
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={this.props.products}
                >
                
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.all
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ProductsForm);
