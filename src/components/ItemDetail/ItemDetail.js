import React from 'react';
import { useState, useEffect } from "react";
import './ItemDetail.css';
import ItemCountContainer from '../../container/ItemCountContainer';
 
import { useHistory } from 'react-router-dom';
import { ButtonGroup, Button } from 'bootstrap-4-react';


export default function ItemDetail({item}) {

    const [quantityProductsAdded, setQuantityProductAdded] = useState([]); 

    const [finishBuy, setFinishBuy] = useState(false);


    useEffect(() => {
        setQuantityProductAdded(quantityProductsAdded);
        }, []);

    let history = useHistory();

    // console.log(item)
    return(
        <div className="itemDetail">
            <h2 className="item-title">Detalles del producto</h2>

            <div className="infoProduct" key={item.id}>
                <div className="productPageOne">
                    <img className="imgItemDetail" src= {item.image} alt={item.title}></img>            
                </div>
                
                <ul className="productPageTwo">
                    <li>{item.title}</li>
                    <li>{item.description}</li>
                    <li>${item.price}</li>
                </ul>
            </div>
        

        <ItemCountContainer
            product={item}
            setQuantityProductAdded={setQuantityProductAdded}
            setFinishBuy={setFinishBuy}
        />

        {finishBuy ? (
                <ButtonGroup size="lg" className="mb-2">
                <Button onClick={() => history.push("/cart")}>
                    Finalizar compra
                </Button>
                </ButtonGroup>
            ) : null} 
    
    </div>
    );
}

