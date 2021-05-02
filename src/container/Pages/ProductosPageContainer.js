import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer';


// const { getProduct } = require('../../Services/Services');


export default function ProductosPageContainer() {
   const params = useParams()
   const id = params.id
    return (
        <div>
            Hola desde ProductosPage 
            <ItemListContainer />
            <ItemDetailContainer id ={id}/>
        </div>
    )
}
