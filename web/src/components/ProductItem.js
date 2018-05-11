import React from 'react';

//import ProductDetails from './ProductDetails';

const ProductItem = ({ item }) => {

    

    const { _id, title } = item;

    return(
        <div>
            <p>---------------------------------------------</p>
            <p>Id: {_id}</p>
            <p>Title: {title}</p>
            <input type="submit" value="Details" />
            <p>---------------------------------------------</p>
        </div>           
       
    )
}

export default ProductItem;

