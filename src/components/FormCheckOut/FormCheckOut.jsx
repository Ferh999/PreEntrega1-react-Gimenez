import { useState } from 'react'

import { serverTimestamp, addDoc, collection, updateDoc, doc } from "firebase/firestore"
import { db } from '../../firebaseConfig'
import Cart from '../Cart/Cart'
import "./FormCheckOut.css"

const FormCheckout = ({cart, total, clearCart, setOrderId}) => {

    const [userInfo, setUserInfo] = useState({name:"",email:"", phone:""}) 

const handleSubmit =(e) => {
    e.preventDefault();
    const order ={
        buyer: userInfo,
        items: cart,
        total: total,
        date: serverTimestamp()
    }
    
    const orderCollection = collection(db, "orders")

    addDoc( orderCollection, order )
    .then( res => setOrderId(res.id))
    .catch(err=> console.log(err))


    cart.map( product=>{
        updateDoc(doc(db, "products", product.id), {stock: product.stock - product.quantity});
    });

    clearCart()


};
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ingrese su Nombre" name="name" 
            onChange={ (e) => setUserInfo({...userInfo, name:e.target.value})} className='check-out'/>
            <input type="text" placeholder="ingrese su email" name="email" 
            onChange={ (e) => setUserInfo({...userInfo, email:e.target.value})} className='check-out'/>
            <input type="text" placeholder='ingrese su telefono' name="phone" 
            onChange={ (e) => setUserInfo({...userInfo, phone:e.target.value})} className='check-out'/>
            <button className='btn-comprar'>Comprar</button>
        </form>
    </div>
    )
}

export default FormCheckout