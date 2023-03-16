import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import "./ItemDetail.css"

const ItemDetail = ( {product} ) => {

    const {addToCart, getQuantityById} = useContext ( CartContext )
    
    const onAdd = (cantidad) => {
        const obj = {
            ...product,
            quantity: cantidad, 

        };

    addToCart(obj)

    Swal.fire({
        title: 'Bien!',
        text: 'Producto Agregado Exitosamente',
        imageUrl:product.img,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
    
};

    const quantity = getQuantityById(product.id)


    return (
    <div>
        <div className='product-cart'>
        <img src={product.img} alt="" />
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <h3>${product.price}</h3>
    </div>
    <ItemCount stock={product.stock} initial={quantity} onAdd={onAdd} />
    </div>    
    
    )
}

export default ItemDetail