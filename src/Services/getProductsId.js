// import data from './data'
import products from './data'

function getProductsId (id) {
    console.log("esto me trae data")
    console.log(typeof(products))
    console.log(products)
    return new Promise((resolve) => {
        setTimeout(() => {
            const findProduct= products.find((product) => {
                return product.id === Number(id)
            })
            console.log(findProduct)
            resolve(findProduct)
        }, 2000);
    })
}

export default getProductsId 




// function getProductsId (id){
//     return new Promise((resolve, reject) => {
//         fetch('https://raw.githubusercontent.com/conipoma/biogreen-poma/main/src/components/Item/Item.json')
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(err=>reject(err))
//         setTimeout(() => {
//             const findProduct= data.filter((product) => {
//                 return id.id === id
//                 })
//             resolve(findProduct)
            
//         }, 2000);
            
                
       
//     }, []);

// }






// const getIdProducts = new Promise ((resolve,reject) => {

//     fetch('https://raw.githubusercontent.com/conipoma/biogreen-poma/main/src/components/Item/Item.json')
//         .then(response=>response.json())
//         .then(data=>resolve(data))
//         .catch(err=>reject(err))
// })