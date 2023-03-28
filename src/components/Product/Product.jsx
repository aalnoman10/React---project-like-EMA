import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, ratingsCount, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p> Market place {seller}</p>
                <p className='price'>Price ${price}</p>
                <p>ratings {ratings} of {ratingsCount}</p>
            </div>
            <button onClick={() => props.func(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;