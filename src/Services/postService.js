import db from '../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';


// const productsCollection = db.collection('productos');
const orderCollection = db.collection('orders');


// export async function getProducts(){
//     const docRef = await productsCollection.get();

//     const productos = docRef.docs.map(doc => {
//         return { id: doc.id, ...doc.data()}
//     })
//     return productos;
// }



// function getProductsId(id) {
    
//     const itemRef = productsCollection.get();
    
//     const [productFinded] = itemRef.docs.filter(product=> product.id === id).map((product)=> {
//         return { id: product.id, ...product.data() }
//     })
//     return productFinded;     
// }

export function createOrder(buyer, item, total) {
    return orderCollection
      .add({
        buyer: buyer,
        item: item,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: total,
      })
      .then(function (orderId) {
        return orderId.id;
      })
      .catch(function (error) {
        return error;
      });
    }  

// export default = {getProducts, getProductsId} 

