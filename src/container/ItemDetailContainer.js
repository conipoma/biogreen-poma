import React, { useState, useEffect } from "react";
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const {getIdProducts} = require('../Services/Services'); 

export default function ShowItemDetailContainer() {

    const {id} = useParams();
    console.log(id)


    const [itemDetail, setItemDetail] = useState([])
    
    useEffect(() => {

        setTimeout(()=> {
            getIdProducts(id)
                .then((data)=> {
                    console.log(data);
                    console.log(id)
                    const [especificItem] = data.filter(product=> product.id === id);
                    setItemDetail(especificItem);
                })  
        }, 2000)
        

    }, [id]);

    // const {itemId} = useParams();
    
    return (
        <div className="itemDetailContainer">
            <ItemDetail productos={itemDetail}/>
        </div>
    )
}


