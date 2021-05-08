import React from 'react'
import CartPage from '../components/Cart/Cart';

export default function CartPageContainer(){

    return (
      <div>
        <CartPage />
      </div>
    )
}





































// export default function CartPage() {


//     const cart = useContext(CartContext)
  
//     if (cart.cart.length === 0) return <h1>Aun no agregaste nada al carrito</h1>
  
//     return (
//       <div>
//       <ul>
      
//         {cart.map(item => {
//           return <li key={item.id}>
//             <p> producto: {item.title} unidades: {item.quantity} subtotal: ${item.quantity > 1 ?  item.price * item.quantity : item.price}</p> 
//           </li>
//         })}
//         <p>Precio total:{1} </p>
//         <button>Comprar</button>
//       </ul>
//       </div>
//     )
//   }
  