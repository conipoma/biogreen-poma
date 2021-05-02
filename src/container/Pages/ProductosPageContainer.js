import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer';


export default function ProductosPageContainer() {
   const params = useParams()
//    const id = params.id
    return (
        <div>
            <h2 className="item-title">Nuestros productos</h2>
            <ItemListContainer />
            {/* <ItemDetailContainer id ={id}/> */}
        </div>
    )
}
