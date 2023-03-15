import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import {products} from '../../productsMock'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailConteiner = () => {
    const {id} = useParams ()
    const [ product, setProduct] = useState ({})

    useEffect(()=>{
        let productSelected= products.find( prod => prod.id === Number(id))
        
        setProduct(productSelected)
    },[])







    return (
    <ItemDetail product={product}/>
    )
}

export default ItemDetailConteiner