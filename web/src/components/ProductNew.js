import React, { Component } from 'react';
//import { Link } from 'react-router-dom'

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

//import ProductItem from './ProductItem';


import { Button } from 'antd';

class ProductNew extends Component {

    

    render() {


        return (
            <div>
              <Button type="primary">New Item</Button>  
            </div>
        )
    }
}
/*
const mapStateToProps = state => ({
    products: state.products.all
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts
}, dispatch);
*/

export default /*connect(mapStateToProps, mapDispatchToProps)*/(ProductNew);
