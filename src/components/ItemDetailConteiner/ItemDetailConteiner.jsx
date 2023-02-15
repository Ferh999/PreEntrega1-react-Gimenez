import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import {products} from '../../productsMock'



const ItemDetailConteiner = () => {
    const {id} = useParams ()
    const [ product, setProduct] = useState ({})

    useEffect(()=>{
        let productSelected= products.find( prod => prod.id === Number(id))
        
        setProduct(productSelected)
    },[])







    return (
    <div>
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
    </div>
    )
}

export default ItemDetailConteiner