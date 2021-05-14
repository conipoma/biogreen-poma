import React, { useState, useEffect } from "react";
import getProductsId from '../../Services/getProductsId'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';


export default function ItemDetailContainer() {
    const {id} = useParams();
    console.log(typeof id);
    
    const [itemDetail, setItemDetail] = useState({
        title: '', 
        description: '', 
        // image: '',
        price: '', 
        category: ''
    })
    
    useEffect(() => {
        getProductsId(id)
        .then(item => {
            setItemDetail({ 
                id: item.id,
                title: item.title,
                description: item.description,
                image:item.image,
                price: item.price, 
                category: item.category
            })
        })        
    }, [id])
    
    return(
        
        <div>
            <ItemDetail item = {itemDetail} />
        </div>
    )        
}
