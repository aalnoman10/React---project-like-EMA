import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Shope;