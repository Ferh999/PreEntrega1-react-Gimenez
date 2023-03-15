import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import Navbar from "../Navbar/Navbar"

import "./Header.css"


const Header = () => {
    return (
        <div className="header-stile">
            <Link to="/">
            <h2>PeriFeria</h2>
            </Link>
            
            <Navbar />
            <CartWidget />
        </div>
    )
}
export default Header