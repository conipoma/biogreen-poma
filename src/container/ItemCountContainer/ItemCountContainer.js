import React, { useState, useEffect, useContext } from "react";
import ItemCount from '../../components/ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext/CartContext';

export default function ItemCountContainer ({item, setQuantityProductAdded, setFinishBuy}) {
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(0);
    const [stock, setStock] = useState(5);
    const [itemAdd, setItemAdd] = useState(false);

    useEffect( ()=> {
        console.log('Se actualizó el componente de la botonera')
      }, [product])

      function onAdd() {
        console.log(`Se ejecutó función onAdd`);
        console.log("setQuantityProductAdded: " + setQuantityProductAdded);
        console.log(setQuantityProductAdded);
        setItemAdd(true)
        setQuantityProductAdded( { productId: product.id, productPrice: product.price, quantity: product} )
        setFinishBuy(true);

        const newItem = {
          id: item.id,
          category: item.category,
          title: item.title,
          price: item.price,
          quantity: product
        };
        console.log(newItem);
        addToCart(newItem);
      }

      function increment() {
          if (stock > product) {
            setProduct(product + 1);
          } else {
              alert('No tenemos suficiente stock')
          }
      }

      function decrement() {
        if (product > 1) {
            setProduct(product - 1);
        } else {
          alert("Tiene que agregar al menos un producto");
        }
      }

      return (
        <ItemCount
          increment={increment}
          decrement={decrement}
          onAdd={onAdd}
          itemQuantity={product}
          itemAdd={setItemAdd}
        />
      );
}
