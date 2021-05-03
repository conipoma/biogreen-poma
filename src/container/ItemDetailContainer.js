import React, { useState, useEffect } from "react";
import getProductsId from '../Services/getProductsId'
// import ItemDetail from '../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import ItemCountContainer from '../container/ItemCountContainer';


export default function ItemDetailContainer() {
    const {id} = useParams();
    console.log(id)
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
    }, [])
    
    return(
        
        <div>
            <ItemDetail item = {itemDetail} />
        </div>
    )        
}
