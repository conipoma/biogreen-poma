import React, { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext([])
 
export default function CartProvider () { 

    const [cart, setCart] = useState([])
 
    function isInCart (id) {
      return cart.some(item => item.id === id)
    }
  
    function setCartItem({id, title, quantity}) {
      const isCurrentInCart = isInCart(id)
      if (isCurrentInCart) {
        const newCart = cart.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: quantity + item.quantity
            }
          }
        })
        return setCart([...newCart])
      }
      setCart([...cart, {id, title, quantity}])
    }





















}
//     const [cart, setCart] = useState([])
 
//     function isInCart (id) {
//         return cart.some(itemData => itemData.id === id)
//     }

//     function setCartItem({id, title, quantity, price}) {
//         const isCurrentInCart = isInCart(id)
//         if (isCurrentInCart) {
//         const newCart = cart.map(itemData => {
//             if (itemData.id === id) {
//             return {
//                 ...itemData,
//                 quantity: quantity + itemData.quantity,
//                 price: price
//             }
//         }
//             // return items
//         })
//         return setCart([...newCart])
//         }
//         setCart([...cart, {id, title, quantity, price}])
//     }

//     function clear(){
//         console.log('borrado cart')
//         setCart([])
//     }
//     function removeItem(id) {
//         const newCart = cart.filter((items) => items.id !== id);
//         setCart(newCart);
//         console.log(`eliminar item id ${id}`)
//     }

//     return <CartContext.Provider value={{setCartItem, setCart, clear, removeItem, cart}} />
// }