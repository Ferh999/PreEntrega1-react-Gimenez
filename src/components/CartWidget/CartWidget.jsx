import { Link } from 'react-router-dom';
import { IoIosCart } from 'react-icons/io';

const CartWidget = () => {
    return (
        <Link to="/cart">
        
        <IoIosCart style={{fontSize:"50px", marginRight:"25px",}}/>
    
        </Link>
    
    )
}

export default CartWidget