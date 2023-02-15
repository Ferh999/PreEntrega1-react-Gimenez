import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import Navbar from "../Navbar/Navbar"



const Header = () => {
    return (
        <div style={{ display: "flex", width: "100%", height: "20vh", justifyContent: "space-between", alignItems: "center", backgroundColor: "steelblue" }}>
            <Link to="/">
            <h2>PeriFeria</h2>
            </Link>
            
            <Navbar />
            <CartWidget />
        </div>
    )
}
export default Header