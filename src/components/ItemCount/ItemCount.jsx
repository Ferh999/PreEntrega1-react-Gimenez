import {useEffect, useState} from 'react';

const ItemCount = ({ stock, initial=1, onAdd }) => {

    const [ contador, setContador ] = useState(initial);

    useEffect(()=> {
        setContador(initial)
    },[initial])

    const sumar =() => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador -1);
        }
    };

    return (
    <div>
        <h1>{contador}</h1>

        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        <button onClick={()=> onAdd(contador)}>
            Agregar Al Carrito
        </button>
    </div>
    )
}

export default ItemCount    