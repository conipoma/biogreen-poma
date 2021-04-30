import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';


export default function ShowItemListContainer(){


    const {categoryId} = useParams();

    const [item, setItem] = useState([]);

    useEffect(() => {
        const filterCategory = (item) => { 
            return item.categoryId === categoryId;
        }

        fetch('https://raw.githubusercontent.com/conipoma/biogreen-poma/main/src/components/Item/Item.json')
        .then((response) => response.json())
        .then((data) => setItem(data.filter(filterCategory)));
       
    }, [categoryId]);

    return(
        <div className="itemlistcontainer">
            <ItemList ItemData= {item} />
        </div>
    )
}