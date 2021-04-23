import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { ItemList } from '../Item/ItemList';

export default function ShowItem(){

    const [item, setItem] = useState([]);

    useEffect(() => {
        
        ItemList.map(element => console.log(element));
        setItem(ItemList)


    },[])

    return(
        <div>
            {
                item.map(singleItem => (
                    <Item title={singleItem.title} image = {singleItem.image} description = {
                      singleItem.description} price= {singleItem.price}/> 
                ))
            }
        </div>
    )
}