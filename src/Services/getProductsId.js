import db from '../Firebase';

const productsCollection = db.collection('productos')

export async function getProductsId(id) {
    
    const itemRef = await productsCollection.get();
    const [productFinded] = itemRef.docs.filter(product=> product.id === id).map((product)=> {
        return { id: product.id, ...product.data() }
    })
    return productFinded;     
} 


// export async function getProductsId(id){
//     const itemById = productsCollection.where("id", "==", parseInt(id));
//     return itemById.get()
//     .then(snapshot => {
//         return snapshot.docs.map(doc => doc.data())
//     })
// }

export default getProductsId 


// import products from './data'

// function getProductsId (id) {
//     console.log("esto me trae data")
//     console.log(typeof(products))
//     console.log(products)
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const findProduct= products.find((product) => {
//                 return product.id === Number(id)
//             })
//             console.log(findProduct)
//             resolve(findProduct)
//         }, 2000);
//     })
// }

// export default getProductsId 






// const getIdProducts = new Promise ((resolve,reject) => {

//     fetch('https://raw.githubusercontent.com/conipoma/biogreen-poma/main/src/components/Item/Item.json')
//         .then(response=>response.json())
//         .then(data=>resolve(data))
//         .catch(err=>reject(err))
// })