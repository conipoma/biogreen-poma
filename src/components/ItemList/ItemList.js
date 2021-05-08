import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

export default function ItemList({itemData}) {
    console.log(itemData)
    return (
        <div className="itemlistcontainer">
            
                {
                itemData.map((posts) => {

                    return ( 
                        <Item key={posts.id} title={posts.title} image={posts.image} id={posts.id} category={posts.category} />
                    )})
                }
        </div>
    )
}
