import React, { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import getProducts from '../../Services/getProducts';
import { useParams } from 'react-router-dom';
import { getProductsId } from '../../Services/getProductsId';


export default function ItemListContainer(){
    // en el useState se pone un array vacio para poder luego ejecutar la funcion map() en el return
    const [items, setItems] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getProducts()
            .then(data => {
                setItems(data)
            })
    }, [])


    return (
            <ItemList items={items}/>
    )
    // useEffect(() => {
    //     const filterCategory = (item) => { 
    //         return item.categoryId === categoryId;
    //     }

    //     fetch('https://raw.githubusercontent.com/conipoma/biogreen-poma/main/src/components/Item/Item.json')
    //     .then((response) => response.json())
    //     .then((data) => setItem(data.filter(filterCategory)));
       
    // }, [categoryId]);

    // return(
    //     <div className="itemlistcontainer">
    //         <ItemList ItemData= {item} />
    //     </div>
    // )
}