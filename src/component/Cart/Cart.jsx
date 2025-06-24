import PropTypes from 'prop-types';
import Bottle from '../Bottle/Bottle';
import './Cart.css'
const Cart = ({cart, handleRemoveCart}) => {
    return (
        <div>
            <p>Cart : {cart.length}</p>
            <div className='cartContainer'>
                {
                    cart.map(bottle=> 
                        <div className='cartIN' key={bottle.id}>
                            <img src={bottle.img} alt="" />
                            <button onClick={()=> handleRemoveCart(bottle.id)}>Remove</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

Cart.prototypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveCart: PropTypes.func.isRequired
}
export default Cart;