import React from 'react';
import { add, multiply } from '../../utilites/Calculate';

const Shoes = () => {
    const first = 20;
    const second = 20;
    const total =multiply(first,second);
    const sum = add(first, second);
    return (
        <div>
           <h2>Welcome to Shose</h2> 
           <p>Total: {total} and another: {sum}</p>
        </div>
    );
};

export default Shoes;