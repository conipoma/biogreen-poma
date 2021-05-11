import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList'; 
import { useParams } from 'react-router';
import getProducts from '../../Services/getProducts';


export default function ItemListContainer(){

    const {category} = useParams()
    console.log(category)
    const [item, setItem] = useState([]);
  
    useEffect(() => {
        getProducts()
        .then((data) => {
            const categoryId = data.filter(product => product.category === category) 
            console.log(categoryId)
            setItem(categoryId)
            console.log(category)
        })        
    
},[category] );


    return (
        <div className="itemlistcontainer">
            <ItemList itemData={item}/>
        </div>
      );
}