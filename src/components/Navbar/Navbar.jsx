import ListNavbar from "../ListNavbar/ListNavbar"
import { Link } from "react-router-dom"


const Navbar = ()=> {
    return (
        <ul style={{
            display:"flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "700px",
            fontSize:"25px",
            fontWeight:"100px"
        }}>
            <Link to="/">
                <ListNavbar title="Inicio"/>
            </Link>
            <Link to="/category/mandos">
                <ListNavbar title="In"/>
            </Link>
            <Link to="/category/audiovisual">
                <ListNavbar title="Out"/>
            </Link>
            <Link>
                <ListNavbar title="Quienes Somos"/>
            </Link>
        </ul>
    )
}
export default Navbar