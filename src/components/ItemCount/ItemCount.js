import React from 'react';
import { ButtonGroup, Button } from 'bootstrap-4-react';
import './ItemCount.css';


export default function ItemCount({increment, decrement, number}) {
  
    return (
        <div className="container-fluid countButton">
            <ButtonGroup aria-label="Basic example">
              <Button onClick={decrement}>-</Button>
              <Button> <span>{number}</span></Button>
              <Button onClick={increment}>+</Button>
            </ButtonGroup>
              <Button className="btn-light addButton" >Agregar al carrito</Button>
        </div>
    )

  }
