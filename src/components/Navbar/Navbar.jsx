import ListNavbar from "../ListNavbar/ListNavbar"



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
            <ListNavbar title="Inicio"/>
            <ListNavbar title="Productos"/>
            <ListNavbar title="Servicios"/>
            <ListNavbar title="Quienes Somos"/>
        </ul>
    )
}
export default Navbar