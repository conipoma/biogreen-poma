import React from 'react';
import './ItemDetail.css';


export default function ShowItemDetail({item}) {
    // console.log(item)
    return(
        <div className="itemDetail">
            <h2 className="item-title">Detalles del producto</h2>

            <div className="infoProduct" key={item.id}>
                <div className="productPageOne">
                    <img className="imgItemDetail" src= {item.image} alt={item.title}></img>            
                </div>
                
                <ul className="productPageTwo">
                    <li>{item.description}</li>
                    <li>${item.price}</li>
                </ul>
            </div>
        </div>
    );
}

