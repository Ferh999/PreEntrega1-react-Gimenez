import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../../firebaseConfig'
import { getDoc, collection, doc } from "firebase/firestore"


const ItemDetailConteiner = () => {
    const {id} = useParams ()
    const [ product, setProduct] = useState ({})

    useEffect(()=>{
        
const itemCollection = collection(db , "products")
const ref = doc(itemCollection, id)
getDoc(ref)
.then((res)=>{
    setProduct({
        ...res.data(),
        id: res.id
    })
})
.catch( err => console.log(err))

    },[id])







    return (
    <ItemDetail product={product}/>
    )
}

export default ItemDetailConteiner