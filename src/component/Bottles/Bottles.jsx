import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLS } from '../utilities/localstorage,js';
import { getStoredCart } from '../utilities/localstorage,js';
const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    useEffect(()=> {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    },[])

    const [cart, setCart] =useState([]);

    const handleAddToCart = (bottle) => {
        const newcart = [...cart, bottle]
        setCart(newcart);
        addToLS(bottle.id);
    }

    useEffect(()=> {
        console.log(bottles.length)
        if( bottles.length < 0 ){
            const storedCart = getStoredCart();
            console.log(storedCart);
            onload(storedCart)
        }
    } ,[bottles])
    return (
        <div>
            <h4>Bottles {bottles.length}</h4>
            <p>Cart : {cart.length}</p>
            <div className='bottles-conatiner'>
                {bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)}
            </div>
        </div>
    );
};

export default Bottles;