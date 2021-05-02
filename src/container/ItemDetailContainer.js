import React, { useState, useEffect } from "react";
import getProductsId from '../Services/getProductsId'
import ItemDetail from '../components/ItemDetail/ItemDetail';
// import { useParams } from 'react-router-dom';


export default function ItemDetailContainer({id}) {

    <h1>Soy el item container</h1>

    const [itemDetail, setItemDetail] = useState({
        title: '', 
        description: '', 
        image: '',
        price: '', 
        categoryId: ''
    })

    useEffect(() => {
        getProductsId(id)
            .then(item => {
                setItemDetail({ 
                    title: item.title,
                    description: item.description,
                    image:item.image,
                    price: item.price, 
                    categoryId: item.categoryId
                })
            })        
        }, [id])
                

    return(

        <div>
            <h1>{itemDetail.title}</h1>
            <p>{itemDetail.description}</p>
        </div>
            // <div className="itemDetailContainer">
            //         <ItemDetail product={itemDetail} />
            // </div>
    )        
}
