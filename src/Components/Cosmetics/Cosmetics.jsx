import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilites/Calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])

    const total = getTotal(cosmetics);

        return (
        <div>
            <h1>Welcome Cosmetics Website</h1>
            <p>Money needed: {total}</p>
            <div className='grid'>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)
            }
            </div>
        </div>
    );
};

export default Cosmetics;