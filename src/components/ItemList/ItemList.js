import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

export default function ItemList({items}) {
    return (
        <div className="itemlistcontainer">
            <ul>
                {items.map((post) => ( 
                        <Item title={post.title} image={post.image} key={post.id} id={post.id} />
                    ))}
            </ul>
        </div>
    )
}
