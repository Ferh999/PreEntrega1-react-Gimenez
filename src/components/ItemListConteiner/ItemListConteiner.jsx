

const ItemListConteiner = (props) => {
    
    const {edad, usuario} = props
    return (
    <div>
        <h2>Hola {usuario}</h2>
        <h3>{edad} años</h3>
    </div>
    )
}

export default ItemListConteiner