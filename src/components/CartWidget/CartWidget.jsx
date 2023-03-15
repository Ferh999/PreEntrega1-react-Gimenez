import { Link } from 'react-router-dom';
import { IoIosCart } from 'react-icons/io';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const {cart} = useContext (CartContext)

    return (
        <Link to="/cart">
        
        <IoIosCart style={{fontSize:"50px", marginRight:"25px",}}/>
        <div className='bubble-counter'>
        <span>{cart.length}</span>
        </div>
        </Link>
    
    )
}

export default CartWidget