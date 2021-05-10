import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';

export default function CartPage({ itemSale }) {
    
  const { updateToCart, handleRemove } = useContext(CartContext);
  console.log(itemSale); //para test

  function capitalizarPrimeraLetra(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function increaseQuantity(){
      const newItem = {
          id: itemSale.id,
          category: itemSale.category,
          title: itemSale.title,
          price: itemSale.price,
          quantity: itemSale.quantity +1
      };
      console.log(newItem);
      updateToCart(newItem);
  }

  function reduceQuantity(){
      const newItem = {
          id: itemSale.id,
          category: itemSale.category,
          title: itemSale.title,
          price: itemSale.price,
          quantity: itemSale.quantity -1
      };
      console.log(newItem);
      updateToCart(newItem);
  }

  return (
      <tr>
          <th>{itemSale.category}</th>
          <td>{itemSale.title}</td>
          <td>
              {
                  itemSale.quantity < 5 ? <button onClick={increaseQuantity} className="btn btn-info btn-sm action-button">+</button> : <button className="btn btn-info btn-sm action-button" disabled>+</button>
              }
              <span className="cart-visual">{itemSale.quantity}</span>
              {
                  itemSale.quantity > 1 ? <button onClick={reduceQuantity} className="btn btn-danger btn-sm action-button">-</button> : <button className="btn btn-danger btn-sm action-button" disabled>-</button>
              }
          </td>
          <td>
              <button onClick={() => handleRemove(itemSale.id)} className="btn btn-warning btn-sm action-button">
                  Borrar
              </button>
          </td>
          <td>$ <span>{(itemSale.price*itemSale.quantity).toFixed(2)}</span></td>
      </tr>
  );
}