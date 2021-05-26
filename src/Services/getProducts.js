import db from '../firebase';
// import data from './data'


const productsCollection = db.collection('productos')

export async function getProducts(){
    const docRef = await productsCollection.get();

    const productos = docRef.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
    })
    return productos;
}

export default getProducts 

// function getProducts(){
//     const productsCollection = db.collection('productos')
//     let productos = []
    
//     productsCollection
//         .get()
//         .then(snapshot => {
//             productos = snapshot.docs.map(doc => {
//                 console.log(doc.data)
//                 let product = doc.data()
//                 return  {
//                    category: doc.category, 
//                     ...product
//                } 
//             })
//         })
//     return productos


// }
// export default getProducts
// function getProducts (){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//            resolve(data) 
//         }, 2000);
//     })
// }

// export default getProducts 


// FUNCION QUE DEBO CONSULTAR A MATI
    // const getProducts = new Promise ((resolve, reject) => {
    //     fetch('https://raw.githubusercontent.com/conipoma/biogreen-poma/main/src/components/Item/Item.json')
    //     .then(response => response.json())
    //     .then(data => resolve(data))
    //     .catch(err=>reject(err))
    
    // })
    
    // module.exports = {
    //     getProducts
    // }


