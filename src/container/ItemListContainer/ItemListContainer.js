import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';

export default function ShowItemLisContainer(){

    const [item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://raw.githubusercontent.com/conipoma/biogreen-poma/main/src/components/Item/Item.json')
            .then((response) => response.json())
            .then((data) => {
                console.log(typeof(data))
                console.log(data)
                setItem(data)
            })
        }, 2000);
    
    }, []);

    return(
        <div className="itemlistcontainer">
            <ItemList ItemData= {item} />
        </div>
    )
}