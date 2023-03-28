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

    const [carts, setCarts] = useState([]);

    const getProduct = (product) => {
        const newProduct = [...carts, product];
        setCarts(newProduct)
    }

    return (
        <div className='Shope-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        product={product}
                        func={getProduct}
                        key={product.id}
                    ></Product>)
                }
            </div>

            <div className='cart-container'>
                <h3>cart Summary</h3>
                <p>cart {carts.length}</p>
            </div>
        </div>
    );
};

export default Shope;