import React, { useState, useEffect } from "react";
import ItemDetail from '../components/ItemDetail/ItemDetail'
const {getIdProducts} = require('../Services/Services') 

export default function ShowItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState([])
    
    useEffect(() => {

        setTimeout(()=> {
            getIdProducts
            .then((data)=> {

                const especificItem = data.find(product=> product.id === 1);
                setItemDetail(especificItem)
            })  
        }, 2000)
        

    }, []);

    // const {itemId} = useParams();
    
    return (
        <div className="itemDetailContainer">
            <ItemDetail productos={itemDetail}/>
        </div>
    )
}




// setTimeout(()=> {
//     getProduct
//     .then(data=>setItemDetail(data))
//     .catch(err=>console.log(err))
// }, 2000)