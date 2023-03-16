import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Swal from 'sweetalert2'
import emptyCart from "../../assets/Images/emptyCart.svg"
import "./Cart.css"

const Cart = () => {

  const { cart, clearCart, deleteProductById, getTotalPrice } = useContext ( CartContext )

console.log (cart)

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


if (cart.length < 1){
return  <>
<img src={emptyCart} alt="" className="empty-cart"/>
<h3 className="vacio">Carrito Vacio</h3>
</>

}

  return (
    <div>
    
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
      <button variant="contained">Comprar</button>
      <button onClick={()=> clearCartAlert()}  variant="contained">Vaciar Carrito</button>
      </div>
      
      <h2>Total de la Compra es ${getTotalPrice()}</h2>
    </div>
  )
}

export default Cart