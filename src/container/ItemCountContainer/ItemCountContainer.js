import React, { useState, useEffect } from "react";
import ItemCount from '../../components/ItemCount/ItemCount';

export default function ItemCountContainer ({item, setQuantityProductAdded, setFinishBuy}) {
	
    const [product, setProduct] = useState(0);
  //Cantidad de item que pusiste en el contador

    const [stock, setStock] = useState(5);
    // Ese useState de arriba debería hacer un llamado a la base de datos para saber la cantidad de stock que hay. Pero en la consigna nos piden que solo que tenga 5.

    const [itemAdd, setItemAdd] = useState(false);
    // Seteamos el item y su cantidad

    useEffect( ()=> {
        console.log('Se actualizó el componente de la botonera')
      }, [product])

      // Función onADD que lo que setea es los items y los pasa a ItemDetail
      function onAdd(quantity) {
        console.log(`Se ejecutó función onAdd`)
        setItemAdd(true)
        setQuantityProductAdded( { productId: product.id, productPrice: product.price, quantity: product} )
        setFinishBuy(true);
      }

      // Función que suma +1 en el botón
      function increment() {
          if (stock > product) {
            setProduct(product + 1);
          } else {
              alert('No tenemos suficiente stock')
          }
      }

      // Función que suma -1 en el botón
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