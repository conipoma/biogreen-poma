import React from 'react';
import './ItemDetail.css';

export default function showItemDetail({productos}) {
    return(
        <div className="itemDetail">
            <h2 className="item-title">Detalles del producto</h2>
            {
                productos.map((eachItem) => {
                return(
                    <div className="infoProduct" key={eachItem.id}>
                        <div className="productPageOne">
                            <img className="imgItemDetail" src = {eachItem.image}></img>
                        </div>
                        <div className="productPageTwo">
                            <p className="itemProduct">{eachItem.description}</p>
                            <p className="itemProduct"> ${eachItem.price}</p>
                            <hr></hr>
                        </div>
                    </div>)   
                })
            }  
        </div>
        )
}