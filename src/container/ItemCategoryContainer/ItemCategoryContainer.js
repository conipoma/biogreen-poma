// import React, {useState, useEffect} from 'react';
// import {useParams} from 'react-router-dom';
// import ItemList from '../../components/ItemList/ItemList';
// // import Item
// const { getProductsByCategory } = require ('../../Services/getProductsByCategory');


// export default function ItemCategoryContainer() {
    
//     const { category } = useParams();
//     console.log(category);

//     const [categoryItem, setCategoryItem] = useState([]);

//     useEffect(() => {
//         console.log("Entro al useeeeeefect")

//         getProductsByCategory()
//                 .then(data=> {
//                 console.log(data);
//                 console.log(categoryItem);
            
//                 const [especificCategory] = data.filter(product=> product.category === category);
//                 console.log(especificCategory);
//                 setCategoryItem(especificCategory);
//             })  

//         }, [])
        
//         return (
//             <div>
//                 <ItemList product={ItemList} />
//             </div>

//         ) 




// }

// const { getProductsByCategory } = require('../../Services/getProductsByCategory');

// export default function ItemCategoryContainer() {
//     let {category} = useParams();
    
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         getProductsByCategory(category)
//             .then(res => setData(
//                 res.filter(function(item){
//                     return item.category === category;
                    
//                 })
//                 ))
//     },[category])
    
//     return (
//         <div>
            
//             <div>
//                 <ItemList item={data}/>
//             </div>
//         </div>
//     )
// }