import React from 'react';
import './ItemDetail.css';


export default function showItemDetail({product}) {
    return(
        <div className="itemDetail">
            <h2 className="item-title">Detalles del producto</h2>

            <div className="infoProduct" key={product.id}>
                <div className="productPageOne">
                    <img className="imgItemDetail" src= {product.image} alt={product.title}></img>            
                </div>
                
                <ul className="productPageTwo">
                    <li>{product.description}</li>
                    <li>{product.price}</li>
              </ul>
            </div>
        </div>
    );
}




// {
//     productos.map((eachItem) => {
//     return(
//         <div className="infoProduct" key={eachItem.id}>
//             <div className="productPageOne">
//                 <img className="imgItemDetail" src = {eachItem.image}></img>
//             </div>
//             <div className="productPageTwo">
//                 <p className="itemProduct">{eachItem.description}</p>
//                 <p className="itemProduct"> ${eachItem.price}</p>
//                 <hr></hr>
//             </div>
//         </div>)   
//     })
// }  