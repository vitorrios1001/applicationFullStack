import React from 'react';

import { Modal }from 'antd';

const ProductDetails = ({ item }) => {
    const { title, description, slug, price, _id, tags } = item;

    return (
        <div>
            <Modal
                title="Product Detail"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
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
            </Modal>            
        </div>
    )
}

export default ProductDetails;