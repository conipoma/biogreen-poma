import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
import { Button } from 'bootstrap-4-react';


export default function CartPage({ itemSale }) {
    
  const { updateToCart, handleRemove } = useContext(CartContext);
  
  
  function increaseQuantity(){
      const newItem = {
          id: itemSale.id,
          category: itemSale.category,
          title: itemSale.title,
          price: itemSale.price,
          quantity: itemSale.quantity +1
      };
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
      updateToCart(newItem);
  }

  return (
      <tr>
        <th>{itemSale.category}</th>
        <td>{itemSale.title}</td>
        <td>
            {
                itemSale.quantity < 5 ? <Button type="button" onClick={increaseQuantity}>+</Button> : <Button type="button" disabled>+</Button>
            }
            <span className="cart-visual">{itemSale.quantity}</span>
            {
                itemSale.quantity > 1 ? <Button type="button" onClick={reduceQuantity}>-</Button> : <Button disabled>-</Button>
            }
        </td>
        <td>
            <Button type="button" onClick={() => handleRemove(itemSale.id)}>
                Borrar
            </Button>
        </td>
        <td>$ <span>{(itemSale.price*itemSale.quantity).toFixed(2)}</span></td>
      </tr>
  );
}