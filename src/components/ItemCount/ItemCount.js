import React from 'react';
import { ButtonGroup, Button } from 'bootstrap-4-react';
import './ItemCount.css';

export default function ItemCount({increment, decrement, number, itemQuantity, onAdd, itemAdded}) {
  
    return (
        <div className="container-fluid countButton">
            <ButtonGroup aria-label="Basic example">
              <Button onClick={decrement}>-</Button>
              <Button> <span>{itemQuantity}</span></Button>
              <Button onClick={increment}>+</Button>
            </ButtonGroup>
        
            {
            itemQuantity > 0 ? (
              <ButtonGroup size="lg" className="mb-2">
                <Button onClick={onAdd}>Agregar al Carrito</Button>
              </ButtonGroup>
            ) : null 
            }
        
        </div>
    )

}
