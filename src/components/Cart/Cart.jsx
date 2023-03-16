import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import Swal from 'sweetalert2'
import emptyCart from "../../assets/Images/emptyCart.svg"
import "./Cart.css"
import { Button } from "@mui/material"
import FormCheckout from "../FormCheckOut/FormCheckOut"
import { Link } from "react-router-dom"

const Cart = () => {

  const { cart, clearCart, deleteProductById, getTotalPrice } = useContext ( CartContext )

const [buy, setBuy] = useState(false)
const [orderId, setOrderId] = useState(null);


  const clearCartAlert =()=> {
    


    Swal.fire({
      title: 'Esta seguro de Vaciar el Carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Vaciar Carrito!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          
          'Productos Borrados!',
          'El carrito se encuentra Vacio',
          'success'
        
        )
        clearCart()
      }
    })
    
}


if( orderId ){
  return  <div>
              <h1>El Id de tu compra es:{orderId}</h1>
              <Link to="/" className="btn-retorno">Seguir Comprando</Link>
          </div>
  }


if (cart.length < 1){
return  <>
<img src={emptyCart} alt="" className="empty-cart"/>
<h3 className="vacio">Carrito Vacio :( </h3>
</>

}




  return (

  <div>
    {
      !buy ? (<div>
    
      {
        cart.map( item => {
          return (
          <div key={item.id} className="carritox">
            <h3>Producto:{item.title}</h3>
            <h3>Precio:${item.price}</h3>
            <h3>Cantidad:{item.quantity}</h3>
            <img src={item.img} alt="" className="img-item"/>
            <button onClick ={()=>deleteProductById(item.id)} className="btn-quitar">Quitar Producto</button>

          </div>
          )
        })
      }

    
      <div className="botones-cart">
      <Button variant="contained" onClick={()=> setBuy(true)}>CheckOut</Button>
      <Button onClick={()=> clearCartAlert()}  variant="contained">Vaciar Carrito</Button>
      </div>
    
      <h2>Total de la Compra es ${getTotalPrice()}</h2>
    </div>) : (
    <FormCheckout cart={cart} total={getTotalPrice()} clearCart={clearCart} setOrderId={setOrderId}/>
    
    )}
    
    
    
    
  </div>
    
  );
};

export default Cart