import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ( {product} ) => {

    const {addToCart, getQuantityById} = useContext ( CartContext )
    
    const onAdd = (cantidad) => {
        const obj = {
            ...product,
            Quantity: cantidad, 

        };

    addToCart(obj)
    };

    const quantity = getQuantityById(product.id)


    return (
    <div>
        <div>
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <h3>{product.price}</h3>
    </div>
    <ItemCount stock={product.stock} initial={quantity} onAdd={onAdd} />
    </div>    
    
    )
}

export default ItemDetail