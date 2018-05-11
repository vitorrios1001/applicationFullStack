import React from 'react';


const ProductDatails = ({ item }) => {
    const { title, description, slug, price, _id, tags } = item;

    return (
        <div>
            <p>---------------------------------------------</p>
            <p>Id: {_id}</p>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Slug: {slug}</p>
            <p>Price: {price}</p>
            <p>Tags: [
                {
                    tags.map(tag => {
                        return (<span key={tag}> {tag} </span>)
                    })
                }]
            </p>
            <p>---------------------------------------------</p>
        </div>
    )
}

export default ProductDatails;