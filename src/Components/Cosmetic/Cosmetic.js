import React from 'react';
import { addToDb, removeFromDb } from '../../utilites/FakeDb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCard = (id) =>{
        addToDb(id);
    }

    const removeFromCard = id =>{
        removeFromDb(id);
    }
    return (
        <div className='Cosmetic'>
            <h3>Bye This: {name}</h3>
            <h5>Only for: ${price}</h5>
            <p>Id: {id}</p>
            <button onClick={()=> addToCard(id)}>Add to Card</button>
            <button onClick={() => removeFromCard(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;