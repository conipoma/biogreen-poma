import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../container/ItemListContainer/ItemListContainer'
// import ItemList from '../../components/ItemList/ItemList';


export default function ProductosPageContainer() {
   const params = useParams()
   const category = params.category
    return (
        <div>
            <h2 className="item-title">Nuestros productos</h2>
            {/* <ItemList product={ItemList} /> */}
            <ItemListContainer category ={category}/>
        </div>
    )
}
