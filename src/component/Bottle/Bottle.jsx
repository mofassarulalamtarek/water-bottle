import React from 'react';
import './Bottle.css'
const Bottle = ({bottle , handleAddToCart}) => {
    const {name, price, img} = bottle;
    return (
        <div className='bottleC'>
            <h3>Name : {name}</h3>
            <img src={img} alt="" />
            <p>Price : ${price}</p>
            <button onClick={()=>handleAddToCart(bottle)} >Purches</button>
            {/* <p>HEllo World</p> */}
        </div>
    );
};

export default Bottle