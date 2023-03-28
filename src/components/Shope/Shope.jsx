import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shope.css'

const Shope = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='Shope-container'>
            <div className='product-container'>
                {
                    products.slice(0, 6).map(product => <Product
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className='cart-container'></div>
        </div>
    );
};

export default Shope;