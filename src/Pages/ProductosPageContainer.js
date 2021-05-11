import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../container/ItemListContainer/ItemListContainer'


export default function ProductosPageContainer() {
   const params = useParams()
   const category = params.category
    return (
        <div>
            <h2 className="item-title">Nuestros productos</h2>
            <ItemListContainer category ={category}/>
        </div>
    )
}
