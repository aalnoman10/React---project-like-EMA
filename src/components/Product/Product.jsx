import React from 'react';

const Product = (props) => {
    const { name } = props.product
    return (
        <div>
            {name}
        </div>
    );
};

export default Product;