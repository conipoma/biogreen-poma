import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

export default function ItemList({ItemData}) {
    return (
        <div className="itemlistcontainer">
            <ul>
                {
                    ItemData.map((post) => {
                        return(
                            <Item key={post.id} title={post.title} image={post.image} />
                        )
                    })
                }
            </ul>
        </div>
    )
}
