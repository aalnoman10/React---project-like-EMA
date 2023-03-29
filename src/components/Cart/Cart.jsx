import React from 'react';
import './Cart.css'

const Cart = ({ carts }) => {

    let total = 0;
    let totalShipping = 0;
    for (const cart of carts) {
        total = total + cart.price;
        totalShipping = totalShipping + cart.shipping
    }
    const tax = (total * 0.07).toFixed(2);
    console.log(carts);
    return (
        <div className='cart'>
            <h3>Cart Summary</h3>
            <p>Selected item : {carts.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping charge : {totalShipping}</p>
            <p> Tax : ${tax}</p>
            <p>Grand Total : ${total + +tax + totalShipping}</p>
        </div>
    );
};

export default Cart;