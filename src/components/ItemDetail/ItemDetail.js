import React from 'react';
import { useState, useEffect } from "react";
import './ItemDetail.css';
import ItemCountContainer from '../../container/ItemCountContainer/ItemCountContainer';
import { useHistory } from 'react-router-dom';
import { ButtonGroup, Button } from 'bootstrap-4-react';


export default function ItemDetail({item}) {

    const [quantityProductsAdded, setQuantityProductAdded] = useState([]); 
    const [finishBuy, setFinishBuy] = useState(false);

    useEffect(() => {
        setQuantityProductAdded(quantityProductsAdded);
        }, []);

    let history = useHistory();
    
    return(
        <div className="itemDetail">
            <h2 className="item-title">Detalles del producto</h2>

            <div className="infoProduct" key={item.id}>
                <div className="productPageOne">
                    <img className="imgItemDetail" src= {item.image} alt={item.title}></img>            
                </div>
                <ul className="productPageTwo">
                    <li className="product-name">{ item.title }</li>
                    <li>Categoría: { item.category }</li>
                    <li>{ item.description }</li>
                    <li>Precio: ${ item.price }</li>
                </ul>
            </div>
        

        <ItemCountContainer
            item={item}
            setQuantityProductAdded={setQuantityProductAdded}
            setFinishBuy={setFinishBuy}
        />
        <div className="finish-buy">
        {finishBuy ? (
                <ButtonGroup size="lg" className="mb-2">
                <Button className="finish-buy" onClick={() => history.push("/cart")}>
                    Finalizar compra
                </Button>
                </ButtonGroup>
            ) : null} 
         </div>
    </div>
    );
}

