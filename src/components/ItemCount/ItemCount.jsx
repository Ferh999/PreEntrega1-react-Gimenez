import {useState} from 'react'

const ItemCount = () => {

    const [ contador, setContador ] = useState(0)
    const [ mostrar, setMostrar ] = useState(false)

    const sumar =() => {
        setContador(contador + 1)

    }
    const cambiarEstado = () => {
        setMostrar( !mostrar )
    }
    console.log(mostrar)

    return (
    <div>
        <h1 className={ mostrar ? "title-true" : "title-false"}>El contador esta en {contador}</h1>
        <button onClick={sumar}>sumar</button>
        <button onClick={cambiarEstado}>
            {
                mostrar ? "ocultar" : "Descripcion"
            }
        </button>
        {
            mostrar === true ? <h2>acá se muestra la descripcion</h2> : null
        }
    </div>
    )
}

export default ItemCount    