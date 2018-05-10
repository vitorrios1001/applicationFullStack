import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductItem from './ProductItem';

import fetchProducts from '../actions/productsActions';

class ProductsForm extends Component {

    // componentDidMount() {
    //     this.props.fetchProducts()
    // }

    render() {

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
                <h2>Products</h2>
                <input
                    type="submit"
                    value="Load Products"
                    onClick={() => this.props.fetchProducts()}
                />
                {Products}
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