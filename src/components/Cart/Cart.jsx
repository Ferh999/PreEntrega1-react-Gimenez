import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart = () => {

  const { cart, clearCart, deleteProductById } = useContext ( CartContext )

console.log (cart)

  return (
    <div>
      <h1>carrito de compras</h1>
      {
        cart.map( item => {
          return (
          <div key={item.id} style={{border: "solid 3px blue"}}>
            <h3>nombre:{item.title}</h3>
            <h3>precio:{item.price}</h3>
            <h3>cantidad:{item.quantity}</h3>
            <button onClick ={()=>deleteProductById(item.id)}>Quitar Producto</button>

          </div>
          )
        })
      }
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart